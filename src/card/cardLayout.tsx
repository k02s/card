import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwitchButton from './test';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function CardApp() {
  const [contentView, setContentView] = useState<string>('view1'); // State to manage the current content view

  const handleSwitchView = (view: string) => {
    setContentView(view);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="d-flex vh-100">
        <Row className="flex-grow-1" >
          <Col className="bg-primary d-flex align-items-center justify-content-center" xs={9} style={{ height: '100vh' }}>
            {/* Content Area */}

            <div className="cont"  dir='rtl'>
      <div className="rectangle-1">
      <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
      </div>
      <div className="double-rectangle" >
      <div className="rectangle-22"></div>
        <div className="rectangle-2"></div>
        
      </div>
      <div className="rectangle-3"></div>
      <div className="square-container">
        <div className="square-1"></div>
        <div className="square-2"></div>
        <div className="square-3"></div>
      </div>
    </div>

          </Col>
          <Col className="bg-secondary" xs={3} style={{ height: '100vh' }}>
            {/* Sidebar */}
            <Navbar expand="lg" className="flex-column h-100">
              {/* Sidebar content */}
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardApp;
