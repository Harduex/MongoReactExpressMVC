import React from 'react';
import Layout from './layouts/layout';


function About(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.text}</h1>
    </Layout>
  )
}


export default About;
