import Loading from "@/components/ExtraComponent/Loading";
import {
  BlogContentCode,
  BlogContentContainer,
  BlogContentImage,
  BlogContentLink,
  SingleBlogHeading,
  SingleBlogHeroImage,
} from "@/components/Projects/SingleBlogStyles";
import { client, urlFor } from "@/constants/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PortableTextComponents } from "@portabletext/react";

const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState();
  const router = useRouter();
  const slug = router?.query?.slug;
  const components = {
    types: {
      image: ({ value }) => (
        <BlogContentImage
          src={urlFor(value).width(600).url()}
          alt={`${singlePost.metadesc} arfat arfatur rahman arfat rahman`}
          width={600}
          height={500}
        />
      ),

      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    marks: {
      code: ({ children }) => <BlogContentCode>{children}</BlogContentCode>,
      link: ({ children, value }) => (
        <BlogContentLink href={value.href}>{children}</BlogContentLink>
      ),
    },
  };
  const getSinglePost = async () => {
    await client
      .fetch(`*[_type == "blog" && slug.current == '${slug}'][0]`)
      .then((res) => setSinglePost(res));
  };
  useEffect(() => {
    getSinglePost();
  }, [slug]);
  console.log(singlePost);
  if (!singlePost) return <Loading />;
  return (
    <>
      <SingleBlogHeroImage
        width={1200}
        height={700}
        src={urlFor(singlePost?.blogimage).width(1200).url()}
        alt={`${singlePost?.metadesc} arfat, arfatur rahman, arfat rahman`}
      />
      <BlogContentContainer>
        <SingleBlogHeading> {singlePost?.title} </SingleBlogHeading>
        <PortableText
          value={singlePost?.content}
          components={components}
        ></PortableText>
      </BlogContentContainer>
    </>
  );
};

export default SingleBlog;
