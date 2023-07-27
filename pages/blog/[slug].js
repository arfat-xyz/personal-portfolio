import Loading from "@/components/ExtraComponent/Loading";
import {
  BlogContentCode,
  BlogContentContainer,
  BlogContentImage,
  BlogContentLink,
  SingleBlogAuthor,
  SingleBlogAuthorDetails,
  SingleBlogAuthorDetailsH1,
  SingleBlogAuthorImage,
  SingleBlogHeading,
  SingleBlogHeroImage,
} from "@/components/Projects/SingleBlogStyles";
import { client, urlFor } from "@/constants/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PortableTextComponents } from "@portabletext/react";
import { ArfatMeta } from "../../layout/arfat";
import Header from "@/components/Header/Header";
import { Layout } from "@/layout/Layout";
import Link from "next/link";

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
  // if (!singlePost) return <Loading />;
  return (
    <>
      <Layout>
        <ArfatMeta />
        {!singlePost ? (
          <Loading />
        ) : (
          <>
            <SingleBlogHeroImage
              width={1200}
              height={700}
              src={urlFor(singlePost?.blogimage)?.width(1200)?.url()}
              alt={`${singlePost?.metadesc} arfat, arfatur rahman, arfat rahman`}
            />
            <SingleBlogAuthor>
              <Link href={"/"}>
                <SingleBlogAuthorImage
                  width={50}
                  height={50}
                  src="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
                  alt="arfat.xyz arfatur rahman "
                />
              </Link>
              <SingleBlogAuthorDetails>
                <Link href={"/"}>
                  <SingleBlogAuthorDetailsH1 title="Arfatur Rahman arfat rahman">
                    Arfatur Rahman
                  </SingleBlogAuthorDetailsH1>
                </Link>
              </SingleBlogAuthorDetails>
            </SingleBlogAuthor>
            <BlogContentContainer>
              <SingleBlogHeading> {singlePost?.title} </SingleBlogHeading>
              <PortableText
                value={singlePost?.content}
                components={components}
              ></PortableText>
            </BlogContentContainer>
          </>
        )}
      </Layout>
    </>
  );
};

export default SingleBlog;
