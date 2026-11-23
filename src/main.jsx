import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { JourneyProvider } from './context/JourneyContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JourneyProvider>
      <App />
    </JourneyProvider>
  </StrictMode>,
);
