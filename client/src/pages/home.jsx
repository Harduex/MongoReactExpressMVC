import React from 'react';


function Home(props) {

    return (
        <>
            { props?.data?.user &&
                <h1>Hello, {props?.data?.user}!</h1>
            }
        </>
    )
}


export default Home;
