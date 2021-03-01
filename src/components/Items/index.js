import React from 'react';
import { Container, Item } from './styles.js';

function Items({ Data }) {
  return (
    <Container>
      {
        Data.map((images) => {
          return (
            <Item
              key={images.id}
              href={images.link}
              target="blank"
              whileHover={{ scale:1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <img src={images.image} alt="github project" />
              <h1>{images.name}</h1>
            </Item>
          )
        })
      }
    </Container>
  );
}

export default Items;