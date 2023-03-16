import React, { useState } from 'react';
import Router from 'next/router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // console.log(formData);
      // Router.push('/success');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          type="textarea"
          name="message"
          id="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormPage;
