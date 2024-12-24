"use client";

import { BriefcaseIcon, GraduationCapIcon, LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Badge from "./Badge";

interface BadgeData {
  text: string;
  imageUrl: string;
  asCircle?: boolean;
  border?: boolean;
}

interface TimelineItem {
  title: string;
  companyName: string;
  description: string;
  date: string;
  imageUrl: string;
  imageBackgroundClassName?: string;
  NodeIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  badges: BadgeData[];
}

const DOTNET_BADGES: BadgeData[] = [
  {
    text: ".NET",
    imageUrl: "/technology-logos/dotnet.png",
  },
  {
    text: "C#",
    imageUrl: "/technology-logos/csharp.svg",
  },
];

const RAILS_BADGES: BadgeData[] = [
  {
    text: "Rails",
    imageUrl: "/technology-logos/rails.png",
  },
  {
    text: "Ruby",
    imageUrl: "/technology-logos/ruby.svg",
  },
];

const TYPE_SCRIPT_AND_TAILWIND_BADGES: BadgeData[] = [
  {
    text: "TypeScript",
    imageUrl: "/technology-logos/typescript.png",
  },
  {
    text: "Tailwind",
    imageUrl: "/technology-logos/tailwind.png",
    asCircle: true,
  },
];

const NEXTJS_BADGES: BadgeData[] = [
  {
    text: "Next.js",
    imageUrl: "/technology-logos/nextjs.svg",
    asCircle: true,
    border: true,
  },
  {
    text: "React",
    imageUrl: "/technology-logos/react.png",
  },
  ...TYPE_SCRIPT_AND_TAILWIND_BADGES,
];

const timelineItems: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Tuff Shed",
    description:
      "As part of a small team of just two engineers at Tuff Shed, I built their high-traffic retail website (tuffshed.com) from the ground up using Next.js, with content served through the Storyblok CMS. I developed robust and secure backend APIs with .NET Core and Microsoft Entra, which power essential business functions such as product pricing, asset management, and business unit administration. I also automated and streamlined the deployment and management of Azure cloud infrastructure using Infrastructure as Code tools like Bicep and GitHub Actions. Additionally, I created custom solutions to integrate the company's core stack with external tools, including Salesforce and supply chain vendors.",
    date: "2024 • Present",
    imageUrl: "/tuff-shed-logo-square.png",
    NodeIcon: BriefcaseIcon,
    badges: [
      ...DOTNET_BADGES,
      ...NEXTJS_BADGES,
      {
        text: "Azure",
        imageUrl: "/technology-logos/azure.png",
      },
      {
        text: "Bicep",
        imageUrl: "/technology-logos/bicep.png",
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    companyName: "Caribou",
    description:
      "Worked on the backend team building the API for a new product.",
    date: "2022 • 2024",
    imageUrl: "/caribou-logo-square.png",
    NodeIcon: BriefcaseIcon,
    badges: [...RAILS_BADGES, ...NEXTJS_BADGES],
  },
  {
    title: "Software Engineer",
    companyName: "ZeroFox",
    description:
      "Worked on the frontend team building the user interface for a new product.",
    date: "2021 • 2022",
    imageUrl: "/zerofox-logo-square.svg",
    imageBackgroundClassName: "bg-[rgb(19,30,41)]",
    NodeIcon: BriefcaseIcon,
    badges: [
      {
        text: "Go",
        imageUrl: "/technology-logos/golang.svg",
      },
      {
        text: "Terraform",
        imageUrl: "/technology-logos/terraform.svg",
      },
    ],
  },
  {
    title: "Software Developer",
    companyName: "Fireside",
    description: "Studied computer science and mathematics.",
    date: "2018 • 2021",
    imageUrl: "/fireside-logo-square.png",
    NodeIcon: GraduationCapIcon,
    badges: [
      ...DOTNET_BADGES,
      {
        text: "Angular",
        imageUrl: "/technology-logos/angular.svg",
      },
      ...TYPE_SCRIPT_AND_TAILWIND_BADGES,
    ],
  },
  {
    title: "Software Developer",
    companyName: "CATT Lab",
    description: "Studied computer science and mathematics.",
    date: "2014 • 2018",
    imageUrl: "/catt-lab-logo-square.jpg",
    NodeIcon: GraduationCapIcon,
    badges: [
      {
        text: "Django",
        imageUrl: "/technology-logos/django.svg",
      },
      {
        text: "Python",
        imageUrl: "/technology-logos/python.png",
      },
      {
        text: "React",
        imageUrl: "/technology-logos/react.png",
      },
      {
        text: "JavaScript",
        imageUrl: "/technology-logos/javascript.png",
      },
    ],
  },
  {
    title: "Student",
    companyName: "University of Maryland",
    description: "Studied computer science and mathematics.",
    date: "2012 • 2016",
    imageUrl: "/umd-logo-square.svg",
    imageBackgroundClassName: "bg-gray-700",
    NodeIcon: GraduationCapIcon,
    badges: [],
  },
];

export default function Timeline() {
  // Alternating left and right alignment
  return (
    <div className="flex flex-col gap-8">
      {timelineItems.map((item) => {
        const {
          imageUrl,
          title,
          badges,
          imageBackgroundClassName,
          companyName,
          date,
        } = item;
        const imageBGClass = imageBackgroundClassName || "bg-white";
        return (
          <div key={date} className="flex gap-4 w-full">
            <div className="relative w-40 h-40 rounded-md flex-shrink-0 flex-grow-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={`${imageBGClass} object-contain rounded-md`}
                sizes="200px"
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold">{companyName}</div>
                <div className="text-md font-bold">{title}</div>
                <div className="text-sm">{date}</div>
              </div>
              <div>{item.description}</div>
              <div className="flex gap-2 flex-wrap">
                {badges.map((badge) => {
                  return (
                    <div key={badge.text}>
                      <Badge {...badge} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
