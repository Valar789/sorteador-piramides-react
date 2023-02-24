import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Welcome from './routes/Welcome';
import DataTable from './routes/DataTable';
import Sorteador from './routes/Board'
import Templates from './routes/Templates';
import Print from './routes/Print';


//Rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/data',
    element: <DataTable/>
  },
  {
    path: '/board',
    element: <Sorteador/>
  },
  {
    path: '/print',
    element: <Print/>
  },
  {
    path: '/templates',
    element: <Templates/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

