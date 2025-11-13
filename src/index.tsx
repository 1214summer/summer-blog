import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store/index'
import App from './App'
import React from 'react';
import 'normalize.css';
import '@/assets/css/index.less';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
