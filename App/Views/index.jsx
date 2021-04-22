import React from 'react';
import Layout from './layouts/layout';


function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>Hello {props.user}!</h1>
    </Layout>
  )
}


export default Index;
