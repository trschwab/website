// src/pages/AboutPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default AboutPage;
