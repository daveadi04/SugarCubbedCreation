import React, { useState } from "react";
import "./Admindash.css";

const AdminDashboard = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Chocolate Chip Cookies", price: "$10" },
    { id: 2, name: "Red Velvet Cookies", price: "$12" },
  ]);

  // Add New Item
  const addItem = () => {
    const newItem = { id: items.length + 1, name: "New Cookie", price: "$8" };
    setItems([...items, newItem]);
  };

  // Update Item (Dummy Logic)
  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: item.name + " (Updated)" } : item
      )
    );
  };

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Buttons */}
      <div className="admin-actions">
        <button className="add-btn" onClick={addItem}>Add Item</button>
      </div>

      {/* Table */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="update-btn" onClick={() => updateItem(item.id)}>Update</button>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
