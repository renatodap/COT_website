const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder for each required image
const images = [
  'clube_paulistano.webp',
  'omaki_athletes_academy.webp', 
  'omaki_biahaddad.webp',
  'omaki_coaching_on_court.webp',
  'omaki_federer.webp',
  'omaki_kyrmair.webp',
  'omaki_logo.webp',
  'omaki_stefani.webp',
  'omaki_team.webp',
  'omaki_travel.webp',
  'travel2.webp',
  'trophy.webp'
];

const createPlaceholderSVG = (name) => {
  return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#0E7C7B"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">
    ${name.replace('.webp', '').replace(/_/g, ' ').toUpperCase()}
  </text>
</svg>`;
};

// Ensure directory exists
const dir = path.join(__dirname, 'public', 'omaki');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create placeholder SVG files
images.forEach(image => {
  const svgContent = createPlaceholderSVG(image);
  const svgPath = path.join(dir, image.replace('.webp', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created placeholder: ${svgPath}`);
  
  // Also create a simple stub .webp file (just a text file for now)
  const webpPath = path.join(dir, image);
  if (!fs.existsSync(webpPath)) {
    fs.writeFileSync(webpPath, 'placeholder');
    console.log(`Created stub: ${webpPath}`);
  }
});

console.log('\\n✅ Placeholder images created!');