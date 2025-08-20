'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  quality?: number;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  blurDataURL?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

// Shimmer placeholder for loading state
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const dataUrl = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  fill = false,
  priority = false,
  className,
  containerClassName,
  quality = 85,
  sizes,
  objectFit = 'cover',
  blurDataURL,
  fallbackSrc = '/placeholder.jpg',
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [_hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    onError?.();
  };

  // Default sizes for responsive images
  const defaultSizes = fill 
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    : sizes;

  // Generate blur placeholder if not provided
  const placeholder = blurDataURL ? 'blur' : 'empty';
  const blurData = blurDataURL || (fill ? undefined : dataUrl(width, height));

  if (fill) {
    return (
      <div className={cn('relative overflow-hidden', containerClassName)}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <Image
          src={imgSrc}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={defaultSizes}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          style={{ objectFit }}
          placeholder={placeholder}
          blurDataURL={blurData}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div 
      className={cn('relative overflow-hidden', containerClassName)}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={defaultSizes}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        style={{ objectFit }}
        placeholder={placeholder}
        blurDataURL={blurData}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

// Picture component for art direction
interface PictureProps extends Omit<OptimizedImageProps, 'src'> {
  sources: Array<{
    srcSet: string;
    media?: string;
    type?: string;
  }>;
  src: string;
}

export function Picture({
  sources,
  src,
  alt,
  ...props
}: PictureProps) {
  return (
    <picture>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      ))}
      <OptimizedImage src={src} alt={alt} {...props} />
    </picture>
  );
}

// Background image component with lazy loading
interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
  parallax?: boolean;
  loading?: 'lazy' | 'eager';
}

export function BackgroundImage({
  src,
  alt: _alt = '',
  className,
  children,
  overlay = false,
  overlayOpacity = 0.5,
  parallax = false,
  loading = 'lazy',
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`bg-${src}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src, loading]);

  useEffect(() => {
    if (!isInView) return;

    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src, isInView]);

  return (
    <div
      id={`bg-${src}`}
      className={cn(
        'relative overflow-hidden',
        parallax && 'bg-fixed',
        className
      )}
      style={{
        backgroundImage: isLoaded ? `url(${src})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Export utility function for generating responsive image props
export function getResponsiveImageProps(
  baseSrc: string,
  alt: string,
  options?: {
    width?: number;
    height?: number;
    sizes?: string;
    quality?: number;
  }
) {
  const { width = 1200, height = 630, sizes, quality = 85 } = options || {};
  
  return {
    src: baseSrc,
    alt,
    width,
    height,
    quality,
    sizes: sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw',
    loading: 'lazy' as const,
  };
}