import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BreadcrumbItem } from 'react-bootstrap';
import FlipCard from './FlipCard';


interface ButtonProps {
  text: string;
  backgroundColor: string;
}

function CardApp() {

  const [isReview, setIsReview] = useState(true);

  const handleButtonClick = () => {
    setIsReview(!isReview);
  };

  const Button: React.FC<ButtonProps> = ({ text, backgroundColor }) => {
    return (
      <button
        className={`button ${isReview ? 'review' : 'practice'}`}
        onClick={handleButtonClick}
        style={{ backgroundColor }}
      >
        {text}
      </button>
    );
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

{/*_________________________________________________________________________________________________ */}

      <Container fluid className="d-flex vh-100 custom-container">
        <Row className="flex-grow-1" >
            <Col className="bg-white d-flex align-items-center justify-content-center" xs={9} style={{ height: '100vh' }}>
              {/* Content Area */}
                <div className="cont"  dir='rtl'>

                        <div className="breadcrumb">
                        <Breadcrumb>
                          <BreadcrumbItem href="#" active>الصفحة الرئيسية  / </BreadcrumbItem>
                          <BreadcrumbItem href="#" active> الدروس</BreadcrumbItem>
                          <BreadcrumbItem href="#" active>المراجعة</BreadcrumbItem>
                          <BreadcrumbItem href="#" active>الممارسة</BreadcrumbItem>
                        </Breadcrumb>
                        </div>

                      {/* ____________________________________ */}
                        <div className="double-rectangle" >
                        <div className="rectangle-22"></div>
                          <div className="rectangle-2"></div>   
                        </div>
                      {/* ____________________________________ */}
                        <div className="rectangle-3">
                       <Button
                  text="Review"
                  backgroundColor="#007bff" // Blue color
                />
                <Button
                  text="Practice"
                  backgroundColor="white" // White color
                />
                        </div>
                      {/* ____________________________________ */}
                        <div className="square-container">
                          <div className="square-1">
                          <button className="arrow-button left-arrow">→</button>
                          </div>
                          <div className="flip-card ">
                            <FlipCard
                  frontContent={<div>Front Content</div>}
                  backContent={<div>Back Content</div>}
                />
                          </div>
                          <div className="square-3">
                          <button className="arrow-button right-arrow">←</button>
                          </div>
                        </div>
                </div>
            </Col>
            
{/* ______________________________________________________________________________________________________ */}

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
