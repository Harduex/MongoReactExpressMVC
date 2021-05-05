import React from 'react';


function Error(props) {
  return (
    <>
      <h1>{props.message}</h1>
      <h2>{props.error.status}</h2>
    </>
  )
}


export default Error;