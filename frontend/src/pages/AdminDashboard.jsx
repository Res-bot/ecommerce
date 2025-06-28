import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Row, Col, Form, Button, Image, Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, PackagePlus, ClipboardList, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [product, setProduct] = useState({ name: '', price: '', description: '', category: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('/api/admin/orders');
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setOrders([]);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('image', image);
    form.append('name', product.name);
    form.append('price', product.price);
    form.append('description', product.description);
    form.append('category', product.category);

    try {
      await axios.post('/api/admin/add-product', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Product added successfully!');
    } catch (error) {
      toast.error('Failed to add product');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      dispatch(logout());
      toast.success('Logged out successfully!');
      navigate('/');
    } catch (err) {
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h4 className="text-white d-flex align-items-center gap-2 mb-4">
          <PackagePlus size={20} /> Admin Panel
        </h4>
        <ul>
          <li><PackagePlus size={16} /> Add Product</li>
          <li><ClipboardList size={16} /> Orders</li>
          <li onClick={handleLogout}><LogOut size={16} /> Logout</li>
        </ul>
      </aside>

      <div className="admin-container">
        <Container>
          <h2 className="mb-4"><ShoppingCart size={24} /> Admin Dashboard</h2>
          <Row>
            <Col md={6}>
              <Card className="p-4 shadow-sm">
                <Card.Title className="mb-3 text-center">
                  <PackagePlus size={20} /> Add Product
                </Card.Title>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      onChange={e => setProduct({ ...product, name: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="number"
                      placeholder="Price"
                      onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Description"
                      onChange={e => setProduct({ ...product, description: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Category"
                      onChange={e => setProduct({ ...product, category: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="file" onChange={handleImageChange} />
                    {preview && <Image src={preview} alt="Preview" className="preview-image mt-2" fluid />}
                  </Form.Group>
                  <Button variant="success" type="submit" className="w-100">Add</Button>
                </Form>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="p-4 shadow-sm">
                <Card.Title className="mb-3"><ClipboardList size={20} /> Orders</Card.Title>
                {orders.length > 0 ? (
                  <ListGroup>
                    {orders.map((order, index) => (
                      <ListGroup.Item key={index}>
                        <p><strong>User:</strong> {order.user?.name || 'N/A'}</p>
                        <p><strong>Products:</strong> {order.products?.length || 0}</p>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <p>No orders found.</p>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminDashboard;
