import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Ludo from './components/Ludo/Ludo';
import Home from './components/Home/Home';
import Token from './components/Token/Token';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/Token' element={<Token />} />
      <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='Ludo/:param' element={<Ludo />} />
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
