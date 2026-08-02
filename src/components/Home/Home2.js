import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const achievements = [
  { icon: "🏆", label: "Codeforces Specialist", sub: "Max Rating: 1420" },
  { icon: "☁️", label: "AWS Solutions Architect", sub: "Associate – 2026" },
  { icon: "☁️", label: "AWS Developer", sub: "Associate – 2026" },
  { icon: "🧩", label: "500+ LeetCode Problems", sub: "DSA grind" },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.08} glareColor="#00e5a0">
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(0,229,160,0.25))",
                  maxWidth: "280px",
                }}
              />
            </Tilt>
          </Col>

          <Col md={8} className="home-about-description">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--green-primary)",
                fontSize: "0.8em",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              {"// about me"}
            </p>
            <h1 style={{ fontSize: "2.2em", textAlign: "left", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Let me <span className="purple">introduce</span> myself
            </h1>
            <p className="home-about-body">
              I'm a Computer Science undergraduate at{" "}
              <b className="purple">VIT Bhopal University</b> passionate about
              building scalable, production-grade applications and AI-powered
              systems.
              <br />
              <br />
              My core stack spans{" "}
              <i>
                <b className="purple">
                  React.js, Node.js, FastAPI, PostgreSQL, Python, and
                  JavaScript
                </b>
              </i>
              , with hands-on machine learning using PyTorch and XGBoost.
              <br />
              <br />
              I built{" "}
              <b className="purple">TripSure</b> — an AI-powered train booking
              platform with ML-based confirmation prediction — and{" "}
              <b className="purple">Sentinel</b>, a real-time cybersecurity
              anomaly detection system with explainable AI.
              <br />
              <br />
              I'm currently exploring{" "}
              <b className="purple">
                Distributed Systems, Cloud Architecture, and System Design
              </b>
              .
            </p>

            {/* Achievements */}
            <div style={{ marginTop: "28px", textAlign: "left" }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--green-primary)",
                  fontSize: "0.78em",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {"// achievements"}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {achievements.map((a) => (
                  <div className="achievement-badge" key={a.label}>
                    <span>{a.icon}</span>
                    <span>
                      <strong>{a.label}</strong>
                      <br />
                      <span style={{ fontSize: "0.85em", opacity: 0.7 }}>{a.sub}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;