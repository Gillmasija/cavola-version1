import React from 'react';
import { Card } from 'react-bootstrap';

export default function ProductCard({item}) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={item.image} style={{height:180, objectFit:'cover'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
