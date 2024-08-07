import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";
import Section from "@/components/Section";

import Workplaces from "../components/Workplaces";
import deluxebaseLogo from "public/work/deluxebase-logo.png";
import newcastleLogo from "public/education/newcastle-university-logo.png";
import tranbyLogo from "public/education/tranby-school-logo.png";
import hullCollegiateLogo from "public/education/hull-collegiate-school-logo.png";
import pgLogo from "public/work/pg-logo.png";

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
            Comp-Sci Undergrad @ Newcastle University<br />
            IT Project Management Intern @ Procter & Gamble
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
            <p>Hello, I&apos;m Mark.</p>

            <p>
              Currently taking a placement year from my Computer Science degree at Newcastle University to work as an IT Project Management Intern at{" "}
              <Link href="https://www.pg.co.uk/" className="underline">Procter & Gamble</Link>.
            </p>
            <p>
              Other than coding, I enjoy football, running, skiing and travelling.
            </p>
            <p>
              To find out about my projects and work experience, check out the <Link className = "underline" href="/projects">projects</Link> pages.
            </p>
          </div>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <Workplaces items={workplaces} />
          </div>
        </Section>
        <Section heading="Education" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <Workplaces items={education} />
          </div>
        </Section>

      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "IT Project Management Intern",
    company: "Procter & Gamble",
    time: "Jul '24 - Jul '25",
    imageSrc: pgLogo,
    link: "https://www.pg.co.uk/",
    description: "Digital Workplace Services"
  },
  {
    title: "Developer",
    company: "Deluxebase",
    time: "May '23 - Present",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "IT & E-commerce",
    company: "Deluxebase",
    time: "Jun '22 - Sep '22",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "IT Systems",
    company: "Deluxebase",
    time: "Jun '21 - Sep '21",
    imageSrc: deluxebaseLogo,
    link: "https://deluxebase.com",
  },
  {
    title: "E-commerce",
    company: "Deluxebase",
    time: "Jun '20 - Oct '20",
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
    company: "Tranby School",
    time: "A",
    imageSrc: tranbyLogo,
    link: "https://www.tranby.org.uk/",
  },
  {
    title: "GCSEs",
    company: "Tranby School",
    time: "5x Grade 9s,\n5x Grade 8s",
    imageSrc: tranbyLogo,
    link: "https://www.tranby.org.uk/",
  }
];

