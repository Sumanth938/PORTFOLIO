import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { User_Details } from "../../Util/Jsons/Details";
import Flex from "../../Util/Layouts/Flex";
import { GrProjects } from "react-icons/gr";

const Skills = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <section id="Skills">
      <Flex direction="column" align="center" className="w-100">
        <Flex className="about-me-layout" direction="column" align="center">
          <p className="heading-font">
            Skill <span className="color-primary">Set</span>
          </p>
          <p className="text-center">
            Equipped with a versatile skill set focused on delivering high-quality, user-centric solutions.
          </p>
          <Row className="w-100">
            {User_Details.Skills.map((skill) => (
              <Col
                key={skill.id}
                lg={4}
                md={6}
                sm={6}
                className="d-flex justify-content-center"
              >
                <Flex className="skill-card-2" direction="column">
                  <p className="heading-font color-primary">{skill.icon}</p>
                  <p className="small-heading-font text-center">{skill.name}</p>
                  <p className="text-center">{skill.description}</p>
                </Flex>
              </Col>
            ))}
          </Row>
          <a href="#Projects">
            <button className="but">
              View Projects <GrProjects />
            </button>
          </a>
        </Flex>
      </Flex>
    </section>
  );
};

export default Skills;
