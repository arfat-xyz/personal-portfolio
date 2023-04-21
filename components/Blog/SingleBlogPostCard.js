import { urlFor } from "@/constants/sanityClient";
import {
  BlogCardButton,
  BlogCardCategory,
  BlogCardDetails,
  BlogCardHeading,
  BlogCardImage,
  BlogCardSlug,
  SingleBlogCard,
} from "@/styles/GlobalComponents";
import React from "react";

const SingleBlogPostCard = ({ blog }) => {
  const metaDesc =
    blog?.metadesc?.length > 180
      ? `${blog?.metadesc.slice(0, 180)}...`
      : blog?.metadesc;
  return (
    <>
      <SingleBlogCard>
        <BlogCardImage
          src={urlFor(blog?.blogimage).width(400).url()}
          width={"400"}
          height={"400"}
          alt={`${blog?.title} -- arfat rahman, arfat, arfatur rahman`}
        />
        <BlogCardDetails>
          <div>
            <BlogCardCategory>
              <span>{blog?.category}</span>
            </BlogCardCategory>
            <BlogCardHeading> {blog?.title} </BlogCardHeading>
            <BlogCardSlug>{metaDesc && metaDesc}</BlogCardSlug>
            <BlogCardButton href={`/blog/${blog?.slug?.current}`}>
              <span>Read More</span>
            </BlogCardButton>
          </div>
        </BlogCardDetails>
      </SingleBlogCard>
    </>
  );
};

export default SingleBlogPostCard;
