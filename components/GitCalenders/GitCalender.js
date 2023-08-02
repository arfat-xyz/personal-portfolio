import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import GitHubCalendar from "react-github-calendar";
import HideComponent from "../ExtraComponent/HideComponent";

const GitCalender = () => {
  return (
    <div className="shadow-xl border-white">
      <Section>
        <SectionTitle title="arfat rahman Git Calender">
          Github Calender
        </SectionTitle>
        <HideComponent />
        <GitHubCalendar username="arfat-xyz" className="dam" />
      </Section>
    </div>
  );
};

export default GitCalender;
