import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouters } from './router/router';
import { AppLayout } from './layout/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout>
    <AppRouters/>

    </AppLayout>
  </React.StrictMode>
);
