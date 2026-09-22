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
  Slides: string;
  Quiz: string;
  Recording: string;
  Homework: string;
}

export default function Lectures() {
  // Hidden Egg
  const parseLectures = (lecture: Lec) => {

    const slidesLink = lecture.Slides ? (
      <a href={lecture.Slides} target="_blank" rel="noreferrer">
        Slides
      </a>
    ) : (
      "Slides"
    );

    const quizLink = lecture.Quiz ? (
      <a
        href={`${process.env.PUBLIC_URL}/${lecture.Quiz}`}
        target="_blank"
        rel="noreferrer"
      >
        Quiz
      </a>
    ) : (
      "Quiz"
    );

    const recordingLink = lecture.Recording ? (
      <a href={lecture.Recording} target="_blank" rel="noreferrer">
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
              target="_blank"
              rel="noreferrer"
              style={{
                marginRight: "8px",
                fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
                fontWeight: "bold",
              }}
            >
              {idx + 1}
            </a>
          ));

    const homework =
      lecture.Homework && lecture.Homework.trim() !== "" ? (
        <a
          href={lecture.Homework}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
            fontWeight: "bold",
          }}
        >
          HW
        </a>
      ) : (
        ""
      );

    return (
      <tr>
        <td>{lecture.Date}</td>
        <td>{lecture.Topic}</td>
        <td>{readings}</td>
        <td>
          {slidesLink} | {recordingLink} | {quizLink}
        </td>
        <td>{homework}</td>
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
                  <th>Homework</th>
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
