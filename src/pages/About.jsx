import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const About = () => {
  const administrativeOfficers = [
    {
      name: "Dr. Roberto F. Rañola Jr.",
      position: "OIC - University President",
      image: "/Dr.Rañola.png" 
    },
    {
      name: "Dr. George V. Lambot",
      position: "OIC - Vice President for Academics and Student Services",
      image: "/Dr.Lambot.png" 
    },
    {
      name: "Dr. Renelina D. Mañabo",
      position: "Executive Vice President",
      image: "/Dr.Manabo.png" 
    },
    {
      name: "Dr. Jessica D. Rey",
      position: "Vice President for Planning, Research, and Extension",
      image: "/Dr.Rey.png"
    }
  ];

  return (
    <div className="about-container">
      {/* History Section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-success mb-3">About Pamantasan ng Cabuyao</h1>
              <div className="header-line mx-auto"></div>
            </div>
            
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col lg={6} className="mb-4 mb-lg-0">
                    <h2 className="h3 text-success mb-4">Our History</h2>
                    <div className="history-text">
                      <p>
                        In late 2002, a significant protest at LSPC-Cabuyao Campus led the Sangguniang 
                        Bayan of Cabuyao to terminate the agreement with LSPC. This prompted the 
                        establishment of Cabuyao Community College, with faculty members working 
                        alongside the mayor's office to create a new institution.
                      </p>
                      <p>
                        Taking inspiration from Pamantasan ng Lungsod ng Maynila (PLM), whose president 
                        Dr. Benjamin Tayabas assisted in the establishment, the Sanguniang Bayan enacted 
                        Municipal Ordinance No. 2003-059 on April 15, 2003. The ordinance was approved 
                        by Mayor Proceso "Etok" D. Aguillo the following day.
                      </p>
                      <p>
                        Pamantasan ng Cabuyao was inaugurated on July 31, 2003, coinciding with the 
                        founding mayor's birthday. The university was personally inaugurated by President 
                        Gloria Macapagal Arroyo on June 19, 2003, during the celebration of Dr. Jose 
                        Rizal's 107th birthday.
                      </p>
                      <p>
                        Under the leadership of Mayor Isidro L. Hemedes, Jr. and the assistance of 
                        Atty. Rommel Gecolea, who succeeded him in the 2016 elections, PNC has implemented 
                        significant education reforms, introduced better systems, and established sound 
                        policies and procedures that continue to guide the institution today.
                      </p>
                    </div>
                  </Col>
                  
                  <Col lg={6}>
                    <div className="text-center">
                      <Image 
                        src="/Pamantasan.jpg" 
                        alt="PNC Campus" 
                        className="campus-image rounded shadow"
                        fluid
                      />
                      <p className="text-muted mt-3 fst-italic">Pamantasan ng Cabuyao Main Campus</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Administrative Officers Section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-success mb-3">Administrative Officers</h2>
              <div className="header-line mx-auto"></div>
            </div>
            
            <Row className="g-4">
              {administrativeOfficers.map((officer, index) => (
                <Col key={index} md={3}>
                  <div className="text-center officer-card">
                    <div className="officer-image-wrapper mb-3">
                      <Image 
                        src={officer.image} 
                        alt={officer.name}
                        className="officer-image"
                      />
                    </div>
                    <div className="officer-info">
                      <h5 className="officer-name">{officer.name}</h5>
                      <p className="officer-position">{officer.position}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>


    </div>
  );
};

export default About;

