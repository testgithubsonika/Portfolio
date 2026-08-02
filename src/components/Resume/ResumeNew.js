import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Sonika_Resume.pdf"; // ← rename your PDF to this
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: "30px" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--green-primary)",
              fontSize: "0.82em",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {"// my resume"}
          </p>
          <h1 style={{ color: "var(--text-primary)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Sonika Singh <span className="purple">Tomar</span>
          </h1>
        </div>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;