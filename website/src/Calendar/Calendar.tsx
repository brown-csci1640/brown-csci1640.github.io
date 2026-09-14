import React from "react";
import "./Calendar.css";
import "../globalstyles.css";
import { Container } from "react-bootstrap";

export default function Calendar() {
  return (
    <div className="calendar">
      <h3>Calendar</h3>
      <Container className="frame-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_7e3fd253487a8bec1650fa13b6213fe0f37de8e3548faca64dda380267bf9cfd%40group.calendar.google.com&ctz=America%2FNew_York&mode=WEEKg"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          title="Course Calendar"
        ></iframe>
      </Container>
    </div>
  );
}
