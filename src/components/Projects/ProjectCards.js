import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* If imgPath provided use it, otherwise show icon placeholder */}
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} className="card-img-top" />
      ) : (
        <div className="project-img-placeholder">
          <span style={{ fontSize: "2.5rem" }}>{props.icon || "💻"}</span>
          <span>{props.title}</span>
        </div>
      )}

      <Card.Body style={{ padding: "20px" }}>
        {/* Tech tags */}
        {props.tags && props.tags.length > 0 && (
          <div className="project-tags">
            {props.tags.map((tag) => (
              <span className="project-tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <Card.Title style={{ marginTop: "10px" }}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "14px" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              className="btn-outline-green"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;