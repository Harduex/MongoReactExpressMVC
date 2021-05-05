import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


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