import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import { db } from './Firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(msgs);
    });

    return () => unsubscribe(); // Detach listener when the component unmounts
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(newMessage !== "") {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: new Date()
      });
      setNewMessage('');
    }
  };

  return (
    <Container>
      <h1>Chat</h1>
      <ListGroup>
        {messages.map((message) => (
          <ListGroup.Item key={message.id}>{message.text}</ListGroup.Item>
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
