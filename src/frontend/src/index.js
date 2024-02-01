import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gnav from './main/gnav';
import Login from './authentication/login';
import CardGrid from './main/card_grid';

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const App = () => (
  <div>
    <Gnav />
    <Login />
    <CardGrid />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

