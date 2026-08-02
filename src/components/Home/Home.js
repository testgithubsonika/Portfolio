import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ alignItems: "center" }}>
            <Col md={7} className="home-header">
              {/* mono eyebrow */}
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--green-primary)",
                  fontSize: "0.85em",
                  letterSpacing: "0.12em",
                  paddingLeft: "50px",
                  marginBottom: "8px",
                  opacity: 0.8,
                }}
              >
                {"// hello, world"}
              </p>

              <h1 style={{ paddingBottom: 8 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name"> SONIKA SINGH TOMAR</strong>
              </h1>

              <div style={{ padding: "30px 50px", textAlign: "left" }}>
                <Type />
              </div>

              {/* Quick social row on hero */}
              <div style={{ paddingLeft: "50px", display: "flex", gap: "12px" }}>
                {[
                  { href: "https://github.com/testgithubsonika", icon: <AiFillGithub />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/sonika-tomar-760048199", icon: <FaLinkedinIn />, label: "LinkedIn" },
                  { href: "https://codeforces.com", icon: <SiCodeforces />, label: "Codeforces" },
                  { href: "https://leetcode.com", icon: <SiLeetcode />, label: "LeetCode" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className="icon-colour home-social-icons"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  filter: "drop-shadow(0 0 40px rgba(0,229,160,0.2))",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;