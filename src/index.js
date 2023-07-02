import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './pages/page-1/page-1.tsx';
import Page2 from './pages/page-2/page-2.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/page1',
      element: <Page1/>
    },
    {
      path: '/page2',
      element: <Page2/>
    },
], {
});

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);