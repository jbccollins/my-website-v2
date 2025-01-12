"use client";

import { MailIcon } from "lucide-react";
import Image from "next/image";
import IconTextButton from "./IconTextButton";
import ResumePdfViewer from "./ResumePdfViewer";

export default function IconTextButtonLinks() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-72 lg:flex lg:max-w-none sm:mx-0 mx-auto">
      <ResumePdfViewer className="w-32" />
      <a href="mailto:jbccollins@gmail.com">
        <IconTextButton text="Email" className="w-32">
          <MailIcon size={24} />
        </IconTextButton>
      </a>
      <a href="https://github.com/jbccollins" target="_blank" rel="noreferrer">
        <IconTextButton text="GitHub" className="w-32">
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
        <IconTextButton text="LinkedIn" className="w-32">
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
