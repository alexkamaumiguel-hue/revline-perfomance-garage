import React, { useState, useMemo } from 'react';

// Try multiple extensions when an image fails to load.
// Usage: <ImageWithFallback src="/src/assets/images/hero.jpg" alt="hero" />
const DEFAULT_EXTS = ['.jpg', '.png', '.svg', '.webp', '.avif', '.jpeg'];

function buildCandidates(src) {
  if (!src) return [];
  const normalized = src.replace(/\\/g, '/');
  const lastDot = normalized.lastIndexOf('.');
  const hasExt = lastDot > normalized.lastIndexOf('/');

  const candidates = [];
  if (hasExt) {
    candidates.push(normalized);
    const base = normalized.slice(0, lastDot);
    const originalExt = normalized.slice(lastDot + 1).replace(/\./g, '');
    for (const ext of DEFAULT_EXTS) {
      const p = base + ext;
      if (p !== normalized) candidates.push(p);
      // also try double-extension pattern like base.originalExt.ext -> features.jpg.png
      if (originalExt) {
        const double = base + '.' + originalExt + ext;
        if (double !== normalized && !candidates.includes(double)) candidates.push(double);
      }
    }
  } else {
    // no extension provided, try all
    for (const ext of DEFAULT_EXTS) candidates.push(normalized + ext);
  }

  // dedupe while preserving order
  return Array.from(new Set(candidates));
}

const ImageWithFallback = ({ src, alt = '', className = '', style = {}, ...rest }) => {
  const candidates = useMemo(() => buildCandidates(src), [src]);
  const [idx, setIdx] = useState(0);

  if (!candidates || candidates.length === 0) return null;

  const handleError = () => {
    if (idx < candidates.length - 1) setIdx(i => i + 1);
    else setIdx(candidates.length); // mark as exhausted
  };

  if (idx >= candidates.length) return null;

  return (
    <img
      src={candidates[idx]}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  );
};

export default ImageWithFallback;
