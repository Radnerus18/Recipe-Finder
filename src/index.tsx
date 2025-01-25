import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Leftpanel from './components/leftpanel.tsx';
import reportWebVitals from './reportWebVitals.ts';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App/>
    </React.StrictMode>
  </Provider>
);


