import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import pixely from "./Pixely.png";
import "./globalstyles.css";
import { Route, Routes } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home/Home";
import Calendar from "./Calendar/Calendar";
import Lectures from "./Lectures/Lectures";
import Staff from "./Staff/Staff";
import Resources from "./Resources/Resources";

function App() {
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-color"
        variant="dark"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="nav-image-text-group">
                <div className="nav-image">
                  <img
                    src={pixely}
                    className="nav-mascot"
                    alt="pixely mascot icon"
                  ></img>
                </div>
                <span className="nav-text">CS1640: AI & Security</span>
              </div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/lectures">
                <Nav.Link href="/lectures">Lectures</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/calendar">
                <Nav.Link href="/calendar">Calendar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/staff">
                <Nav.Link href="/staff">Staff</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resources">
                <Nav.Link href="/resources">Resources</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {/* <Route exact path="/Portfolio" element={  <App /> }/> */}
        <Route path="/" element={<Home />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <div className="footer">© BROWN UNIVERSITY 2026 CS1640 STAFF</div>
    </div>
  );
}

export default App;
