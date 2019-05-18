import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function SearchBar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="#">Steam Game Compare</Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default SearchBar;