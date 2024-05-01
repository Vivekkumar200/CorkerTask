import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddEditForm = ({ restaurant, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    mobileNumber: '',
    email: '',
    website: ''
  });

  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name,
        address: restaurant.address,
        pincode: restaurant.pincode,
        mobileNumber: restaurant.mobileNumber,
        email: restaurant.email,
        website: restaurant.website
      });
    }
  }, [restaurant]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...restaurant, ...formData });
  };

  return (
    <Form   onSubmit={handleSubmit}>
      <Form.Group class="form">
        <Form.Label  >Name</Form.Label>
        <br/>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Form.Group class="form">
        <Form.Label>Address</Form.Label>
        <br/>
        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Form.Group class="form">
        <Form.Label>Pincode</Form.Label>
        <br/>
        <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Form.Group class="form">
        <Form.Label>Mobile Number</Form.Label>
        <br/>
        <Form.Control type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Form.Group class="form">
        <Form.Label>Email</Form.Label>
        <br/>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Form.Group class="form">
        <Form.Label>Website</Form.Label>
        <br/>
        <Form.Control type="text" name="website" value={formData.website} onChange={handleChange} required />
      </Form.Group>
      <br/>
      <Button variant="primary" class="form-btn" type="submit">
        Save Restaurant
      </Button>
    </Form>
  );
};

export default AddEditForm;
