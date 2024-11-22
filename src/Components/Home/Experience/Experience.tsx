import React from "react";
import { Row, Col } from "react-bootstrap";
import { User_Details } from "../../Util/Jsons/Details";
import Flex from "../../Util/Layouts/Flex";
import { MdAutoGraph } from "react-icons/md";

const Experience = () => {
  return (
    <section id="Experience">
      <Flex direction="column" align="center" className="w-100">
        <Flex className="intro-layout" direction="column" align="center">
          <p className="heading-font">
            My <span className="color-primary">Experience</span>
          </p>
          <p className="text-center">
            Bringing a proven track record of delivering impactful results
            through diverse professional experiences
          </p>
          <Row className="w-100">
            {User_Details.Experience.map((exp) => (
              <Col
                key={exp.id}
                lg={4}
                md={6}
                sm={6}
                className="d-flex justify-content-center"
              >
                <Flex className="skill-card" direction="column">
                  <p className="color-white">{exp.period}</p>
                  <p className="small-heading-font color-primary text-center">
                    {exp.position}
                  </p>
                  <p className="color-white text-center">- {exp.company}</p>
                  <p className="text-center">{exp.description}</p>
                </Flex>
              </Col>
            ))}
          </Row>
          <a href="#Skills">
            <button className="but">
              View Skills <MdAutoGraph />
            </button>
          </a>
        </Flex>
      </Flex>
    </section>
  );
};

export default Experience;
