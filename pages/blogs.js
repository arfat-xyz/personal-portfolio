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
        <Head>
          <link
            rel="arfat-rahman"
            href="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
          />
          <title>
            Arfatur Rahman - MERN Developer and WordPress Expert | Web
            Development Services
          </title>
          <meta
            name="description"
            content="Arfatur Rahman is a highly skilled MERN developer with expertise in ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, and DaisyUI. Contact Arfatur for custom web applications or WordPress websites."
          />
          <meta
            name="keywords"
            content="Arfat, Arfatur Rahman, Arfat Rahman, MERN developer, ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, DaisyUI, web development, custom web applications, WordPress websites"
          />

          <meta
            property="og:image"
            content="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="author" content="Arfatur Rahman" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="generator" content="WordPress 5.8" />
          <meta name="theme-color" content="#101724" />
          <meta name="rating" content="General"></meta>
        </Head>
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

//   console.log(blogsArray);
//   console.log("arfat");
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
