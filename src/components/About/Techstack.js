import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

const techStack = [
  { name: "C++", icon: C },
  { name: "JavaScript", icon: Javascript },
  { name: "Python", icon: Python },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: Node },
  { name: "PostgreSQL", icon: SQL },
  { name: "Redis", icon: Redis },
  { name: "Tailwind", icon: Tailwind },
  { name: "Docker", icon: Docker },
  { name: "AWS", icon: AWS },
  { name: "Git", icon: Git },
  { name: "Postman", icon: Postman },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "20px" }}>
      {techStack.map((tech) => (
        <Col
          key={tech.name}
          className="tech-icons"
          style={{ flex: "0 0 auto" }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="tech-icon-images"
          />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;