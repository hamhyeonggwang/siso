"use client";

import * as React from "react";

type LogoImageProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function LogoImage({ className = "h-10 w-auto object-contain", width = 80, height = 44 }: LogoImageProps) {
  const [hidden, setHidden] = React.useState(false);

  if (hidden) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="시소감각통합연구소 로고"
      width={width}
      height={height}
      className={className}
      onError={() => setHidden(true)}
    />
  );
}
