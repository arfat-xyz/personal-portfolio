import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import HideComponent from "../ExtraComponent/HideComponent";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <Container>
      <Div1>
        <HideComponent />
        <Link
          href={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Arfatur Rahman</Span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href={"https://www.arfat.xyz/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={path === "/" ? "#project" : "/#project"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink href={path === "/" ? "#tech" : "/#tech"}>
            Technologies
          </NavLink>
        </li>
        <li>
          <NavLink href={path === "/" ? "#blogs" : "/#blogs"}>Blogs</NavLink>
        </li>
        <li>
          <NavLink href={path === "/" ? "#about" : "/#about"}>About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/arfat-xyz">
          <AiFillGithub size={"3rem"} />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/arfatxyz/">
          <AiFillLinkedin size={"3rem"} />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/arfat.xyz">
          <AiFillFacebook size={"3rem"} />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
