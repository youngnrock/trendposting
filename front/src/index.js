import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootContainer = document.getElementById('root');
if (rootContainer != null) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
reportWebVitals();