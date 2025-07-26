import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <div 
      className="py-5"
      style={{ 
        background: 'linear-gradient(45deg, #3498db 0%, #2ecc71 100%)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold mb-3">
              SELL FASTER & SMARTER
            </h1>
            <p className="lead mb-4">
              Join millions of buyers and sellers on OLX marketplace
            </p>
            <Button 
              variant="light" 
              size="lg"
              className="fw-bold rounded-pill"
              style={{ 
                color: '#3498db',
                padding: '12px 30px',
                transition: 'all 0.3s ease'
              }}
            >
              Start Selling Now →
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <div 
              className="bg-white rounded-lg p-4 shadow-lg"
              style={{ 
                color: '#002f34',
                transform: 'translateY(-10px)'
              }}
            >
              <h5 className="fw-bold mb-3">Get the OLX App</h5>
              <p className="text-muted mb-3">Experience better with our mobile app</p>
              <div className="d-flex flex-column gap-2">
                <Button 
                  variant="dark" 
                  className="rounded-pill"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <i className="bi bi-google-play me-2"></i>Google Play
                </Button>
                <Button 
                  variant="dark" 
                  className="rounded-pill"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <i className="bi bi-apple me-2"></i>App Store
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;