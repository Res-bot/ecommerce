import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const AdminRoute = () => {
  const user = useSelector(state => state.auth.user);

  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }

  return <Navigate to="/" />;
};

export default AdminRoute;
