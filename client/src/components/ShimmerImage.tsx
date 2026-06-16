import { useState } from "react";

interface ShimmerImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * Image component with branded purple shimmer loading state.
 * Shows an animated gradient placeholder until the image loads.
 */
export default function ShimmerImage({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
}: ShimmerImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Shimmer placeholder */}
      {!loaded && !error && (
        <div className="absolute inset-0 shimmer-loading rounded-inherit" />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
}
