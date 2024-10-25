// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store'; // Import the Redux store
import App from './App'; // Your main App component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap the app with the Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
