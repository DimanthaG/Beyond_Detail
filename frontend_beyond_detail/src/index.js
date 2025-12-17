import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './styles/scrollPerformance.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Register service worker for caching and offline support
if ('serviceWorker' in navigator) {
  if (process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
          console.log('SW unregistered to force update');
        })
        .catch((error) => {
          console.log('SW unregistration failed:', error);
        });
    });
  } else {
    // In development, unregister any existing service workers
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
