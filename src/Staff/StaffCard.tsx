import React from "react";
import "./StaffCard.css";
import { Card } from "react-bootstrap";

interface StaffCardProps {
  name: string;
  pronouns: string;
  image: string;
  item?: string;
  email: string;
  hours?: string;
  virtualLink?: string;
}

export default function StaffCard(props: StaffCardProps) {
  const renderHours = () => {
    if (!props.hours) return null;
    if (!props.virtualLink) return props.hours;

    const parts = props.hours.split("Virtual");
    return (
      <>
        {parts[0]}
        <a href={props.virtualLink} target="_blank" rel="noreferrer">
          Virtual
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="staff-card">
      <Card style={{ width: "20rem" }}>
        <div className="staff-pics">
          <Card.Img
            src={props.image}
            className="img-actual"
            style={{
              objectFit: "contain", // Ensures image fits nicely
              transform: "scale(0.8)", // Shrinks image to 80%
              transformOrigin: "center", // Keep it centered
            }}
          />
          <Card.Img src={props.item} className="img-item" />
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>
            {" "}
            {props.pronouns} <br /> {renderHours()}
          </Card.Subtitle>
          {/* <Card.Subtitle>{props.hours}</Card.Subtitle> */}
          <Card.Link href={props.email}>{props.email}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
