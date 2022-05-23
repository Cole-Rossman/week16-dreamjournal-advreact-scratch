import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntriesProvider } from './context/EntriesContext';
import { BrowserRouter } from 'react-router-dom';

render(
  <React.StrictMode>
    <BrowserRouter>
    <EntriesProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </EntriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
