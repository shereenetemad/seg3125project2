// src/components/Chat.js
import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <Container>
      <h1>Chat</h1>
      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>{message}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleSendMessage}>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Chat;