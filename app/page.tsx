import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";
import Section from "@/components/Section";

import Workplaces from "../components/Workplaces";
import deluxebaseLogo from "public/work/deluxebase-logo.png";
import newcastleLogo from "public/education/newcastle-university-logo.png";
import tranbyLogo from "public/education/tranby-school-logo.png";
import hullCollegiateLogo from "public/education/hull-collegiate-school-logo.png";

import PostList from "./blog/components/ui/PostList";
import Stats from "@/components/Stats";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-10">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Mark Hudson
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Computer Science Undergrad @ Newcastle University.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
          <Stats />
        </div>
      </div>
      <div
        className="flex flex-col gap-10 animate-in md:gap-"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello, I&apos;m Mark Hudson!</p>

            <p>
             I have a passion coding; I am currently in my second year of studying for a Computer Science degree at Newcastle University.
            </p>
            <p>
              Other than coding, I enjoy football, running, skiing and travelling.
            </p>
            <p>
              To find out about my projects and work experience, check out the <Link className = "underline" href="/blog">blog</Link> and <Link className = "underline" href="/projects">projects</Link> pages.
            </p>
          </div>
        </Section>
        <Section heading="Education" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <Workplaces items={education} />
          </div>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Currently working part time remotely as a Business Developer at {" "}
              <Link
                className="underline"
                href="https://deluxebase.com"
              >
                Deluxebase
              </Link>, creating bespoke applications and automating processes.
            </p>
            <p>
              Worked Summers at Deluxebase between 2020 and 2022. This involved creating and optimising Amazon listings, analysing the IT infrastructure to create a document, upgrading systems and also driving Ecommerce sales through email marketing.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Business Developer",
    company: "Deluxebase",
    time: "May '23 - Present",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "IT and E-commerce Sales",
    company: "Deluxebase",
    time: "June '22 - September '22",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "IT Systems",
    company: "Deluxebase",
    time: "June '21 - September '21",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "E-commerce",
    company: "Deluxebase",
    time: "June '20 - October '20",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
];

const education = [
  {
    title: "BSc Computer Science",
    company: "Newcastle University",
    time: "Undergrad",
    imageSrc: newcastleLogo,
    link: "https://newcastle.ac.uk",
  },
  {
    title: "Edexcel A-Level Maths",
    company: "Tranby School",
    time: "A*",
    imageSrc: tranbyLogo,
    link: "https://www.tranby.org.uk/",
  },
  {
    title: "OCR A-Level Computer Science",
    company: "Tranby School",
    time: "A*",
    imageSrc: tranbyLogo,
    link: "https://www.tranby.org.uk/",
  },
  {
    title: "AQA A-Level Physics",
    company: "Tranby School",
    time: "A",
    imageSrc: tranbyLogo,
    link: "https://www.tranby.org.uk/",
  },
  {
    title: "OCR Additional Maths",
    company: "Hull Collegiate School",
    time: "A",
    imageSrc: hullCollegiateLogo,
    link: "https://www.tranby.org.uk/",
  },
  {
    title: "GCSEs",
    company: "Hull Collegiate School",
    time: "5x Grade 9s, 5x Grade 8s",
    imageSrc: hullCollegiateLogo,
    link: "https://www.tranby.org.uk/",
  }
];

