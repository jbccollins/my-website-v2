import Hero from "@/components/Hero";
import IconTextButtonLinks from "@/components/IconTextButtonLinks";
import Timeline from "@/components/Timeline";
import { yearsOfExperience } from "@/lib/utils";
import Image from "next/image";

const yoe = yearsOfExperience(2014);

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <div className="relative h-[calc(100vh-64px)] w-full">
        <Hero />
      </div>
      <div className="md:flex-row flex-col flex gap-4">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex-shrink-0 flex-grow-0 border-2 hidden md:block">
          <Image
            src="/james-profile-pic.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0 flex-grow-0 border-2 block md:hidden">
          <Image
            src="/james-profile-pic.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Hi, I&apos;m James!</h1>
          <div>
            I am a Senior Software Engineer with over {yoe} of experience
            developing web-based applications powered by secure and efficient
            APIs.
          </div>

          <IconTextButtonLinks />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-bold border-b-2 pb-1">
          Work and Education
        </div>
        <Timeline />
      </div>
    </div>
  );
}
