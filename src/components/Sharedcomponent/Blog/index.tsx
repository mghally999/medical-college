import React from 'react';
import Link from 'next/link';
import BlogCard from './blogCard';
import { getAllPosts } from "@/utils/markdown";

const Blog: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]).slice(0, 3);

    return (
        <section className="flex flex-wrap bg-section justify-center dark:bg-darkmode" id="blog">
            <div className="sm:container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-4 px-6">
                <div className="flex items-baseline justify-between flex-wrap">
                    <h2 className="mb-11 text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Blog post</h2>
                    <Link href="#" className="flex items-center gap-3 leading-none text-base text-primary py-4 rounded-lg px-6 font-medium hover:text-white border border-primary hover:bg-primary">
                        View More
                    </Link>
                </div>
                <div className="grid grid-cols-12 gap-7">
                    {posts.map((blog, i) => (
                        <div key={i} className={`w-full md:col-span-4 sm:col-span-6 col-span-12`} data-aos="fade-up" data-aos-delay={`${i*200}`} data-aos-duration="1000">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;