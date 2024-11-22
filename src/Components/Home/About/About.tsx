import React from "react";
import { Row, Col } from "react-bootstrap";
import Flex from "../../Util/Layouts/Flex";
import { User_Details } from "../../Util/Jsons/Details";
import { HiComputerDesktop } from "react-icons/hi2";

const About = () => {
  return (
    <section id="About">
      <Flex direction="column" align="center" className="w-100">
        <Row className="about-me-layout">
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
            <div
              className="intro-img"
              style={{
                backgroundImage: `url(${User_Details.Profile.avatar})`,
              }}
            ></div>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <Flex
              direction="column"
              align="start"
              justify="center"
              className="gap-2"
            >
              <p className="heading-font">
                About <span className="color-primary">Me</span>
              </p>
              {User_Details.About.data.map((item) => (
                <p key={item.id}>{item.para}</p>
              ))}
              <a href="#Experience">
                <button className="but">
                  View Experience <HiComputerDesktop />
                </button>
              </a>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </section>
  );
};

export default About;
