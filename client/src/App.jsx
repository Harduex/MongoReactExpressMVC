import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

import Layout from './layouts/layout';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/home`);
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    fetchData();
  }, [])

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home data={data} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
