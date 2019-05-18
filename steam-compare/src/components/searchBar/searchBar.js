import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';


function SearchBar(props) {

  return (
    <div>
        <Container className="p-5">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" >Steam Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => {props.searchSteam(e.target.value)}}
                />
            </InputGroup>
        </Container>
    </div>
  );
}

export default SearchBar;