import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: 1.8, color: "var(--text-muted)" }}>
            Hi! I'm{" "}
            <span className="purple">Sonika Singh Tomar</span> from{" "}
            <span className="purple">Madhya Pradesh, India.</span>
            <br />
            <br />
            I'm pursuing a{" "}
            <span className="purple">B.Tech in Computer Science Engineering</span>{" "}
            at <span className="purple">VIT Bhopal University</span>{" "}
            (CGPA: 8.56 / 10.0).
            <br />
            <br />
            I enjoy building scalable full-stack applications and AI-powered
            systems. My interests include Backend Development, Artificial
            Intelligence, Machine Learning, Cloud Computing, and System Design.
          </p>

          <ul style={{ marginTop: "16px" }}>
            <li className="about-activity">
              <ImPointRight style={{ color: "var(--green-primary)" }} />{" "}
              Building Full Stack Applications
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "var(--green-primary)" }} />{" "}
              Solving DSA Problems on LeetCode & Codeforces
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "var(--green-primary)" }} />{" "}
              Exploring AI, Cybersecurity & Cloud
            </li>
          </ul>

          <p
            style={{
              color: "var(--green-primary)",
              fontStyle: "italic",
              marginTop: "20px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.9em",
              opacity: 0.8,
            }}
          >
            "Keep learning, keep building, and never stop improving."
          </p>

          <footer style={{ color: "var(--text-muted)", fontSize: "0.85em" }}>
            — Sonika Singh Tomar
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;