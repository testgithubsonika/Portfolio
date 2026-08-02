import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace these with actual screenshots once available
// import tripSureImg from "../../Assets/Projects/tripsure.png";
// import sentinelImg from "../../Assets/Projects/sentinel.png";
// etc.

const projects = [
  {
    title: "PlantCare",
    description:
      "AI-powered plant care assistant. Provides personalised care recommendations based on plant species, environmental conditions, and user preferences. Utilises computer vision for plant identification and health assessment.",
    ghLink: "https://github.com/testgithubsonika",
    demoLink: "https://hosting-bfb24.web.app",
    tags: ["React", "Node.js", "PostgreSQL", "FastAPI", "Firebase", "Redis"],
    icon: "🌱",
  },
  {
    title: "Sentinel",
    description:
      "AI-powered behavioral anomaly detection system for cybersecurity. Detects brute-force logins, impossible travel, and unusual access patterns in real time via WebSockets. Uses Isolation Forest + Bi-LSTM + XGBoost with SHAP explainability.",
    ghLink: "https://github.com/testgithubsonika",
    demoLink: "https://senti-ai-e8kb.vercel.app/",
    tags: ["React", "FastAPI", "PyTorch", "XGBoost", "SHAP", "WebSockets"],
    icon: "🛡️",
  },
  {
    title: "JourneyWithMe",
    description:
      "A travel companion web application built for planning and sharing journeys. Explore destinations, log experiences, and collaborate with fellow travellers.",
    ghLink: "https://github.com/testgithubsonika",
    demoLink: "https://journeywithme-two.vercel.app/",
    tags: ["React", "Tailwind CSS", "Node.js"],
    icon: "✈️",
  },
  {
     title: "TripSure",
    description:
      "AI-powered train ticket booking platform. Users can search trains, book & cancel tickets, and view booking history. ML model (XGBoost via FastAPI) predicts confirmation likelihood. Backed by PostgreSQL, Redis caching, JWT + Google OAuth.",
    ghLink: "https://github.com/testgithubsonika",
    demoLink: "https://turbo-waddle-phi.vercel.app/",
    tags: ["React", "Node.js", "PostgreSQL", "FastAPI", "XGBoost", "Redis"],
    icon: "🚆",
  },
  {
    title: "ScoutMind",
    description:
      "Candidate dashboard for a recruitment intelligence platform. Features profile management, application tracking, and AI-assisted screening insights for job seekers.",
    ghLink: "https://github.com/testgithubsonika",
    demoLink: "https://scout-mind-five.vercel.app/candidate/dashboard",
    tags: ["React", "Dashboard", "Tailwind CSS"],
    icon: "🔍",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: "50px" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--green-primary)",
              fontSize: "0.85em",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            {"// what I've built"}
          </p>
          <h1 className="project-heading">
            Recent <strong className="purple">Projects</strong>
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto" }}>
            Full-stack and AI-powered applications — from ticket booking to
            cybersecurity monitoring.
          </p>
        </div>

        <Row style={{ justifyContent: "center" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                icon={project.icon}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;