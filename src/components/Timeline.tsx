"use client";

import {
  BriefcaseIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  LucideProps,
} from "lucide-react";
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
  companyWebsiteUrl: string;
  description: string;
  date: string;
  imageUrl: string;
  imageBackgroundClassName?: string;
  NodeIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  badges: BadgeData[];
}

const POSTGRESQL_BADGE: BadgeData = {
  text: "PostgreSQL",
  imageUrl: "/technology-logos/postgresql.svg",
};

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
    companyWebsiteUrl: "https://tuffshed.com",
    description:
      "As part of a small team of just two engineers at Tuff Shed, I built their high-traffic retail website (tuffshed.com) from the ground up using Next.js. I developed robust and secure backend APIs with .NET Core and Microsoft Entra, powering essential functions such as product pricing, asset management, and business unit administration. I automated and streamlined the deployment and management of Azure cloud resources using Infrastructure as Code tools like Bicep and GitHub Actions. Additionally, I created custom solutions to integrate the company's core stack with external tools, including Salesforce and supply chain vendors.",
    date: "2024 • Present",
    imageUrl: "/tuff-shed-logo-square.png",
    NodeIcon: BriefcaseIcon,
    badges: [
      ...DOTNET_BADGES,
      ...NEXTJS_BADGES,
      POSTGRESQL_BADGE,
      {
        text: "Azure",
        imageUrl: "/technology-logos/azure.png",
      },
      {
        text: "Bicep",
        imageUrl: "/technology-logos/bicep.png",
      },
      {
        text: "Storyblok",
        imageUrl: "/technology-logos/storyblok.svg",
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    companyName: "Caribou",
    companyWebsiteUrl: "https://caribou.com",
    description:
      "At Caribou, I designed and built internal APIs to integrate Caribou’s refinancing platform with third-party lenders, including Credit Karma and Uber. Additionally, I modernized the front-end of an existing Rails application by migrating it to a Next.js/React framework, which improved performance, scalability, and provided a more intuitive user interface.",
    date: "2022 • 2024",
    imageUrl: "/caribou-logo-square.png",
    NodeIcon: BriefcaseIcon,
    badges: [
      ...RAILS_BADGES,
      ...NEXTJS_BADGES,
      {
        text: "Contentful",
        imageUrl: "/technology-logos/contentful.svg",
      },
    ],
  },
  {
    title: "Software Engineer",
    companyName: "ZeroFox",
    companyWebsiteUrl: "https://zerofox.com",
    description:
      "At ZeroFox, I developed a high-throughput phishing detection tool to identify suspicious URLs and alert customers when their brands are impersonated online. Additionally, I collaborated on building a custom headless browser implementation to crawl and extract text and image data from websites for threat analysis.",
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
      {
        text: "BigQuery",
        imageUrl: "/technology-logos/bigquery.svg",
      },
    ],
  },
  {
    title: "Software Developer",
    companyName: "Fireside",
    companyWebsiteUrl: "https://fireside21.com",
    description:
      "At Fireside, I architected a custom messaging service to connect congressional staffers with constituents and agencies. Additionally, I developed mapping tools to selectively correspond with constituents based on their geographic location and upgraded several .NET applications to use a modern Angular front-end.",
    date: "2018 • 2021",
    imageUrl: "/fireside-logo-square.png",
    NodeIcon: GraduationCapIcon,
    badges: [
      ...DOTNET_BADGES,
      POSTGRESQL_BADGE,
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
    companyWebsiteUrl: "https://www.cattlab.umd.edu/",
    description:
      "At The CATT Lab, I converted legacy Flash applications to modern React apps and created a custom tailored canvas-based rendering solution that greatly improved the scalability and performance of several map-based tools.",
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
      POSTGRESQL_BADGE,
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
    title: "Bachelor of Science",
    companyName: "University of Maryland",
    companyWebsiteUrl: "https://umd.edu",
    description:
      "At the University of Maryland, I attained a Bachelor of Science in Computer Science with a minor in Astronomy.",
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
    <div className="flex flex-col md:gap-12 gap-16">
      {timelineItems.map((item) => {
        const {
          imageUrl,
          title,
          badges,
          imageBackgroundClassName,
          companyName,
          date,
        } = item;
        const imageBGClass = imageBackgroundClassName || "bg-black";

        const TitleText = () => (
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold inline-flex items-center gap-2">
              <a
                href={item.companyWebsiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                {companyName}
                <ExternalLinkIcon size={16} />
              </a>
            </div>

            <div className="text-md font-bold">{title}</div>
            <div className="text-sm">{date}</div>
          </div>
        );

        return (
          <div key={date} className="md:flex-row flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <div className="relative md:w-40 md:h-40 h-20 w-20 rounded-md flex-shrink-0 flex-grow-0">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className={`${imageBGClass} object-contain rounded-md`}
                  sizes="200px"
                />
              </div>
              <div className="md:hidden">
                <TitleText />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="hidden md:block">
                <TitleText />
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
