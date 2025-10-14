import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-success mb-3">Contact Us</h1>
              <div className="header-line mx-auto"></div>
              <p className="lead text-muted mt-3">Get in touch with Pamantasan ng Cabuyao</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Information Section */}
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4 mb-5">
              <Col md={4}>
                <Card className="contact-info-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <h5 className="fw-bold text-success">Address</h5>
                    <p className="text-muted mb-0">Katapatan Homes</p>
                    <p className="text-muted mb-0">Cabuyao City, Laguna</p>
                    <p className="text-muted">Philippines</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="contact-info-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <h5 className="fw-bold text-success">Phone</h5>
                    <p className="text-muted mb-2">(049) 832 3033</p>
                    <p className="text-muted small mb-0">Monday - Sunday</p>
                    <p className="text-muted small">7 AM – 7 PM</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="contact-info-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="icon-wrapper mb-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <h5 className="fw-bold text-success">Email</h5>
                    <p className="text-muted mb-2">info@pnc.edu.ph</p>
                    <p className="text-muted small">For inquiries</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Social Media Links */}
            <Card className="shadow-sm border-0 mb-5">
              <Card.Body className="p-4">
                <h5 className="fw-bold text-success text-center mb-4">Connect With Us</h5>
                <div className="social-links d-flex justify-content-center flex-wrap gap-3">
                  <a href="https://pnc.edu.ph/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="bi bi-globe"></i> Official Website
                  </a>
                  <a href="https://www.facebook.com/ucpncofficial" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                  <a href="https://www.youtube.com/@UniversityofCabuyao" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="bi bi-youtube"></i> YouTube
                  </a>
                  <a href="https://www.instagram.com/explore/locations/534814551/pamantasan-ng-cabuyao/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                  <a href="https://feedback.pnc.edu.ph/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="bi bi-chat-square-text"></i> Feedback
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Map and Contact Form Section */}
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              {/* Map Section */}
              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="p-0">
                    <div className="map-container">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6948.3295221707485!2d121.133858!3d14.259262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d88258da3383%3A0x3db6c2402700f58f!2sPamantasan%20ng%20Cabuyao!5e1!3m2!1sen!2sph!4v1760419464316!5m2!1sen!2sph" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, minHeight: '450px' }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="PNC Location Map"
                      ></iframe>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Contact Form Section */}
              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold text-success mb-4">Send us a Message</h4>
                    
                    {submitted && (
                      <div className="alert alert-success" role="alert">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="Your full name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="your.email@example.com"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          isInvalid={!!errors.subject}
                          placeholder="What is this about?"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subject}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                          placeholder="Your message here..."
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button 
                        variant="success" 
                        type="submit" 
                        className="w-100 py-2 fw-bold"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Additional Info Section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h5 className="fw-bold text-success mb-3">About Pamantasan ng Cabuyao</h5>
                    <p className="text-muted mb-2">
                      <strong>Founded:</strong> April 16, 2003
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Motto:</strong> Kapayapaan, Kaunlaran, Paglilingkod (Peace, Prosperity, Service)
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Hymn:</strong> PnC Dangal ng Cabuyao (PnC March)
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Campus Type:</strong> Urban
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Academic Affiliations:</strong> ALCUCOA, PICAB, PTC
                    </p>
                  </Col>
                  <Col md={4} className="text-center">
                    <img 
                      src="/pnc-logo.png" 
                      alt="PNC Logo" 
                      className="img-fluid"
                      style={{ maxHeight: '150px' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

