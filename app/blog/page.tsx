import { Metadata } from "next";
import { allPosts } from ".contentlayer/generated";
import PostList from "./components/ui/PostList";

export const metadata: Metadata = {
  title: "Blog | Mark Hudson",
  description:
    "Some blogs about coding and more ...",
};

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {posts.length} blog posts about coding projects and more ...
          </p>
        </div>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {/* <PostList posts={posts} /> */}
      </div>
      <div
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
      </div>
    </div>
  );
}
