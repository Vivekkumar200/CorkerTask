import React from 'react';
import { Table, Button } from 'react-bootstrap';

const RestaurantTable = ({ restaurants, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover className=" mt-3">
      <thead>
        <tr >
          <th class="table">Name</th>
          <th class="table">Address</th>
          <th class="table">Pincode</th>
          <th class="table">Mobile Number</th>
          <th class="table">Email</th>
          <th class="table">Website</th>
          <th class="table">Actions</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>{restaurant.pincode}</td>
            <td>{restaurant.mobileNumber}</td>
            <td>{restaurant.email}</td>
            <td>{restaurant.website}</td>
            <td>
              <Button variant="info" onClick={() => onEdit(restaurant)}>
                Edit
              </Button>{' '}
              <Button variant="danger" onClick={() => onDelete(restaurant.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RestaurantTable;
