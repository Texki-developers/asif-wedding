import React from "react";

export default function GalleryCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="w-full h-60 object-cover rounded-lg"
      />
    </div>
  );
}
