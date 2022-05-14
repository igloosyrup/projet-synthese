import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./styles/HomeStyles.css"
import appbg from "../../img/nt_virus_bg.png"

const Home = () => {
    return (
        <div id="home-bg">
            <Navbar />
            <h1 className="text-white text-center display-4 mt-5 mb-5 py-3" id="title-bg">Bienvenue à Syrup Securities Solutions</h1>
        </div>
    )
}

export default Home
