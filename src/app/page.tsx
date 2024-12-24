import IconTextButtonLinks from "@/components/IconTextButtonLinks";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex gap-4">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex-shrink-0 flex-grow-0 border-2">
          <Image
            src="/james-profile-pic.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Hi, I&apos;m James!</h1>
          <div>
            I am a Senior Software Engineer with over 10 years of experience
            developing web-based applications powered by secure and efficient
            APIs.
          </div>
          <div>
            I nerd out over geospatial data, fun visualizations, and slick user
            interfaces.
          </div>
          <div>
            I currently work remotely for Tuff Shed, building out their core
            stack. TODO.
          </div>
          <div>
            Have fun exploring my website and feel free to shoot me an email or
            check out my resume if you are so inclined.
          </div>
          <IconTextButtonLinks />
        </div>
      </div>
      <Timeline />
    </div>
  );
}
