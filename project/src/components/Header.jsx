import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Dropdown } from 'react-bootstrap';
import { Search, MapPin, User, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSearch, onLocationChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Pakistan');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <>
      <Navbar bg="white" expand="lg" className="border-bottom py-2">
        <Container>
          <Navbar.Brand 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer', fontSize: '2rem', fontWeight: 'bold', color: '#002f34' }}
          >
            OLX
          </Navbar.Brand>
          
          <div className="d-flex flex-grow-1 mx-4">
            <Dropdown className="me-2">
              <Dropdown.Toggle 
                variant="outline-dark" 
                className="d-flex align-items-center border-end-0"
                style={{ borderRadius: '4px 0 0 4px', minWidth: '150px' }}
              >
                <MapPin size={16} className="me-2" />
                {location}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLocationChange('Pakistan')}>Pakistan</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Lahore')}>Lahore</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Karachi')}>Karachi</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Islamabad')}>Islamabad</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Faisalabad')}>Faisalabad</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form onSubmit={handleSearch} className="d-flex flex-grow-1">
              <Form.Control
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-start-0 border-end-0"
                style={{ borderRadius: '0' }}
              />
              <Button 
                type="submit" 
                style={{ 
                  backgroundColor: '#002f34', 
                  borderColor: '#002f34',
                  borderRadius: '0 4px 4px 0' 
                }}
              >
                <Search size={16} />
              </Button>
            </Form>
          </div>

          <div className="d-flex align-items-center">
            <Button variant="link" className="text-dark me-3 text-decoration-none">
              <User size={16} className="me-1" />
              Login
            </Button>
            <Button 
              style={{ 
                backgroundColor: '#ffce32', 
                borderColor: '#ffce32', 
                color: '#002f34',
                fontWeight: 'bold'
              }}
              className="d-flex align-items-center"
            >
              <Plus size={16} className="me-1" />
              SELL
            </Button>
          </div>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg" className="py-2">
        <Container>
          <Nav className="w-100 justify-content-between">
            <Nav.Link href="#categories" className="text-dark fw-bold">All CATEGORIES</Nav.Link>
            <Nav.Link href="#mobiles" className="text-dark">Mobile Phones</Nav.Link>
            <Nav.Link href="#cars" className="text-dark">Cars</Nav.Link>
            <Nav.Link href="#motorcycles" className="text-dark">Motorcycles</Nav.Link>
            <Nav.Link href="#houses" className="text-dark">Houses</Nav.Link>
            <Nav.Link href="#video-audios" className="text-dark">Video-Audios</Nav.Link>
            <Nav.Link href="#tablets" className="text-dark">Tablets</Nav.Link>
            <Nav.Link href="#land-plots" className="text-dark">Land & Plots</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;