import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => (
  <header>
    Header
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/somePage">404</Link>
        </li>
      </ul>
    </nav>
  </header>
);
