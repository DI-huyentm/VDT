// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to VDT 2024</h1>
      <Link to="/students">
        <button>View all Students</button>
      </Link>
    </div>
  );
}

export default HomePage;
