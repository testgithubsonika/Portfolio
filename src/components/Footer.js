import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ alignItems: "center" }}>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Sonika Singh Tomar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--green-primary)",
              opacity: 0.7,
            }}
          >
            © {year} &lt;SST /&gt;
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", gap: "14px", listStyle: "none", padding: 0 }}>
            {[
              { href: "https://github.com/testgithubsonika", icon: <AiFillGithub /> },
              { href: "https://www.linkedin.com/in/sonika-tomar-760048199", icon: <FaLinkedinIn /> },
              { href: "https://codeforces.com", icon: <SiCodeforces /> },
              { href: "https://leetcode.com", icon: <SiLeetcode /> },
            ].map(({ href, icon }, i) => (
              <li key={i}>
                <a
                  href={href}
                  style={{ color: "var(--text-muted)", fontSize: "1.3em", transition: "color 0.2s" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e => (e.target.style.color = "var(--green-primary)")}
                  onMouseLeave={e => (e.target.style.color = "var(--text-muted)")}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;