import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Universal lock: enforce light theme regardless of system dark/light mode
if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('dark');
  document.documentElement.style.setProperty('color-scheme', 'only light', 'important');
  document.documentElement.style.setProperty('forced-color-adjust', 'none', 'important');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
