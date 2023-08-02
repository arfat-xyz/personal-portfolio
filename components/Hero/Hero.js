import React from "react";
import { fetchHomePageDetails } from "../../constants/fetchHomePageDetails";

import {
  Section,
  SectionText,
  SectionTitle,
  TypewritingTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import HideComponent from "../ExtraComponent/HideComponent";
import { LeftSection } from "./HeroStyles";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = (props) => {
  const heroDetails = fetchHomePageDetails("Hero");
  return (
    <Section row nodepadding>
      <LeftSection>
        <SectionTitle main center>
          <Link href={"/"}>Arfat Rahman</Link>
        </SectionTitle>

        <TypewritingTitle main center>
          <TypeAnimation
            sequence={[
              "MERN Developer",
              2000,
              "React  Developer",
              2000,
              "Node  Developer",
              2000,
              "WordPress Developer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </TypewritingTitle>

        <HideComponent />
        <SectionText>{heroDetails?.text}</SectionText>
        <Button
          onClick={() =>
            window.open(
              `https://drive.google.com/uc?export=download&id=19e0eTlAqxZOxjaLVhg17U_ne9yZTKGvt`,
              "_blank"
            )
          }
        >
          Download CV
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
