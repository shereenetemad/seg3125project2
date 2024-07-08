import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function ProductOfTheDay() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", "dailyProduct");  // Example document reference
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, []);

  return (
    <Container>
      <h1>Product of the Day</h1>
      {product ? (
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading product details...</p>
      )}
    </Container>
  );
}

export default ProductOfTheDay;
