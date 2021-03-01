import React from 'react';

import { Container, Title, Funcs } from './styles';

function Navbar(props) {
  return (
    <Container>
      <Title><h1>30-days-of-react</h1></Title>
      <Funcs>
        <input {...props} />
      </Funcs>
    </Container>
  );
}

export default Navbar;