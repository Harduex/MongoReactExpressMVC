import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from "axios";

// Pages
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


async function fetchUser() {
  const { data } = await axios.get(`/user`);
  return data;
}

function App() {
  const { data, status, refetch } = useQuery('user', fetchUser);

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Home user={data} refetch={refetch} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
