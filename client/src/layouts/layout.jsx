import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Layout(props) {
  return (
    <>
      <Header title={props?.title} />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </>
  )
}


export default Layout;