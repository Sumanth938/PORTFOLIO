import User_image from "../../../Assets/Profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaLinux,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaServer
} from "react-icons/fa";
import { SiTypescript, SiFastapi, SiMysql } from "react-icons/si";

export const User_Details = {
  Profile: {
    name: "Sumanth Kumar",
    resume_name: "Sumanth Kumar Yaddanapudi",
    current_position: "Full Stack Developer @ Maang Technologies Pvt Ltd",
    mobile: "9381282391",
    location: "Velgode, Nandyal Dist",
    description:
      "Full Stack Developer with 1+ years of hands-on experience in building scalable, efficient full stack applications using FastAPI,Python, JavaScript, TypeScript, PostgreSQL, and React.js. Skilled in developing RESTful APIs, optimizing databases,and creating responsive user interfaces. Seeking to contribute to innovative projects by leveraging my expertise .",
    email: "sumanthyaddanapudi9@gmail.com",
    resume:
      "https://drive.google.com/file/d/1uAKUhOJDJ3YQlPXOG0VOXYEXatjeHEZp/view?usp=sharing",
    linkedin: {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      title: "linkedin.com/in/sumanthkumar",
      link: "https://www.linkedin.com/in/sumanth-kumar-aaa413269/",
    },
    github: {
      icon: <FaGithub />,
      name: "GitHub",
      title: "github.com/Sumanth938",
      link: "https://github.com/Sumanth938/",
    },
    avatar: User_image,
  },
  About: {
    data: [
      {
        id: 1,
        para: "Hello, my name is Guna Sekhar. I’m a full-stack developer with a strong background in both frontend and backend technologies. On the frontend, I specialize in React, where I build responsive and dynamic web applications. On the backend, I use FastAPI with Python to create high-performance APIs.",
      },
      {
        id: 2,
        para: "I’m experienced in modern JavaScript, TypeScript, and Python. I also have hands-on experience with various databases, deployment tools, and follow best practices for both development and testing. I’m passionate about problem-solving and continuously learning new technologies.",
      },
      {
        id: 3,
        para: "I’m excited about the opportunity to bring my skills and experience to your team and contribute to your projects.",
      },
    ],
  },
  Skills: [
    {
      id: 1,
      icon: <FaHtml5 />,
      name: "HTML5",
      description:
        "Structure and design modern web pages with improved semantic elements and multimedia support.",
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      name: "CSS3",
      description:
        "Style and layout web pages with responsive designs and visual enhancements.",
    },
    {
      id: 3,
      icon: <FaJs />,
      name: "JavaScript",
      description:
        "Add interactivity and dynamic behavior to web pages, enabling client-side logic and asynchronous operations.",
    },
    {
      id: 4,
      icon: <FaReact />,
      name: "React.js",
      description:
        "Build dynamic, single-page applications with reusable UI components and efficient state management.",
    },
    {
      id: 5,
      icon: <SiTypescript />,
      name: "TypeScript",
      description:
        "Enhance JavaScript with static typing for improved code quality, better tooling, and fewer runtime errors.",
    },
    {
      id: 6,
      icon: <FaPython />,
      name: "Python",
      description:
        "Develop scalable applications, perform data analysis, and implement backend services with clean and readable code.",
    },
    {
      id: 7,
      icon: <SiFastapi />,
      name: "FastAPI",
      description:
        "Build high-performance, modern APIs with Python, leveraging asynchronous capabilities and automatic documentation.",
    },
    {
      id: 8,
      icon: <SiMysql />,
      name: "MySQL",
      description:
        "Manage and query relational databases efficiently, perform complex data operations, and ensure data integrity.",
    },
    {
      id: 9,
      icon: <FaDatabase />,
      name: "DBMS",
      description:
        "Organize, manage, and interact with databases efficiently, providing functionalities for data storage, retrieval, and manipulation.",
    },
    {
      id: 10,
      icon: <FaLinux />,
      name: "Linux",
      description:
        "Manage and operate systems with open-source flexibility, performing tasks like server administration, scripting, and software development.",
    },
    {
      id: 11,
      icon: <FaGitlab />, // You can use an appropriate icon here, such as for GitLab, Jenkins, or any CI/CD tool you prefer
      name: "CI/CD Pipelines",
      description:
        "Automate the software deployment process with continuous integration and continuous delivery pipelines, ensuring faster and more reliable software delivery.",
    },
    {
      id: 12,
      icon: <FaServer />, // You can choose an icon that fits the RESTful API concept, like a server icon
      name: "RESTful APIs",
      description:
        "Design and implement RESTful APIs to allow communication between systems, enabling integration, scalability, and efficient data exchange.",
    },
    
  ],
  Experience: [
    {
      id: 1,
      period: "May 2024 - Present",
      position: "Full Stack Developer",
      company: "Maang Technologies PVT LTD",
      description:
        "As an experienced Full Stack Developer, I contribute to the development of user-focused web applications by leveraging technical skills in FastAPI, PostgreSQL, Python, and payment gateway integration. I have experience leading backend systems, managing secure transactions, multi-organization support, and role-based access, while ensuring efficient data handling with Google Drive integration for secure and streamlined data retrieval.",
    },
    {
      id: 2,
      period: "March 2023 - April 2024",
      position: "Full Stack Developer Intern",
      company: "Maang Technologies PVT LTD",
      description:
        "Acquired practical experience in full-stack development using React.js for frontend and FastAPI for backend services, focusing on building scalable and responsive web applications. Eagerly applied technical skills and passion for innovation to contribute effectively to the team.",
    },
  ],
  Projects: [
    {
      id: 1,
      name: "Buy Rent Exchange App",
      description:
        "Developed a platform for users to buy, rent, and exchange items, building scalable, user-friendly interfaces with React.js and backend APIs with FastAPI.",
      skills: "React.js, TypeScript, FastAPI, PostgreSQL, CI/CD, Nginx",
      link: "https://bre.maangtechnologies.com/",
    },
    {
      id: 2,
      name: "Resume Builder App",
      description:
        "Developed a customizable application with dynamic templates, real-time preview, form validation, and JSON-based resume generation using React.js.",
      skills: "React.js, TypeScript, FastAPI, PostgreSQL, CI/CD, Nginx",
      link: "https://resume-builder.maangtechnologies.com/",
    },
    {
      id: 3,
      name: "Employee Dashboard App",
      description:
        "Designed a role-based portal for admin and employees to manage profiles, generate documents, and streamline HR processes.",
      skills: "React.js, TypeScript, FastAPI, PostgreSQL, CI/CD, Nginx",
      link: "https://eds.maangtechnologies.com/",
    },
    {
      id: 4,
      name: "Chatbot Web App",
      description:
        "Built a chatbot for real-time automated responses to user queries, retrieving data from an Excel sheet with predefined knowledge for interaction.",
      skills: "React.js, TypeScript, FastAPI, CI/CD, Nginx",
      link: "https://chatbot.maangtechnologies.com/",
    },
  ],
  Education: [
    {
      id: 1,
      course: "Computer Science Engineering",
      college: "Rajiv Gandhi University of Knowledge Technologies IIIT",
      gpa: "8.44 / 10.0",
      duration: "2020 - 2024",
    },
    {
      id: 2,
      course: "Pre University Course",
      college: "Rajiv Gandhi University of Knowledge Technologies IIIT",
      gpa: "8.52 / 10.0",
      duration: "2018 - 2020",
    },
    {
      id: 3,
      course: "Secondary Education",
      college: "Zilla Parishad High School",
      gpa: "10.0 / 10.0",
      duration: "2015 - 2017",
    },
  ],
  Courses: [
    {
      id: 1,
      course_name: "React + TypeScript",
      source: "Udemy",
    },
    {
      id: 2,
      course_name: "FastAPI - Python",
      source: "Udemy",
    },
  ],
  Languages: [
    {
      id: 1,
      name: "English",
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Telugu",
      level: "Expert",
    },
    {
      id: 3,
      name: "Hindi",
      level: "Intermediate",
    },
  ],
};
