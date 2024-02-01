import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gnav from './main/gnav';

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
    <h1>Hello, world!</h1>
    {myElement}
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

