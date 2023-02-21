import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import {Provider} from 'react'
import {createStore} from 'react-redux'



const store=createStore()

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
