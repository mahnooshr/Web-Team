import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gnav from './main/gnav';
import Login from './authentication/login';
import CardGrid from './catalog/card_grid';

const App = () => (
  <div>
    <Gnav />
    <div className="container">
      <Login />
      <CardGrid />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

