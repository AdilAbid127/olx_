import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer 
      className="py-5 mt-5"
      style={{ backgroundColor: '#002f34', color: 'white' }}
    >
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">POPULAR CATEGORIES</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cars</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Flats for rent</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Mobile Phones</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">TRENDING SEARCHES</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Bikes</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Watches</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Books</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Dogs</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">ABOUT US</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About Dubizzle Group</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">OLX Blog</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">OLX for Businesses</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">OLX</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Sitemap</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of use</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: '#ffffff20' }} />
        <Row>
          <Col md={6}>
            <p className="text-white-50 mb-0">
              Classified in Pakistan © 2006-2024 OLX
            </p>
          </Col>
          <Col md={6} className="text-end">
            <div className="d-flex justify-content-end gap-3">
              <a href="#" className="text-white-50">📱</a>
              <a href="#" className="text-white-50">📘</a>
              <a href="#" className="text-white-50">🐦</a>
              <a href="#" className="text-white-50">📷</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;