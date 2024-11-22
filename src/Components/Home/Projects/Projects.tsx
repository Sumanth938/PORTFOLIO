import React from "react";
import { Row, Col } from "react-bootstrap";
import { User_Details } from "../../Util/Jsons/Details";
import Flex from "../../Util/Layouts/Flex";
import { IoMail } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  return (
    <section id="Projects">
      <Flex direction="column" align="center" className="w-100">
        <Flex className="intro-layout" direction="column" align="center">
          <p className="heading-font">
            My <span className="color-primary">Projects</span>
          </p>
          <p className="text-center">
            Showcasing a portfolio of innovative and impactful projects
            demonstrating technical expertise and creativity.
          </p>
          <Row className="w-100">
            {User_Details.Projects.map((project) => (
              <Col
                key={project.id}
                lg={4}
                md={6}
                sm={6}
                className="d-flex justify-content-center"
              >
                <Flex className="skill-card" direction="column">
                  <p className="small-heading-font text-center">
                    {project.name}
                  </p>
                  <p className="text-center">{project.description}</p>
                  <p className="text-center">
                    Skills :{" "}
                    <span className="color-primary">{project.skills}</span>
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="but">
                      Visit Now <GoLinkExternal />
                    </button>
                  </a>
                </Flex>
              </Col>
            ))}
          </Row>
          <a href="#Contact">
            <button className="but">
              Contact <IoMail />
            </button>
          </a>
        </Flex>
      </Flex>
    </section>
  );
};

export default Projects;
