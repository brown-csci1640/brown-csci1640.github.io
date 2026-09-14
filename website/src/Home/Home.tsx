import React from "react";
import "./Home.css";
import "../globalstyles.css";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home">
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>

        <div className="terminal-inside">
          <Container>
            <h2>Welcome!</h2>
            <p>
              In this class, you'll have the opportunity to explore the
              fascinating intersection of Artificial Intelligence and Computer
              Security - two of the most rapidly evolving and impactful fields
              in computer science today.
            </p>
            <br />
            <p>
              We'll cover topics including trustworthy and privacy-preserving
              Machine Learning, secure federated learning, adversarial machine
              learning, AI-based cyber defenses and attacks, differential
              privacy, homomorphic encryption, and emerging challenges around
              super intelligence, AI safety, alignment and transparency. You'll
              develop critical thinking skills about how these fields influence
              each other, and understand how these fields may continue to evolve
              in the future.
            </p>
            <br />
            <p>
              This course mixes traditional lectures with seminar-style
              discussions, hands-on assignments that connect technical work with
              societal questions, and a final project. We’ll dive into
              real-world issues, like how attackers can break AI systems, how
              cryptography and machine learning go hand-in-hand, and the ways AI
              can both strengthen and weaken cybersecurity. This is a
              perspective rarely gained by studying these subjects in isolation,
              making CSCI 1640 an essential foundation for understanding the
              security challenges of an AI-driven world.
            </p>

            <h3>Important Info</h3>
            <p>
              {" "}
              Syllabus: See{" "}
              <a
                href="https://drive.google.com/file/d/1ocE1We8wSSgUtDDiCNucnzUYpxuA3zRG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </p>
            <br />
            <p>Lectures: M 3-5:30pm ET, CIT 241</p>
            <br />
            <p>
              Course Feedback: Fill out the{" "}
              <a
                href="https://forms.gle/KSb8Z4GnhNuL6AJU6"
                target="_blank"
                rel="noreferrer"
              >
                Anonymous Feedback Form
              </a>
            </p>
            <br />
            <p> Contact:</p>
            <ul>
              <li>cs1640headtas@lists.brown.edu</li>
              <li>cs1640tas@lists.brown.edu</li>
            </ul>
            <p> Course Essentials:</p>
            <ul>
              <li>Gradescope: Please join via Canvas</li>
              <li>Edstem: Please join via Canvas</li>
            </ul>
            <p> Prerequisites: </p>
            <ul>
              <li>
                CSCI 0410, 1410, 1411, 1420, 1950F, 1470 or 2470 <br></br>{" "}
                <u>
                  <b>and</b>
                </u>{" "}
                CSCI 1510, 1515, 1650, 1951H, 1660 or 2660
              </li>
            </ul>
            <p>Reading Material:</p>
            <ul>
              <li>
                All learning resources are deployed, managed, and become
                available <br></br> to students through this website. See the
                course calendar for slides, quizzes, and readings.
              </li>
            </ul>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </div>
  );
}
