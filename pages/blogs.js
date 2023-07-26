import React, { useEffect, useState } from "react";
import {
  BlogCardsContainer,
  Section,
  SectionTitle,
} from "../styles/GlobalComponents";
import Head from "next/head";
import SingleBlogPostCard from "@/components/Blog/SingleBlogPostCard";
import Loading from "@/components/ExtraComponent/Loading";
import { client } from "@/constants/sanityClient";
import { Layout } from "@/layout/Layout";
import { ArfatMeta } from "./arfat";

const blogs = () => {
  const [blogsArray, setBlogs] = useState();

  const getBlogPosts = async () => {
    await client
      .fetch(`*[_type == "blog"] | order(_updatedAt desc)`)
      .then((res) => setBlogs(res));
  };
  useEffect(() => {
    getBlogPosts();
  }, []);

  if (!blogsArray) return <Loading />;
  return (
    <>
      <Layout>
        <ArfatMeta />
        <Section>
          <SectionTitle main>All Blogs</SectionTitle>
          <BlogCardsContainer>
            {blogsArray.map((blog) => (
              <SingleBlogPostCard blog={blog} key={blog?.key} />
            ))}
          </BlogCardsContainer>
        </Section>
      </Layout>
    </>
  );
};

export default blogs;
// import React, { useEffect, useState } from "react";
// import { Section, SectionTitle } from "../styles/GlobalComponents";
// import { client } from "@/constants/sanityClient";
// import Loading from "@/components/ExtraComponent/Loading";
// import { BlogCardsContainer } from "@/styles/GlobalComponents";
// import SingleBlogPostCard from "@/components/Blog/SingleBlogPostCard";

// const BlogPage = () => {
//   const [blogsArray, setBlogs] = useState();

//   const getBlogPosts = async () => {
//     await client
//       .fetch(`*[_type == "blog"] | order(_updatedAt desc)`)
//       .then((res) => setBlogs(res));
//   };
//   useEffect(() => {
//     getBlogPosts();
//   }, []);

//   if (!blogsArray) return <Loading />;
//   return (
//     <Section>
//       <BlogCardsContainer>
//         {blogsArray.map((blog) => (
//           <SingleBlogPostCard blog={blog} key={blog?.key} />
//         ))}
//       </BlogCardsContainer>
//     </Section>
//   );
// };

// export default BlogPage;
