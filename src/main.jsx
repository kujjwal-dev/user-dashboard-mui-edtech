import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LoginPage from './LoginPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <BrowserRouter>
    <Suspense>
      {/* <App /> */}
      <LoginPage/>
    </Suspense>
  </BrowserRouter>
</HelmetProvider>
)
