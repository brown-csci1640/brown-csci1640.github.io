import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import LectureData from "./Lectures-Data.json";
import "../globalstyles.css";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import "./Lectures.css";

interface Lec {
  Date: string;
  Topic: string;
  Reading: string;
  ReadingLabel?: string;
  Slides: string;
  Quiz: string;
  Recording: string;
  Homework: string;
}

export default function Lectures() {
  // Hidden Egg
  const parseLectures = (lecture: Lec) => {

    const slidesLink = lecture.Slides ? (
      <a href={lecture.Slides}>
        Slides
      </a>
    ) : (
      "Slides"
    );

    const quizLink = lecture.Quiz ? (
      <a
        href={
          lecture.Quiz.startsWith("http")
            ? lecture.Quiz
            : `${process.env.PUBLIC_URL}/${lecture.Quiz}`
        }
      >
        Quiz
      </a>
    ) : null;

    const recordingLink = lecture.Recording ? (
      <a href={lecture.Recording}>
        Recording
      </a>
    ) : (
      "Recording"
    );

    const readings =
      lecture.Reading === "-"
        ? ["-"]
        : lecture.Reading.split(",").map((reading, idx) => (
            <a
              key={idx}
              href={reading.trim()}
              style={{
                marginRight: "8px",
              }}
            >
              {lecture.ReadingLabel || idx + 1}
            </a>
          ));

    const homework =
      lecture.Homework && lecture.Homework.trim() !== "" ? (
        <a
          href={lecture.Homework}
        >
          HW
        </a>
      ) : null;

    const links = [slidesLink, recordingLink];
    const assignments = [homework, quizLink].filter(Boolean);

    return (
      <tr>
        <td>{lecture.Date}</td>
        <td>{lecture.Topic}</td>
        <td>{readings}</td>
        <td>
          {links.map((link, idx) => (
            <span key={idx}>
              {idx > 0 && " | "}
              {link}
            </span>
          ))}
        </td>
        <td>
          {assignments.map((assignment, idx) => (
            <span key={idx}>
              {idx > 0 && " | "}
              {assignment}
            </span>
          ))}
        </td>
      </tr>
    );
  };

  return (
    <div className="lectures">
      <h3>Lectures</h3>

      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>

        <div className="terminal-inside">
          <Container>
            <Table bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Topic</th>
                  <th>Readings</th>
                  <th>Links</th>
                  <th>Assignments</th>
                </tr>
              </thead>
              <tbody>{LectureData.map(parseLectures)}</tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
}
