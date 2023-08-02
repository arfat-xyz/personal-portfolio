import React, { useEffect, useState } from "react";
import { client } from "../../constants/sanityClient";

import {
  HideDiv,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import HideComponent from "../ExtraComponent/HideComponent";

const Acomplishments = () => {
  const [github, setGithub] = useState({});
  const [acomplishmentData, setAcomplishmentData] = useState([]);
  const getAcomplishment = async () => {
    const pets = await client
      .fetch(`*[_type == "acomplishment"]`)
      .then((res) => setAcomplishmentData(res));
  };
  useEffect(() => {
    const getGithub = async () => {
      fetch("https://api.github.com/users/arfat-xyz")
        .then((response) => response.json())
        .then((data) => setGithub(data));
    };
    getGithub();
    getAcomplishment();
  }, []);
  return (
    <Section>
      <SectionTitle title="arfat rahman Personal Acomplishments">
        Personal Acomplishments
      </SectionTitle>
      <HideComponent />
      <Boxes>
        <Box>
          <BoxNum>{github.public_repos}</BoxNum>
          <BoxText>Github repositories</BoxText>
        </Box>
        {acomplishmentData.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
