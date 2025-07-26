import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductSection = ({ title, products, viewAllLink }) => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold" style={{ color: '#002f34' }}>
          {title}
        </h4>
        <Button 
          variant="link" 
          className="text-primary text-decoration-none fw-medium"
          style={{ color: '#002f34 !important' }}
        >
          View More →
        </Button>
      </div>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSection;