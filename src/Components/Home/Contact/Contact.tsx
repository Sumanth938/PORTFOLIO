import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoMail } from "react-icons/io5";
import Flex from "../../Util/Layouts/Flex";
import { useForm, SubmitHandler } from "react-hook-form";
import { User_Details } from "../../Util/Jsons/Details";
import { IoMdDownload } from "react-icons/io";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, email, message } = data;
    const subject = "Contact Us Form Submission";
    const message_detail = `Hello,
  
    You have received a new contact form submission. Here are the details:
  
    Full Name: ${name}
    Email: ${email}
    Message: ${message}
  
    Thank you,
    ${name}`;
    
    const emailParams = {
      to: User_Details.Profile.email,
      subject,
      body: message_detail,
    };
  
    const mailtoLink = `mailto:${encodeURIComponent(emailParams.to)}?subject=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;
  
    window.location.href = mailtoLink;
  };
  

  return (
    <section id="Contact">
      <Flex direction="column" align="center" className="w-100">
        <Row className="about-me-layout">
          <Flex direction="column" className="mb-2">
            <p className="heading-font">
              Contact <span className="color-primary">Me</span>
            </p>
            <p className="text-center">
              Reach out to me at {User_Details.Profile.email} for any questions,
              collaborations, or opportunities. I'm excited to hear from you!
            </p>
          </Flex>
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
              <p className="color-primary">
                <IoMail /> Email :{" "}
                <span className="color-white">
                  {User_Details.Profile.email}
                </span>
              </p>
              <p className="color-primary">
                {User_Details.Profile.linkedin.icon}{" "}
                {User_Details.Profile.linkedin.name} :{" "}
                <a
                  className="color-white"
                  href={User_Details.Profile.linkedin.link}
                  target="_blank"
                >
                  {User_Details.Profile.linkedin.title}
                </a>
              </p>
              <p className="color-primary">
                {User_Details.Profile.github.icon}{" "}
                {User_Details.Profile.github.name}:{" "}
                <a
                  className="color-white"
                  href={User_Details.Profile.github.link}
                  target="_blank"
                >
                  {User_Details.Profile.github.title}
                </a>
              </p>
              <a href={User_Details.Profile.resume} target="_blank">
              <button
                className="but"
                style={{ margin: "0px auto", borderRadius: "30px" }}
              >
                <IoMdDownload /> Resume
              </button>
            </a>
            </Flex>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-100 d-flex flex-column gap-3"
            >
              <div className="d-flex flex-column">
                <label htmlFor="name" className="color-primary">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter Name"
                  className="border"
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="email" className="color-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="message" className="color-primary">
                  Message
                </label>
                <textarea
                className="border"
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Enter Message"
                ></textarea>
                {errors.message && (
                  <p className="error-message">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className="but">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Flex>
    </section>
  );
};

export default Contact;
