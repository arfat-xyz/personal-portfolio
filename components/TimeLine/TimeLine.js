import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";
import { client } from "../../constants/sanityClient";
import {
  fetchHomePageDetails,
  fetchTimelineDetails,
} from "../../constants/fetchHomePageDetails";
import HideComponent from "../ExtraComponent/HideComponent";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Timeline = () => {
  const TimeLineData = fetchTimelineDetails();
  const [activeItem, setActiveItem] = useState(0);
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView();
  const carouselRef = useRef();
  const aboutMe = fetchHomePageDetails("About");
  const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {TimeLineData && (
        <Section id="about">
          <SectionDivider />
          <SectionTitle title="arfat rahman about me">About Me</SectionTitle>
          <HideComponent />
          <SectionText>{aboutMe && aboutMe.text}</SectionText>
          <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
            <>
              {TimeLineData[0]?.year &&
                TimeLineData?.map((item, index) => (
                  <CarouselMobileScrollNode
                    key={index}
                    final={index === TOTAL_CAROUSEL_COUNT - 1}
                  >
                    <CarouselItem
                      index={index}
                      id={`carousel__item-${index}`}
                      active={activeItem}
                      onClick={(e) => handleClick(e, index)}
                    >
                      <CarouselItemTitle>
                        {item.year}
                        <CarouselItemImg
                          alt="Arfatur Rahman timeline image"
                          width="208"
                          height="6"
                          viewBox="0 0 208 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                            fill="url(#paint0_linear)"
                            fillOpacity="0.33"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="-4.30412e-10"
                              y1="0.5"
                              x2="208"
                              y2="0.500295"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="0.79478"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </CarouselItemImg>
                      </CarouselItemTitle>
                      <CarouselItemText title="arfat rahman about me description">
                        {item.text}
                      </CarouselItemText>
                    </CarouselItem>
                  </CarouselMobileScrollNode>
                ))}
            </>
          </CarouselContainer>
          <CarouselButtons>
            {TimeLineData[0]?.year &&
              TimeLineData.map((item, index) => (
                <CarouselButton
                  key={index}
                  index={index}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                  type="button"
                >
                  <CarouselButtonDot active={activeItem} />
                </CarouselButton>
              ))}
          </CarouselButtons>
        </Section>
      )}
      <div className={`timeline ${animated ? "animated" : ""}`} ref={ref}>
        <div
          className={`container left-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman html5"
            src={`https://i.ibb.co/BZtRQSV/arfat-rahman-html5.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>html</h2>
            <small>2018</small>
            <p>
              In 2018, learning HTML was essential for web development, with
              beginners starting with basic tags and attributes and progressing
              to advanced multimedia elements. Resources included online
              courses, tutorials, and books, as well as online communities where
              learners could ask for help.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container right-container ${animated ? "animated" : ""}`}
          ref={ref}
        >
          <Image
            alt="Arfatur Rahman Css3"
            src={`https://i.ibb.co/0Zdhz0F/arfat-rahman-css.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>html & css</h2>
            <small>2019</small>
            <p>
              Learning advanced HTML and CSS topics in 2019 was crucial for web
              developers to keep up with modern design trends and technologies.
              Popular topics included responsive design, CSS frameworks, and
              preprocessors, with ample online resources available to help
              developers improve my skills.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container left-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman JavaScript"
            src={`https://i.ibb.co/rtw4bht/arfat-rahman-javascript.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>Javascript</h2>
            <small>2020</small>
            <p>
              In 2020, I learned JavaScript from basic to advanced topics,
              gaining a valuable skillset for creating dynamic and interactive
              web applications. This knowledge has given me a competitive edge
              in the job market and the ability to stay up to date with the
              latest web development technologies.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container right-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman WordPress"
            src={`https://i.ibb.co/Qvmpd1c/arfat-rahman-wordpress.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>wordpress</h2>
            <small>2019-2020</small>
            <p>
              In 2020-2021, I learned WordPress topics and completed projects
              for clients. With this experience, I gained valuable skills in web
              development, particularly in creating and customizing websites
              using the WordPress platform. This experience has also allowed me
              to work with clients and hone my project management and
              communication skills.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container left-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman ReactJS"
            src={`https://i.ibb.co/WH0VD39/arfat-rahman-react-JS.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>react</h2>
            <small>2021</small>
            <p>
              In 2021, I learned ReactJS from basic to advanced topics, gaining
              valuable skills in developing dynamic and responsive user
              interfaces. ReactJS is a popular and widely-used framework, and
              with this knowledge, I can develop powerful web applications with
              ease.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container right-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman NodeJS"
            src={`https://i.ibb.co/cgc7dJT/arfat-rahman-nodejs.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>nodejs</h2>
            <small>2021</small>
            <p>
              In 2021, I learned NodeJS from basic to advanced topics, gaining
              valuable skills in building fast, scalable and efficient back-end
              applications. NodeJS is a popular and widely-used runtime
              environment, and with this knowledge, I can build robust
              server-side applications using JavaScript. This skillset has
              allowed me to expand my web development capabilities and stay
              competitive in the job market.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container left-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman MongoDB"
            src={`https://i.ibb.co/QbhxsJ1/arfat-rahman-mongodb.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>mongodb</h2>
            <small>2021</small>
            <p>
              In 2021, I learned MongoDB, gaining valuable skills in building
              and managing NoSQL databases for web applications. This skillset
              expanded my expertise in web development and kept me up to date
              with modern technologies.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container right-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman ExpressJS"
            src={`https://i.ibb.co/YkxQMhW/arfat-rahman-express.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>express</h2>
            <small>2021</small>
            <p>
              In 2021, I learned ExpressJS, gaining valuable skills in building
              web applications and APIs using NodeJS. With this knowledge, I can
              develop server-side applications that are scalable and efficient.
              This skillset has allowed me to expand my expertise in web
              development and stay up to date with modern technologies.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container left-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman MERN"
            src={`https://i.ibb.co/0J1qVnv/arfat-rahman-mern.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>MERN</h2>
            <small>2021</small>
            <p>
              In 2021, I learned MERN development with full-stack topics,
              including both frontend and backend development. Additionally, I
              applied my knowledge to create various projects, further honing my
              skills in web development. This experience has allowed me to
              become more proficient in the MERN stack and equipped me with
              valuable skills for future web development projects.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div
          className={`container right-container ${animated ? "animated" : ""}`}
        >
          <Image
            alt="Arfatur Rahman MERN"
            src={`https://i.ibb.co/0J1qVnv/arfat-rahman-mern.png`}
            width={300}
            height={300}
          />
          <div className="text-box">
            <h2>Web development</h2>
            <small>2022</small>
            <p>
              I completed the Programming Hero web development course with an
              impressive score of 59.75 out of 60, demonstrating my excellent
              proficiency in web development. This course has equipped me with
              valuable skills and knowledge, allowing me to expand my expertise
              in the field and stay up to date with modern technologies.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
