import React from 'react';
import Link from 'next/link';
import BlogCard from '@/components/Sharedcomponent/Blog/blogCard';
import { getAllPosts } from "@/utils/markdown";

const Blogsmall: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]).slice(6, 9);

    return (
        <section className="flex flex-wrap bg-section justify-center bg-PowderBlue lg:py-24 py-16 dark:bg-darklight" id="blog">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="flex items-baseline justify-between flex-wrap">
                    <h2 className="mb-11 text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white" >Blog post</h2>
                    <Link href="#" className="flex items-center gap-3 text-base leading-none text-primary py-2 rounded-lg px-6 font-medium hover:text-white border border-primary hover:bg-primary">
                        View More
                    </Link>
                </div>
                <div className="grid grid-cols-12 gap-7">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full md:col-span-4 sm:col-span-6 col-span-12">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogsmall;
