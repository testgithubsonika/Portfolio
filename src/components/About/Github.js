import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "40px",
        paddingTop: "20px",
        color: "white",
      }}
    >
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
        {"// consistency"}
      </p>
      <h1 className="project-heading pb-2" style={{ textAlign: "center" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ marginTop: "20px", overflowX: "auto" }}>
        <GitHubCalendar
          username="testgithubsonika"
          blockSize={14}
          blockMargin={4}
          color="#00e5a0"
          fontSize={14}
          theme={{
            dark: ["#0d1f17", "#004d30", "#007a4d", "#00b371", "#00e5a0"],
          }}
        />
      </div>
    </Row>
  );
}

export default Github;