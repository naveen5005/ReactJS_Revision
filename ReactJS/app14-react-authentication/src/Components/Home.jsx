import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Home page.</h2>
            <Link to={"/products"}>Products</Link>
        </div>
    )
}

export default Home
