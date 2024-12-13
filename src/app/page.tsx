import ResumePdfViewer from "@/components/ResumePdfViewer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <div>James Collins</div>
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
          <Image
            src="/james-profile-pic.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <ResumePdfViewer />
      </div>
    </div>
  );
}
