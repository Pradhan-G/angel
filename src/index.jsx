import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css';
import Loader from './LoaderScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <Loader />     */}
    <App />
    </>
  </React.StrictMode>
);