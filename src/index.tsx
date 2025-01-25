import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import AuthPage from './auth.tsx';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
      
    </React.StrictMode>
  </Provider>
);


