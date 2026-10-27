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
  QuizLabel?: string;
  Recording: string;
  Homework: string;
  HomeworkLabel?: string;
}

export default function Lectures() {
  // Hidden Egg
  // Number lectures in order, skipping "No class" breaks
  const isBreak = (lecture: Lec) => /no class/i.test(lecture.Topic);
  let lectureCount = 0;
  const lectureNumbers = LectureData.map((lecture: Lec) =>
    isBreak(lecture) ? "-" : String(++lectureCount)
  );

  const parseLectures = (lecture: Lec, index: number) => {

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

    const quizLabel =
      lecture.Quiz && lecture.QuizLabel ? (
        <div style={{ textAlign: "center" }}>{lecture.QuizLabel}</div>
      ) : null;

    const recordingLink = lecture.Recording ? (
      <a href={lecture.Recording}>
        Recording
      </a>
    ) : (
      "Recording"
    );

    // Multiple readings: comma-separate both Reading and ReadingLabel, in the same order
    const readingLabels = lecture.ReadingLabel
      ? lecture.ReadingLabel.split(",").map((label) => label.trim())
      : [];

    const readings =
      lecture.Reading === "-"
        ? ["-"]
        : lecture.Reading.split(",").map((reading, idx) => (
            <div
              key={idx}
              style={{ marginTop: idx > 0 ? "8px" : 0, whiteSpace: "nowrap" }}
            >
              <a href={reading.trim()}>{readingLabels[idx] || idx + 1}</a>
            </div>
          ));

    const homework =
      lecture.Homework && lecture.Homework.trim() !== "" ? (
        <a
          href={lecture.Homework}
        >
          {lecture.HomeworkLabel || "HW"}
        </a>
      ) : null;

    const links = [slidesLink, recordingLink];
    const assignments = [homework, quizLink].filter(Boolean);

    return (
      <tr key={index}>
        <td>{lectureNumbers[index]}</td>
        <td>{lecture.Date}</td>
        <td style={{ whiteSpace: "pre-line" }}>{lecture.Topic}</td>
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
          {quizLabel}
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
                  <th>#</th>
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
