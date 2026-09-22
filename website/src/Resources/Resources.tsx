import React from "react";
import { Container, Table } from "react-bootstrap";
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

const readingSets = readingSetsData as ReadingSet[];

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

  return (
    <div className="resources">
      <h3>Additional Readings</h3>
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>
        <div className="terminal-inside">
          <Container>
            <Table bordered>
              <tbody>
                {readingSets
                  .filter((set) => set.released)
                  .map((set, setIdx) => (
                    <React.Fragment key={setIdx}>
                      <tr>
                        <td
                          style={{
                            textAlign: "center",
                            fontFamily:
                              "'Fira Code', 'Consolas', 'Courier New', monospace",
                            fontWeight: "bold",
                          }}
                        >
                          {set.title}
                        </td>
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
          </Container>
        </div>
      </div>
    </div>
  );
}
