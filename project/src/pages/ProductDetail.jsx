import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { ArrowLeft, Heart, Share, MapPin, Calendar, User } from 'lucide-react';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h3>Product not found</h3>
          <Button onClick={() => navigate('/')} className="mt-3">
            Go back to home
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-vh-100 bg-light">
      <Header />
      
      <Container className="my-4">
        <Button 
          variant="link" 
          className="text-decoration-none mb-3 p-0"
          onClick={() => navigate(-1)}
          style={{ color: '#002f34' }}
        >
          <ArrowLeft size={16} className="me-2" />
          Back to results
        </Button>

        <Row>
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4">
              <div className="position-relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                {product.featured && (
                  <Badge 
                    bg="warning" 
                    className="position-absolute top-0 start-0 m-3"
                    style={{ fontSize: '0.8rem' }}
                  >
                    FEATURED
                  </Badge>
                )}
              </div>
              
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="fw-bold mb-2" style={{ color: '#002f34' }}>
                      {product.price}
                    </h2>
                    <h4 className="mb-0">{product.title}</h4>
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="outline-secondary" size="sm">
                      <Heart size={16} />
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <Share size={16} />
                    </Button>
                  </div>
                </div>

                <div className="d-flex align-items-center text-muted mb-3">
                  <MapPin size={16} className="me-2" />
                  <span className="me-4">{product.location}</span>
                  <Calendar size={16} className="me-2" />
                  <span>{product.posted}</span>
                </div>

                <hr />

                <h5 className="fw-bold mb-3">Description</h5>
                <p className="text-muted">{product.description}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-circle bg-secondary d-flex align-items-center justify-content-center me-3"
                    style={{ width: '50px', height: '50px' }}
                  >
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Seller</h6>
                    <p className="text-muted mb-0 small">Member since 2020</p>
                  </div>
                </div>
                
                <Button 
                  className="w-100 mb-2"
                  style={{ backgroundColor: '#002f34', borderColor: '#002f34' }}
                >
                  Show Phone Number
                </Button>
                
                <Button variant="outline-primary" className="w-100">
                  Chat
                </Button>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h6 className="fw-bold mb-3">Safety Tips</h6>
                <ul className="text-muted small list-unstyled">
                  <li className="mb-2">• Meet in a safe & public place</li>
                  <li className="mb-2">• Don't pay any advance payment</li>
                  <li className="mb-2">• Inspect the item properly</li>
                  <li className="mb-2">• Check all documents</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {relatedProducts.length > 0 && (
          <div className="my-5">
            <h4 className="fw-bold mb-4" style={{ color: '#002f34' }}>
              Related Ads
            </h4>
            <Row>
              {relatedProducts.map(relatedProduct => (
                <Col key={relatedProduct.id} md={3} className="mb-4">
                  <Card 
                    className="h-100 border-0 shadow-sm"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  >
                    <Card.Img 
                      variant="top" 
                      src={relatedProduct.image} 
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-3">
                      <h6 className="fw-bold mb-1" style={{ color: '#002f34' }}>
                        {relatedProduct.price}
                      </h6>
                      <Card.Title className="h6 mb-2 text-truncate">
                        {relatedProduct.title}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {relatedProduct.location}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default ProductDetail;