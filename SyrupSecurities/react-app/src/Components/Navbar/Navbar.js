import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Navbar = () => {
    const [customer, setCustomer] = useState({})
    const [display, setDisplay] = useState({ toDisplay: "sasd"})
    const history = useHistory()
    const location = useLocation()

    const toHome = () => {
        history.push("/home")
    }

    const toAntivirus = () => {
        history.push("/antivirus")
    }

    const toVpn = () => {
        history.push("/vpn")
    }

    const toProducts = () => {
        console.log(customer)
        history.push("/product-list", customer.id)
    }

    const toAboutUs = () => {
        history.push("/about-us")
    }

    const toContactUs = () => {
        history.push("/contact-us")
    }

    const toSignIn = () => {
        history.push("/signin")
    }

    const toProfile = () =>{
        history.push("/customer/"+customer.id)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button className="navbar-brand btn btn-link">
                <h4 className="text-light align-middle">
                    Syrup Securities
                </h4>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-light" onClick={() => toHome()}>Accueil </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-light" onClick={() => toAntivirus()}>Antivirus</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-light" onClick={() => toVpn()}>V.P.N</button>
                    </li>
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-light" onClick={() => toProducts()}>Tous les Produits</button>
                    </li>
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-light" onClick={() => toAboutUs()}>L'équipe</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-light" onClick={() => toContactUs()}>Nous joindre</button>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Link className="nav-link btn btn-link text-light" to="#" onClick={() => toSignIn()}>
                        Se connecter/S'inscrire
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
