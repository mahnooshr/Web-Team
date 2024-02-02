import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Gnav from './components/gnav';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/cart';
import About from './pages/about';
import NoPage from './pages/nopage';

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <NoPage />
        }, {
            path: "/about",
            element: <About />
        }, {
            path: "/contact",
            element: <Contact />
        }, {
            path: "/cart",
            element: <Cart />
        }, 
    ])
    return (
        <div className='app'>
            <Gnav />
            <RouterProvider router={router} />
        </div>
    );
    }