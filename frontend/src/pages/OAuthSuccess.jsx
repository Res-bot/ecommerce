import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // make sure this package is installed

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        localStorage.setItem('user', JSON.stringify(decoded));
        navigate('/');
      } catch (err) {
        console.error('Invalid token', err);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

export default OAuthSuccess;

