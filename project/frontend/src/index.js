import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gnav from './components/gnav';
import Login from './pages/login';
import CardGrid from './components/card_grid';

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

