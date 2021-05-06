import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/style.scss';

import axios from "axios";
import { QueryClient, QueryClientProvider } from 'react-query';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

const queryClient = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);