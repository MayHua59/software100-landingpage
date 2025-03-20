import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/'); // Redirect to the home page ('/')
    }, 1000); // 2 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigate]); 
  if (loading) {
    return (
      <div class="container">
  <div class="spinner"></div>
  <p class="loading-text">Loading...</p>
</div>
    );
  }
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/loading" element={<App/>}/>
</Routes>
  );
}

export default App;
