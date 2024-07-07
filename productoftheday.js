// src/components/ProductOfTheDay.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

function ProductOfTheDay() {
  return (
    <Container>
      <h1>Product of the Day</h1>
      <Card>
        <Card.Body>
          <Card.Title>Moroccan Oil Hair Mist</Card.Title>
          <Card.Text>
            This hair mist is amazing for making your hair smell great while keeping it silky and not drying it out. It can be purchased at Sephora and ranges from $20-$50, depending on the size.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductOfTheDay;
