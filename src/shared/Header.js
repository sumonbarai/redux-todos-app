import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TODO APP</Navbar.Brand>
          <Nav className="m-auto main-menu">
            <Link to="home">home</Link>
            <Link to="addbook">addBook</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
