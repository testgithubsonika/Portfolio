import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import aboutImg from "../../Assets/home-main.svg"; // female dev illustration

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* Bio row */}
          <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--green-primary)",
                  fontSize: "0.82em",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                // who I am
              </p>
              <h1
                style={{
                  fontSize: "2em",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  paddingBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Know <strong className="purple">Me</strong>
              </h1>
              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "80px", paddingBottom: "50px", textAlign: "center" }}
              className="about-img"
            >
              <img
                src={aboutImg}
                alt="female developer illustration"
                className="img-fluid"
                style={{
                  maxWidth: "380px",
                  filter: "drop-shadow(0 0 30px rgba(0,229,160,0.12))",
                }}
              />
            </Col>
          </Row>

          <div className="section-divider" />

          {/* Skills */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--green-primary)",
              fontSize: "0.82em",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            // tech stack
          </p>
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />

          <div className="section-divider" />

          {/* GitHub contributions */}
          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default About;