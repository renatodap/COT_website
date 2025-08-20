const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  inputDir: 'public',
  outputDir: 'public/optimized',
  formats: ['webp', 'avif'],
  sizes: [
    { width: 320, suffix: '-320w' },   // Mobile
    { width: 640, suffix: '-640w' },   // Mobile large
    { width: 768, suffix: '-768w' },   // Tablet
    { width: 1024, suffix: '-1024w' }, // Desktop
    { width: 1920, suffix: '-1920w' }, // Desktop large
    { width: 2560, suffix: '-2560w' }, // 4K
  ],
  quality: {
    webp: 85,
    avif: 80,
    jpg: 85,
  },
  skipPatterns: [
    'optimized/**',
    'favicon/**',
    'icons/**',
  ],
};

// Create optimized directory
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error);
  }
}

// Get all images to optimize
async function getImages() {
  const patterns = [
    `${CONFIG.inputDir}/**/*.{jpg,jpeg,png,webp}`,
  ];
  
  const files = await glob(patterns, {
    ignore: CONFIG.skipPatterns.map(p => `${CONFIG.inputDir}/${p}`),
  });
  
  return files;
}

// Generate blur placeholder
async function generateBlurDataURL(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(10, 10, { fit: 'inside' })
      .blur()
      .toBuffer();
    
    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.error(`Error generating blur placeholder for ${imagePath}:`, error);
    return null;
  }
}

// Optimize single image
async function optimizeImage(imagePath) {
  const filename = path.basename(imagePath);
  const nameWithoutExt = path.parse(filename).name;
  const relativeDir = path.relative(CONFIG.inputDir, path.dirname(imagePath));
  const outputDir = path.join(CONFIG.outputDir, relativeDir);
  
  await ensureDir(outputDir);
  
  console.log(`Optimizing: ${imagePath}`);
  
  try {
    const metadata = await sharp(imagePath).metadata();
    const results = {
      original: imagePath,
      optimized: [],
      blurDataURL: null,
    };
    
    // Generate blur placeholder
    results.blurDataURL = await generateBlurDataURL(imagePath);
    
    // Generate different sizes and formats
    for (const size of CONFIG.sizes) {
      // Skip if image is smaller than target size
      if (metadata.width && metadata.width < size.width) {
        continue;
      }
      
      for (const format of CONFIG.formats) {
        const outputPath = path.join(
          outputDir,
          `${nameWithoutExt}${size.suffix}.${format}`
        );
        
        try {
          await sharp(imagePath)
            .resize(size.width, null, {
              withoutEnlargement: true,
              fit: 'inside',
            })
            .toFormat(format, {
              quality: CONFIG.quality[format],
            })
            .toFile(outputPath);
          
          const stats = await fs.stat(outputPath);
          results.optimized.push({
            path: outputPath,
            format,
            width: size.width,
            size: stats.size,
          });
          
          console.log(`  ✓ Generated: ${path.basename(outputPath)} (${Math.round(stats.size / 1024)}KB)`);
        } catch (error) {
          console.error(`  ✗ Error generating ${outputPath}:`, error.message);
        }
      }
    }
    
    // Also optimize the original format
    const originalFormat = path.extname(imagePath).slice(1).toLowerCase();
    const optimizedOriginalPath = path.join(outputDir, filename);
    
    await sharp(imagePath)
      .toFormat(originalFormat === 'png' ? 'png' : 'jpeg', {
        quality: CONFIG.quality.jpg,
        progressive: true,
      })
      .toFile(optimizedOriginalPath);
    
    return results;
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error);
    return null;
  }
}

// Generate image manifest
async function generateManifest(results) {
  const manifest = {};
  
  for (const result of results) {
    if (!result) continue;
    
    const relativePath = path.relative('public', result.original);
    manifest[relativePath] = {
      blurDataURL: result.blurDataURL,
      sources: result.optimized.map(opt => ({
        src: path.relative('public', opt.path).replace(/\\/g, '/'),
        width: opt.width,
        format: opt.format,
        size: opt.size,
      })),
    };
  }
  
  const manifestPath = path.join('public', 'image-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Generated image manifest: ${manifestPath}`);
  
  return manifest;
}

// Generate Next.js image loader configuration
async function generateLoaderConfig(manifest) {
  const config = `// Auto-generated image loader configuration
export const imageLoader = {
  deviceSizes: [320, 640, 768, 1024, 1920, 2560],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp', 'image/avif'],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: false,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
};

export const imageManifest = ${JSON.stringify(manifest, null, 2)};

export function getOptimizedImageProps(src) {
  const manifest = imageManifest[src] || {};
  return {
    blurDataURL: manifest.blurDataURL,
    sources: manifest.sources || [],
  };
}
`;

  const configPath = path.join('lib', 'image-config.ts');
  await fs.writeFile(configPath, config);
  console.log(`✓ Generated loader config: ${configPath}`);
}

// Main execution
async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const images = await getImages();
  console.log(`Found ${images.length} images to optimize\n`);
  
  if (images.length === 0) {
    console.log('No images to optimize.');
    return;
  }
  
  const results = [];
  for (const image of images) {
    const result = await optimizeImage(image);
    results.push(result);
  }
  
  const manifest = await generateManifest(results);
  await generateLoaderConfig(manifest);
  
  // Calculate savings
  let originalSize = 0;
  let optimizedSize = 0;
  
  for (const result of results) {
    if (!result) continue;
    
    try {
      const stats = await fs.stat(result.original);
      originalSize += stats.size;
      
      for (const opt of result.optimized) {
        optimizedSize += opt.size;
      }
    } catch (error) {
      // Ignore errors
    }
  }
  
  const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
  
  console.log('\n📊 Optimization Summary:');
  console.log(`  Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Savings: ${savings}%`);
  console.log('\n✅ Image optimization complete!');
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, generateManifest };