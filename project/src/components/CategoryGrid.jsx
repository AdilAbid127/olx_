import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { categories } from '../data/products';

const CategoryGrid = ({ onCategorySelect }) => {
  return (
    <Container className="my-5">
      <Row>
        {categories.map(category => (
          <Col key={category.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card 
              className="h-100 border-0 shadow-sm category-card"
              style={{ cursor: 'pointer' }}
              onClick={() => onCategorySelect(category.slug)}
            >
              <Card.Body className="text-center p-3">
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                  {category.icon}
                </div>
                <Card.Text 
                  className="mb-0 small fw-medium"
                  style={{ color: '#002f34', lineHeight: '1.2' }}
                >
                  {category.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryGrid;