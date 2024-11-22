import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdAutoGraph } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { CiDark, CiLight } from "react-icons/ci";
import "./Header.css";
import { IoMdDownload } from "react-icons/io";
import { User_Details } from "../Util/Jsons/Details";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-theme" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", icon: <FaHome />, navlink: "#Home" },
    // { id: 2, name: "About", icon: <PiUserListBold />, navlink: "#About" },
    { id: 3, name: "Skills", icon: <MdAutoGraph />, navlink: "#Skills" },
    {
      id: 4,
      name: "Experience",
      icon: <HiComputerDesktop />,
      navlink: "#Experience",
    },
    { id: 5, name: "Projects", icon: <GrProjects />, navlink: "#Projects" },
    { id: 6, name: "Contact", icon: <IoMail />, navlink: "#Contact" },
  ];

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="header-section">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          <span className="heading-font">
            <span className="color-primary">Portfolio</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.navlink}
                className="link"
                onClick={handleLinkClick}
              >
                {link.icon} {link.name}
              </Nav.Link>
            ))}
            <a className="link" onClick={toggleTheme} style={{cursor:"pointer"}}>
              {" "}
              {theme == "light" ? (
                <>
                  <CiDark /> Dark
                </>
              ) : (
                <>
                  <CiLight /> Light
                </>
              )}
            </a>
            <a href={User_Details.Profile.resume} target="_blank">
              <button
                className="but"
                style={{ margin: "0px auto", borderRadius: "30px" }}
              >
                <IoMdDownload /> Resume
              </button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
