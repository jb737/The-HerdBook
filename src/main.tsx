import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import router from './navigation/Router.tsx';
import UserProvider from './contexts/userContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router = {router} />
    </UserProvider>
  </React.StrictMode>,
);
