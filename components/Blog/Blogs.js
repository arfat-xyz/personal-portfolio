import React, { useEffect, useState } from "react";
import {
  BlogCardButton,
  BlogCardCategory,
  BlogCardDetails,
  BlogCardHeading,
  BlogCardImage,
  BlogCardSlug,
  BlogCardsContainer,
  BlogSectionBtnContainer,
  Section,
  SectionDivider,
  SectionTitle,
  SingleBlogCard,
} from "../../styles/GlobalComponents";
import Image from "next/image";
import { client, urlFor } from "@/constants/sanityClient";
import Loading from "../ExtraComponent/Loading";
import Link from "next/link";
import SingleBlogPostCard from "./SingleBlogPostCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  const getBlogPosts = async () => {
    await client
      .fetch(`*[_type == "blog"] | order(_updatedAt desc)[0..2]`)
      .then((res) => setBlogs(res));
  };
  useEffect(() => {
    getBlogPosts();
  }, []);
  if (!blogs) return <Loading />;
  return (
    <>
      <Section id="blogs">
        <SectionDivider />
        <SectionTitle title="arfat rahman Blogs">Blogs</SectionTitle>
        <BlogCardsContainer>
          {blogs.map((blog) => (
            <SingleBlogPostCard blog={blog} key={blog?.key} />
          ))}
        </BlogCardsContainer>
        <BlogSectionBtnContainer>
          <Link href={`/blogs`}>
            <span>See More</span>
          </Link>
        </BlogSectionBtnContainer>
      </Section>
    </>
  );
};

export default Blogs;
