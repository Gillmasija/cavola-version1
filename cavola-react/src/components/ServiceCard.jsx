import React from 'react';
import { Card } from 'react-bootstrap';

export default function ServiceCard({service}) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
