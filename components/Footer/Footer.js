import React, { useState } from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

// import emailjs from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { SocialIcons } from "../Header/HeaderStyles";
import { ListItem, ListTitle } from "../Technologies/TechnologiesStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import HideComponent from "../ExtraComponent/HideComponent";

const Footer = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(message);
    if (name && email && message) {
      emailjs
        .sendForm(
          "service_iiwj2ac",
          "template_fhh6ad9",
          e.target,
          "W2SODrk3RyjCN-oZc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setSuccess(true);
      setInterval(() => {
        setSuccess(false);
      }, 3000);
      e.target.reset();
    } else {
      setError(true);
      setInterval(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <HideComponent />
          <LinkItem href="tel : +8801819439292">+8801819439292</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto : arfatrahman08@gmail.com">
            arfatrahman08@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <div>
        <form onSubmit={handleForm} action="" className="form-main">
          <div className="form-divide">
            <div className="form-input">
              <input type="text" name="name" placeholder="Enter your Name" />
            </div>
            <div className="form-input">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id=""
              />
            </div>
          </div>
          <div className="form-input">
            <textarea
              placeholder="Enter your message"
              id=""
              cols="30"
              rows="10"
              name="message"
            ></textarea>
          </div>
          {error && (
            <div style={{ color: "red" }}>Please fulfil every input</div>
          )}
          {success && (
            <div style={{ color: "green" }}>Your message sent... </div>
          )}
          <div className="form-input">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/arfat-xyz">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/arfatxyz/">
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/arfat.xyz">
            <AiFillFacebook size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <HideComponent />
    </FooterWrapper>
  );
};

export default Footer;
