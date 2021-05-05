import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './layouts/layout';


function App() {
  const [data, setData] = useState({});
  const [login, setLogin] = useState(true);

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
    <Layout>
      {data?.authenticated === false ?
        <>
          {login ?
            <>
              <Login />
              <button class="btn btn-link p-0" onClick={() => setLogin(false)}>Sing up</button>
            </>
            :
            <>
              <Register />
              <button class="btn btn-link p-0" onClick={() => setLogin(true)}>Sing in</button>
            </>
          }
        </>
        :
        <>
          <h1>Hello, {data?.user}!</h1>
          <button onClick={async () => await fetch(`/auth/logout`)}>Logout</button>
        </>
      }
    </Layout>
  );
}

export default App;
