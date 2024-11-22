import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import ReactDOM from "react-dom";
import "./Chatbot.css";
import BotAvatar from "../../Assets/BotAvatar.jpg";
import { Link } from "react-router-dom";
import { User_Details } from "../Util/Jsons/Details";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Jost",
  headerBgColor: "#eac408",
  headerFontColor: "#fff !important",
  headerFontSize: "15px",
  botBubbleColor: "#fff",
  botFontColor: "#4a4a4a",
  userBubbleColor: "#eac408",
  userFontColor: "#fff",
};

const ResumeComponent = () => (
  <div className="d-flex flex-column gap-2 align-item-center">
    <img
      src="https://i.ibb.co/j5kXMV6/job-searching-employment-services-recruitment-agencies-resume-writing-finding-work-vacant-positions.jpg"
      style={{ width: "150px" }}
      alt="Maang Logo"
    />
    <a target="_blank" href={User_Details.Profile.resume}>
      Click Here to View Resume
    </a>
  </div>
);

const ProjectsComponent = () => (
  <div className="d-flex flex-column gap-4 align-items-center">
    <b>My Projects</b>
    <div className="d-flex flex-column gap-1">
      {User_Details.Projects.map((project,index) => (
        <span className="project-name">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {index+1}.{project.name}
          </a>
        </span>
      ))}
    </div>
  </div>
);

const SkillsComponent = () => (
  <div className="d-flex flex-column gap-4 align-items-center">
    <b>My Skills</b>
    <div className="d-flex gap-1 flex-wrap">
      {User_Details.Skills.map((skill, index) => (
        <span>
          {skill.name}
          {index === User_Details.Skills.length - 1 ? "." : ", "}
        </span>
      ))}
    </div>
  </div>
);

const ContactUsComponent = () => (
  <div className="d-flex flex-column gap-2 align-items-center">
    <p style={{ fontSize: "14px", textAlign: "center" }}>
      You can contact us <br />
      Email -{" "}
      <a href="mailto:neelurigunasekhar09564@gmail.com">
        neelurigunasekhar09564@gmail.com
      </a>{" "}
      <br /> Phone - +91 9381278735.
    </p>
  </div>
);

const steps = [
  {
    id: "greeting-response",
    message:
      "Hello! How can I assist you today? You can ask about my skills, projects, resume, or contact information.",
    trigger: "user-input",
  },
  {
    id: "user-input",
    user: true,
    trigger: ({ value }) => {
      const input = value.toLowerCase();

      if (
        input.includes("hello") ||
        input.includes("hi") ||
        input.includes("hey")
      )
        return "greeting-response";
      if (input.includes("resume")) return "resume-response";
      if (input.includes("portfolio")) return "portfolio-overview";
      if (input.includes("skills")) return "skills-info";
      if (input.includes("projects")) return "projects-info";
      if (input.includes("technologies")) return "technologies-info";
      if (input.includes("contact")) return "contact";

      // If no keywords match, show error message and options
      return "error-message";
    },
  },
  {
    id: "portfolio-overview",
    message:
      "Would you like to know more about my portfolio or specific projects?",
    trigger: "portfolio-options",
  },
  {
    id: "portfolio-options",
    options: [
      { value: "resume", label: "Resume", trigger: "resume-response" },
      { value: "skills", label: "Skills", trigger: "skills-info" },
      { value: "projects", label: "Projects", trigger: "projects-info" },
      { value: "contact", label: "Contact Us", trigger: "contact" },
      { value: "input-query", label: "Enable Input", trigger: "user-input" },
    ],
  },
  {
    id: "skills-info",
    component: <SkillsComponent />,
    trigger: "ask-more",
  },
  {
    id: "projects-info",
    component: <ProjectsComponent />,
    trigger: "ask-more",
  },
  {
    id: "technologies-info",
    message:
      "My portfolio includes work with React.js, Node.js, and more. I enjoy using these tools to create user-centric applications.",
    trigger: "ask-more",
  },
  {
    id: "resume-response",
    component: <ResumeComponent />,
    trigger: "ask-more",
  },
  {
    id: "contact",
    component: <ContactUsComponent />,
    trigger: "ask-more",
  },
  {
    id: "error-message",
    message:
      "I'm sorry, I didn't quite understand that. Here are some options I can help you with:",
    trigger: "portfolio-options",
  },
  // {
  //   id: "error-options",
  //   options: [
  //     { value: "resume", label: "Resume", trigger: "resume-response" },
  //     { value: "portfolio", label: "Portfolio Overview", trigger: "portfolio-overview" },
  //     { value: "skills", label: "Skills", trigger: "skills-info" },
  //     { value: "projects", label: "Projects", trigger: "projects-info" },
  //     { value: "technologies", label: "Technologies Used", trigger: "technologies-info" },
  //     { value: "contact", label: "Contact Us", trigger: "contact" },
  //   ],
  // },
  {
    id: "ask-more",
    message: "Is there anything else I can assist you with?",
    trigger: "portfolio-options",
  },
  {
    id: "thanks",
    message: "You're welcome! If you need any more help, feel free to ask.",
    trigger: "user-input",
  },
  {
    id: "end",
    message: "Thank you for reaching out to Maang. Have a great day!",
    end: true,
  },
];

const ChatBotComponent = () => {
  const botRef = useRef(null);

  useEffect(() => {
    const chatBotNode = ReactDOM.findDOMNode(botRef.current);
    if (chatBotNode) {
      const scrollElement = chatBotNode.querySelector(".rsc-content");
      const observer = new MutationObserver(() => {
        if (scrollElement) {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }
      });

      if (scrollElement) {
        observer.observe(scrollElement, {
          childList: true,
          subtree: true,
        });
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        headerTitle="Chatbot Assistant"
        botAvatar={BotAvatar}
        placeholder="Enter your message ex.Resume"
        ref={botRef}
        height="550px"
        width="450px"
        opened={false}
      />
    </ThemeProvider>
  );
};

export default ChatBotComponent;
