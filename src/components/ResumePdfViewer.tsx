"use client";

import { DownloadIcon, FileTextIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import IconTextButton from "./IconTextButton";
import { Button, ButtonProps } from "./ui/button";

const RESUME_PDF_URL =
  "https://ads0jzrxeixxduzl.public.blob.vercel-storage.com/james-collins-resume.pdf";

export default function ResumePdfViewer(props: ButtonProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    setOpen(true);
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setOpen(false);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(RESUME_PDF_URL);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "james-collins-resume";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  return (
    <>
      {open && (
        <div className="backdrop-filter backdrop-blur-sm bg-black bg-opacity-75 fixed top-0 left-0 w-[100vw] h-[100vh] z-10" />
      )}
      <div>
        <IconTextButton text="Resume" onClick={openModal} {...props}>
          <FileTextIcon size={16} />
        </IconTextButton>

        <dialog
          ref={dialogRef}
          className="w-full h-full bg-transparent "
          onClose={closeModal}
        >
          <div className="flex flex-col gap-[22px] w-full h-full">
            <div className="flex justify-end gap-4">
              <IconTextButton text="Download" onClick={handleDownload}>
                <DownloadIcon size={16} />
              </IconTextButton>
              <Button onClick={closeModal} size="icon">
                <XIcon size={16} />
              </Button>
            </div>
            <object
              className="pdf w-full h-full"
              data={RESUME_PDF_URL}
            ></object>
          </div>
        </dialog>
      </div>
    </>
  );
}
