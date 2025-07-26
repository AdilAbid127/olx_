import React from 'react';
import { Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-100 border-0 shadow-sm product-card"
      style={{ 
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="position-relative overflow-hidden">
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ 
            height: '220px', 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        <div 
          className="position-absolute top-0 end-0 m-2 p-2 bg-white rounded-circle shadow-sm"
          style={{ 
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onClick={(e) => {
            e.stopPropagation();
            // Add favorite functionality
          }}
        >
          <Heart size={18} className="text-danger" />
        </div>
        {product.featured && (
          <div 
            className="position-absolute top-0 start-0 m-2 px-3 py-1 text-white small fw-bold"
            style={{ 
              background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
              borderRadius: '20px'
            }}
          >
            FEATURED
          </div>
        )}
      </div>
      <Card.Body className="p-3">
        <h5 className="fw-bold mb-2" style={{ color: '#002f34' }}>
          {product.price}
        </h5>
        <h6 className="mb-2 text-truncate">{product.title}</h6>
        <div className="d-flex align-items-center text-muted small">
          <MapPin size={14} className="me-1" />
          <span>{product.location}</span>
          <span className="mx-2">•</span>
          <span>{product.posted}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;