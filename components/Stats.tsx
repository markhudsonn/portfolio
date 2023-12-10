"use client";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { FaYoutube, FaGithub, FaLinkedin, FaMailBulk, FaVoicemail } from "react-icons/fa";
import { ArrowTrendingUpIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";
import { addCommas } from "@/lib/utils";

export function YouTube() {
  const { data: youtubeData, error: youtubeDataError } = useSWR(
    `/api/youtube`,
    fetcher
  );

  if (youtubeDataError) return <div>failed to load</div>;
  return addCommas(youtubeData?.subscribers);
}

export function GitHub() {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=brianruizy`,
    fetcher
  );

  if (githubDataError) return <div>failed to load</div>;
  return addCommas(githubData?.stars);
}

export default function Stats() {
  const { theme } = useTheme();
  const username = "brianruizy";

  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=${username}`,
    fetcher
  );
  const { data: youtubeData, error: youtubeDataError } = useSWR(
    `/api/youtube`,
    fetcher
  );

  return (
    <ul
      className={clsx(
        "space-y-2 animated-list",
        theme === "terminal" ? "font-mono tracking-tight" : ""
      )}
    >
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"https://github.com/markhudsonn"}
        >
          <FaGithub className="text-xl" />
          <div>
            <span> Github</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link 
          className="flex gap-3 items-center" 
          href={"https://www.linkedin.com/in/markhuds/"}
        >
          
          <FaLinkedin className="w-5 h-5" />
          <div>
            <span> LinkedIn</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"mailto:markhudsonn4@gmail.com"}
        >
          <ArrowUpRightIcon className="w-5 h-5" />
          <div>
            <span> Email me</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
