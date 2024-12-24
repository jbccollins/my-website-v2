"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  imageUrl: string;
  asCircle?: boolean;
  border?: boolean;
}

export default function Badge(props: Props) {
  const { text, imageUrl, asCircle, border } = props;
  return (
    <div className="flex items-center gap-2 border-2 rounded-full px-4 py-2">
      <div
        className={twMerge(
          "relative w-[24px] h-[24px]  overflow-hidden rounded-xs",
          asCircle && "rounded-full bg-white",
          border && "border border-gray-500"
        )}
      >
        <Image
          src={imageUrl}
          alt={imageUrl}
          fill
          className="object-contain"
          sizes="24px"
        />
      </div>
      <div>{text}</div>
    </div>
  );
}
