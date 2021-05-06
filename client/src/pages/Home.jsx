import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from '../styles/modules/Home.module.scss';


function Home({ refetch, user }) {

    useEffect(() => {
        refetch();
    }, [refetch])

    if (user?.fullName) {
        return (
            <div className={styles.home}>
                <h1>Hello, {user?.fullName}!</h1>
            </div>
        )
    }

    return (
        <div className={styles.home}>
            <h1>You must <Link to="/login">log in</Link> first!</h1>
        </div>
    )
}


export default Home;
