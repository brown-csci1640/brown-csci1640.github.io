import React from "react";
import { Container, Table } from "react-bootstrap";
// import "../globalstyles.css"
import "./Assignments.css";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";

export default function Assignments() {
  return (
    <div className="assignments">
      <h3>Programs</h3>
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="window icon" />
          <img src={xicon} style={{ height: "30px" }} alt="xicon" />
        </div>
        <div className="terminal-inside">
          <Container>
            <Table bordered>
              <thead>
                <tr>
                  <th>Out</th>
                  <th>Due</th>
                  <th>CS167</th>
                  <th>CS169</th>
                  <th>CS267</th>
                  <th>Handout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jan 24</td>
                  <td>Feb 5</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/uthreads"
                      target="_blank"
                      rel="noreferrer"
                    >
                      uthreads
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Jan 27</td>
                  <td>Feb 10</td>
                  <td></td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Processes-and-Threads"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weenix - Processes
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Processes-and-Threads-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Feb 12</td>
                  <td>Feb 24</td>
                  <td></td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Drivers"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weenix - Drivers
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Drivers-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Feb 11</td>
                  <td>Mar 1</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/mthreads"
                      target="_blank"
                      rel="noreferrer"
                    >
                      mthreads
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Feb 26</td>
                  <td>Mar 17</td>
                  <td></td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Virtual-File-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weenix - VFS
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Virtual-File-System-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Mar 8</td>
                  <td>Mar 20</td>
                  <td>&#10004;</td>
                  <td></td>
                  <td></td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Virtual-File-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      VFS
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/Virtual-File-System-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Mar 19</td>
                  <td>Apr 7</td>
                  <td></td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/System-V-File-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weenix - S5FS
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/System-V-File-System-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 9</td>
                  <td>May 14</td>
                  <td>&#10004;</td>
                  <td></td>
                  <td></td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/System-V-File-System"
                      target="_blank"
                      rel="noreferrer"
                    >
                      S5FS
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/System-V-File-System-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 9</td>
                  <td>May 14</td>
                  <td></td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/VM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weenix - VM
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/brown-cs1690/handout/wiki/VM-Help-Guide"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help Guide
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </div>

      <h3>Homeworks</h3>

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
                  <th>Out</th>
                  <th>Due</th>
                  <th>CS167</th>
                  <th>CS169</th>
                  <th>CS267</th>
                  <th>Name</th>
                  <th>Downloads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Feb 5</td>
                  <td>Feb 14</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>Homework 1</td>
                  <td>
                    {/* modify the path to fit the pdf name */}
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw1.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Handout
                    </a>{" "}
                    |{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw1_ans.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Mar 3</td>
                  <td>Mar 10</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>Homework 2</td>
                  <td>
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw2.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Handout
                    </a>{" "}
                    |{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw2_ans.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Mar 31</td>
                  <td>Apr 9</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>Homework 3</td>
                  <td>
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw3.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Handout
                    </a>{" "}
                    |{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw3_ans.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                    Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 23</td>
                  <td>Apr 30</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>&#10004;</td>
                  <td>Homework 4</td>
                  <td>
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw4.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                    Handout
                    </a> |{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/homeworks/hw4_ans.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                    Solution
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
}
