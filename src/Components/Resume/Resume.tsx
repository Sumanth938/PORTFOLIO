import React from "react";
import "./Resume.css";
import ReuseDetails from "./ReuseDetails";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail, MdDateRange } from "react-icons/md";
import { FaCalendar, FaLinkedin, FaPrint } from "react-icons/fa";
import { User_Details } from "../Util/Jsons/Details";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="resume-layout">
        <div className="top-layout">
          <div className="d-flex flex-column">
            <span className="title">
              {User_Details.Profile.resume_name.toUpperCase()}
            </span>
            <span className="active-title">
              {User_Details.Profile.current_position}
            </span>
          </div>
          <div className="details-layout">
            <div className="d-flex gap-1 align-items-center">
              <IoCallOutline />
              <span>+91 {User_Details.Profile.mobile}</span>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <MdAlternateEmail />
              <span>{User_Details.Profile.email}</span>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <FaLinkedin />
              <a
                href={User_Details.Profile.linkedin.link}
                target="_blank"
                className="text-dark"
              >
                <span>{User_Details.Profile.linkedin.title}</span>
              </a>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <IoLocationOutline />
              <span>{User_Details.Profile.location}</span>
            </div>
          </div>
        </div>
        <div className="body-layout">
          <div className="left">
            <ReuseDetails title="SUMMARY">
              <div>{User_Details.Profile.description}</div>
            </ReuseDetails>
            <ReuseDetails title="EXPERIENCE">
              {User_Details.Experience.map((experience: any, id: any) => (
                <div>
                  <span className="details-inner-title">
                    {experience.position}
                  </span>
                  <div className="d-flex justify-content-between">
                    <span className="details-inner-title-active">
                      {experience.company}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <MdDateRange />
                      {experience.period}
                    </span>
                  </div>
                  <ul className="ul">
                    <li>{experience.description}</li>
                  </ul>
                </div>
              ))}
            </ReuseDetails>
            <ReuseDetails title="PROJECTS">
              {User_Details.Projects.map((project: any, id: number) => (
                <div className="d-flex flex-column">
                  <span className="details-inner-title">{project.name}</span>
                  <span>{project.description}</span>
                  <span>
                    Skills :{" "}
                    <span className="details-inner-title-active">
                      {project.skills}
                    </span>
                  </span>
                </div>
              ))}
            </ReuseDetails>
          </div>
          <div className="right">
            <ReuseDetails title="SKILLS">
              <div className="skills-layout d-flex gap-3 flex-wrap">
                {User_Details.Skills.map((skill: any, id: number) => (
                  <span key={id}>{skill.name}</span>
                ))}
              </div>
            </ReuseDetails>
            <ReuseDetails title="EDUCATION">
              {User_Details.Education.map((education: any, id: number) => (
                <div className="education-layout">
                  <span className="details-inner-title">
                    {education.course}
                  </span>
                  <div>
                    <span className="details-inner-title-active">
                      {education.college}{" "}
                    </span>
                    <div className="d-flex gap-3 flex-wrap">
                      <div className="d-flex gap-1">
                        <span>GPA</span>
                        <span>{education.gpa}</span>
                      </div>
                      <div>
                        <span className="d-flex align-items-center gap-1">
                          <MdDateRange />
                          {education.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ReuseDetails>
            <ReuseDetails title="LANGUAGES">
              <div className="languages-layout d-flex flex-column gap-3">
                {User_Details.Languages.map((language: any, id: any) => (
                  <div className="d-flex justify-content-between">
                    <span className="details-inner-title">{language.name}</span>
                    <span>{language.level}</span>
                  </div>
                ))}
              </div>
            </ReuseDetails>
            <ReuseDetails title="TRAINING / COURSE">
              <div className="training-layout d-flex flex-column gap-3">
                {User_Details.Courses.map((course: any, id: number) => (
                  <div className="d-flex flex-column">
                    <span className="details-inner-title color-primary">
                      {course.course_name}
                    </span>
                    <span>- {course.source}</span>
                  </div>
                ))}
              </div>
            </ReuseDetails>
          </div>
        </div>
      </div>
      <button
        className="but m-auto my-3 mb-3 print-button"
        onClick={handlePrint}
      >
        Print <FaPrint/>
      </button>
    </>
  );
};

export default Resume;
