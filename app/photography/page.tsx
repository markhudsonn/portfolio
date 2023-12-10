import Image from "next/image";

import Gallery from "./components/Gallery";
import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg"

export default function About() {
    return (
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            My Photography
          </h1>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Hobbyist photographer.
          </p>
        </div>
        <div className="lg:hidden mb-8">
          <div
            className="animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
          </div>
        </div>
        <div className="hidden lg:block">
          <Gallery />
        </div>
        <div className="flex flex-col gap-10 animate-in md:gap-">
        </div>
    </div>
    );
    }