import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const SingleBlogHeroImage = styled(Image)`
  width: 100%;
  height: 700px;
`;

export const BlogContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const SingleBlogAuthor = styled.div`
  width: 90%;
  display: flex;
  margin: 10px auto;
  gap: 20px;
`;
export const SingleBlogAuthorImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const SingleBlogAuthorDetails = styled.div`
  display: flex;
`;
export const SingleBlogAuthorDetailsH1 = styled.h1`
  font-size: 20px;
`;

export const SingleBlogHeading = styled.h1`
  font-size: 28px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;
export const BlogContentImage = styled(Image)`
  margin: 20px 0;
  width: 60%;
  height: auto;
`;
export const BlogContentCode = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  width: 100%;
  background: #fff;
  color: #000;
`;
export const BlogContentLink = styled(Link)`
  color: red;
`;
