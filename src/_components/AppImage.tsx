import Image from "next/image";


type AppImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function AppImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: AppImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
