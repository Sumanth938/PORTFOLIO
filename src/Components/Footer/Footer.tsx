import React, { useEffect, useState } from "react";
import "./../Home/Home.css";
import Flex from "../Util/Layouts/Flex";
import { User_Details } from "../Util/Jsons/Details";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShowScrollTop = scrollTop > 200; // Adjust this value based on your preference
      setShowScrollTop(shouldShowScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Flex direction="column" className="gap-3 about-me-layout">
      <p className="heading-font">
        Follow <span className="color-primary">Me</span>
      </p>
      <p>
        Stay connected and follow my journey on LinkedIn and GitHub for the
        latest updates, projects, and insights into my work.
      </p>
      <Flex className="footer-icons gap-3">
        <a href={User_Details.Profile.linkedin.link} target="_blank">
          {User_Details.Profile.linkedin.icon}
        </a>
        <a href={User_Details.Profile.github.link} target="_blank">
          {User_Details.Profile.github.icon}
        </a>
      </Flex>
      {showScrollTop && (
            <div
              className="scroll-top-icon"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FaArrowCircleUp className="footer-icon" />
            </div>
          )}
    </Flex>
  );
};

export default Footer;
