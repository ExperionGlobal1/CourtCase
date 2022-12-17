import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayout from './apps/auth/AuthLayout';
import Login from './apps/auth/Login';
import Register from './apps/auth/Register';

const routes = createBrowserRouter([
	{path: "/auth", element: <AuthLayout/> ,children: [
		{path: "/auth/login", element: <Login/>},
		{path: "/auth/register", element: <Register/>},
	]},
	{path: "/about", element: <p>about</p>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
