import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import "./Resources.css";
import readingSetsData from "./AdditionalReadings.json";

interface Reading {
  title: string;
  link?: string;
}

interface ReadingSet {
  title: string;
  // A set (heading + all its readings) is completely omitted from the page until this is true.
  released: boolean;
  // Whether this set's reading titles render as clickable links.
  linksActive: boolean;
  readings: Reading[];
}

const readingSets = (readingSetsData as ReadingSet[]).filter((set) => set.released);

// Sets titled "General ..." go in the right column; everything else is a class reading.
const isGeneral = (set: ReadingSet) => /^general/i.test(set.title);
const classSets = readingSets.filter((set) => !isGeneral(set));
const generalSets = readingSets.filter(isGeneral);

const headingStyle: React.CSSProperties = {
  textAlign: "center",
  fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
  fontWeight: "bold",
};

const readingStyle: React.CSSProperties = {
  marginRight: "8px",
  fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
  fontWeight: "bold",
};

export default function Resources() {
  const renderReading = (reading: Reading, linksActive: boolean, key: number) =>
    linksActive && reading.link ? (
      <a
        key={key}
        href={reading.link}
        target="_blank"
        rel="noreferrer"
        style={readingStyle}
      >
        {reading.title}
      </a>
    ) : (
      <span key={key} style={readingStyle}>
        {reading.title}
      </span>
    );

  const renderColumn = (heading: string, sets: ReadingSet[]) => (
    <Table bordered>
      <thead>
        <tr>
          <th style={headingStyle}>{heading}</th>
        </tr>
      </thead>
      <tbody>
        {sets.map((set, setIdx) => (
          <React.Fragment key={setIdx}>
            <tr id={set.title.toLowerCase().replace(/\s+/g, "-")}>
              <td style={headingStyle}>{set.title}</td>
            </tr>
            {set.readings.map((reading, readingIdx) => (
              <tr key={readingIdx}>
                <td>{renderReading(reading, set.linksActive, readingIdx)}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className="resources">
      <h3>Weekly Readings</h3>
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>
        <div className="terminal-inside">
          <Container>
            <Row>
              <Col md={6}>{renderColumn("Class Readings", classSets)}</Col>
              <Col md={6}>{renderColumn("General Readings", generalSets)}</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
