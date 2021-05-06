import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/style.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);