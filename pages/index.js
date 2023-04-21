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

const Home = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="arfat-rahman"
          href="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
        />
        <title>
          Arfatur Rahman - MERN Developer and WordPress Expert | Web Development
          Services
        </title>
        <meta
          name="description"
          content="Arfatur Rahman is a highly skilled MERN developer with expertise in ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, and DaisyUI. Contact Arfatur for custom web applications or WordPress websites."
        />
        <meta
          name="keywords"
          content="Arfat, Arfatur Rahman, Arfat Rahman, MERN developer, ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, DaisyUI, web development, custom web applications, WordPress websites"
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/RHyk2rm/Arfatur-Rahman.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="author" content="Arfatur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="WordPress 5.8" />
        <meta name="theme-color" content="#101724" />
        <meta name="rating" content="General"></meta>
      </Head>
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
