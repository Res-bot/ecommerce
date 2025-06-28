import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const OAuthSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      fetch('http://localhost:8000/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.name) {
            dispatch(login({ ...data, token })); // Include token in the payload
            localStorage.setItem('user', JSON.stringify({ ...data, token }));
            navigate('/');
          }
        })
        .catch(err => console.error('OAuth login failed', err));
    }
  }, [dispatch, navigate, location.search]);

  return <p>Logging you in...</p>;
};

export default OAuthSuccess;