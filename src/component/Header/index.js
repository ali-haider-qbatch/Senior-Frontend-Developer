import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "../Container";
import Button from "../Button";
import Logo from "../Logo";
import HeadWrapper from "./style";

function BasicExample() {
  return (
    // <HeadWrapper>
    //   <Navbar expand="xl" sticky="top">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <Logo />
    //       </Navbar.Brand>
    //       <div>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //           <Nav>
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#link">Careers</Nav.Link>
    //             <Nav.Link href="#link">Blog</Nav.Link>
    //             <Nav.Link href="#link">About Us</Nav.Link>
    //             <Button variant="secondary" text="login" />
    //             <Button variant="primary" text="Sign Up" />
    //           </Nav>
    //         </Navbar.Collapse>
    //       </div>
    //     </Container>
    //   </Navbar>
    // </HeadWrapper>
    <HeadWrapper>
    <Navbar header expand="xl" className="">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav align-items-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Careers</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Button variant="secondary" text="login" />
            <Button variant="primary" text="Sign Up" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </HeadWrapper>
  );
}

export default BasicExample;
