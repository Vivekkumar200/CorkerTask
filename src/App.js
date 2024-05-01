import React, { useState, useEffect } from 'react';
import RestaurantTable from './components/RestaurantTable';
import AddEditForm from './components/AddEditForm';
import { Modal, Button } from 'react-bootstrap';
import './App.css'; // Assuming you have some basic styling in App.css

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetching data from local JSON file
    fetch('./restaurant.json')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error loading the data:', error));
  }, []);

  const handleSave = (restaurant) => {
    if (restaurant.id) {
      const updatedRestaurants = restaurants.map(r => r.id === restaurant.id ? restaurant : r);
      setRestaurants(updatedRestaurants);
    } else {
      const newRestaurant = {
        ...restaurant,
        id: Math.max(...restaurants.map(r => r.id)) + 1 // simple ID assignment
      };
      setRestaurants([...restaurants, newRestaurant]);
    }
    setShowModal(false);
  };

  const handleEdit = (restaurant) => {
    setCurrentRestaurant(restaurant);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter(r => r.id !== id));
  };

  const handleAddNew = () => {
    setCurrentRestaurant(null);
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <Button variant="primary" onClick={handleAddNew}>
        Add New Restaurant
      </Button>
      <RestaurantTable
        restaurants={restaurants}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentRestaurant ? 'Edit Restaurant' : 'Add New Restaurant'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEditForm
            restaurant={currentRestaurant}
            onSave={handleSave}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;