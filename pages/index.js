import Acomplishments from "../components/Acomplishments/Acomplishments";
import Head from "next/head";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import BringTop from "../components/BringTop";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { HeroSection, Section } from "../styles/GlobalComponents";
import GitCalender from "../components/GitCalenders/GitCalender";
import Blogs from "../components/Blog/Blogs";
import { ArfatMeta } from "../layout/arfat";

const Home = () => {
  return (
    <Layout>
      <ArfatMeta />
      <HeroSection>
        <Hero />
        <BgAnimation />
      </HeroSection>
      <Projects />
      <Technologies />
      <GitCalender />
      <Blogs />
      <Timeline />
      <Acomplishments />
      {/* <BringTop /> */}
    </Layout>
  );
};

export default Home;
