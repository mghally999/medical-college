import BlogList from "@/components/BlogList";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grids | CS Medical College",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="flex flex-wrap lg:py-24 py-16 justify-center dark:bg-darkmode">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-12 px-0 gap-7">
            {posts.map((blog, i) => (
              <div
                key={i}
                className="w-full md:col-span-4 sm:col-span-6 col-span-12"
              >
                <BlogList blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
