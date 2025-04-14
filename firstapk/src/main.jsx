import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the App component
import './index.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
