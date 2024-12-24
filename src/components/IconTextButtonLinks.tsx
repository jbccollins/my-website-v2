"use client";

import Image from "next/image";
import IconTextButton from "./IconTextButton";
import ResumePdfViewer from "./ResumePdfViewer";

export default function IconTextButtonLinks() {
  return (
    <div className="flex items-center  gap-4">
      <ResumePdfViewer />
      <a href="https://github.com/jbccollins" target="_blank" rel="noreferrer">
        <IconTextButton text="GitHub">
          <Image
            src="/github-mark.png"
            alt="GitHub logo"
            width={24}
            height={24}
          />
        </IconTextButton>
      </a>
      <a
        href="https://www.linkedin.com/in/james-collins-41349124/"
        target="_blank"
        rel="noreferrer"
      >
        <IconTextButton text="LinkedIn">
          <Image
            src="/linkedin-logo.svg"
            alt="LinkedIn logo"
            width={24}
            height={24}
          />
        </IconTextButton>
      </a>
    </div>
  );
}
