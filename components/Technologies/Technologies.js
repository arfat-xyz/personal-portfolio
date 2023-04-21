import React, { useState } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  fetchHomePageDetails,
  fetchTechnologyDetails,
} from "../../constants/fetchHomePageDetails";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import HideComponent from "../ExtraComponent/HideComponent";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  const technologyDetails = fetchHomePageDetails("Technologies");
  const uiUX = fetchTechnologyDetails("UI/UX");
  const frontEnd = fetchTechnologyDetails("Front-End");
  const backEnd = fetchTechnologyDetails("Back-End");
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <HideComponent />
      <SectionText>
        {/* I've worked with a range a technologies in the web development world.

        From Back-end to design */}
        {technologyDetails && technologyDetails?.text}
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            {/* <ListParagraph>
              Experience with <br /> React.js <br /> NextJS
            </ListParagraph> */}
            {frontEnd?.tech_name &&
              frontEnd?.tech_name.map((tName, i) => (
                <ListParagraph key={i}>{tName}</ListParagraph>
              ))}
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            {/* <ListParagraph>
              Experience with <br /> NodeJS <br /> Databases
            </ListParagraph> */}
            {backEnd?.tech_name &&
              backEnd?.tech_name.map((tName, i) => (
                <ListParagraph key={i}>{tName}</ListParagraph>
              ))}
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            {/* <ListParagraph>
              Learning with <br /> tools like Figma
            </ListParagraph> */}
            {uiUX?.tech_name &&
              uiUX?.tech_name.map((tName, i) => (
                <ListParagraph key={i}>{tName}</ListParagraph>
              ))}
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
