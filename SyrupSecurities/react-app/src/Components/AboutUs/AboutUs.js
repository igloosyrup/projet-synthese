import React from 'react'
import Navbar from '../Navbar/Navbar'
import IglooSyrup from "../../img/IglooSyrup.png"
const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="display-4 text-center">À propos de l'équipe</h1>
                <br />
                <h2 className="font-weight-normal text-center">Équipe IglooSyrup</h2>
                <div className="container text-center my-5">
                    <img className="mb-5" src={IglooSyrup} alt="IglooSyrup.png" height="350px" />
                    <br />
                    <span className="">
                        L'équipe d'IglooSyrup propose différents services et produits. Nous créons principalement des sites Web de panier d'achat.
                        Les sites Web de panier/d'achat et
                        les produits vendus sont principalement des produits liés à la sécurité
                        tels que les VPN et les antivirus.
                    </span>
                </div>
            </div>
        </>
    )
}

export default AboutUs