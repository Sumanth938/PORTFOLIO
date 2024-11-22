import React from "react";
import "../Home.css";
import { Row, Col } from "react-bootstrap";
import { IoMail } from "react-icons/io5";
import Flex from "../../Util/Layouts/Flex";
import { User_Details } from "../../Util/Jsons/Details";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const Intro = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="Intro">
      <Flex direction="column" align="center" className="w-100">
        <Row className="intro-layout">
          {/* Left Column (Text Section) */}
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Flex
                direction="column"
                align="start"
                justify="center"
                className="gap-2"
              >
                <motion.p variants={itemVariants} className="color-primary">
                  Hello, Welcome
                </motion.p>
                <motion.p variants={itemVariants} className="heading-font">
                  I’m {User_Details.Profile.name}
                </motion.p>
                <motion.p variants={itemVariants}>
                  {User_Details.Profile.description}
                </motion.p>
                <motion.a href="#About" variants={itemVariants}>
                  <button className="but">
                    View More <MdKeyboardArrowDown />
                  </button>
                </motion.a>
              </Flex>
            </motion.div>
          </Col>

          {/* Right Column (Image Section) */}
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                className="intro-img"
                style={{
                  backgroundImage: `url(${User_Details.Profile.avatar})`,
                }}
              ></div>
            </motion.div>
          </Col>
        </Row>
      </Flex>
    </section>
  );
};

export default Intro;
