import React from 'react'
import Navbar from '../Navbar/Navbar'

const Vpn = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="text-center display-4 mt-5">C'est quoi un V.P.N?</h1>
                <h2 className="text-center my-5 font-weight-normal">Virtual Private Network (Réseau privé virtuel)</h2>
                <div className="container text-center my-5">
                    <img src="https://www.cyberark.com/wp-content/uploads/2020/09/VPN-hero-image-resized.jpg" alt="vpn" height="500px" />
                </div>
                <div className="container mx-auto my-5 col-sm-9 col-md-8 font-italic">
                    "VPN est l’abréviation de « virtual private network » (réseau privé virtuel)
                    et désigne un service qui protège votre connexion Internet et votre confidentialité en ligne. Il crée un tunnel chiffré pour vos données, protège votre identité en ligne en masquant votre adresse IP
                    et vous permet d'utiliser les points d'accès Wi-Fi publics en toute sécurité."
                    <br />
                    <span className="float-right">
                        -NordVPN
                    </span>
                </div>
                <hr />
                <div className="container col-sm-10 col-md-9">
                    <div className="container font-weight-italic my-5">
                        <h2 className="font-weight-normal text-center">
                            Comment fonctionne un VPN?
                        </h2>
                        <div className="container font-italic my-5">
                            Le tunnel VPN est créé en authentifiant d'abord votre client (un ordinateur, un smartphone ou une tablette) auprès d'un serveur VPN. Le serveur utilise ensuite l'un des nombreux protocoles de chiffrement pour s'assurer que personne ne puisse surveiller les informations qui circulent
                            entre vous et votre destination en ligne.
                        </div>
                        <div className="container font-italic my-5">
                            N'oubliez pas qu'avant d'être envoyées et reçues sur Internet, les données doivent d'abord être divisées en paquets.
                            Pour garantir que chaque paquet de données reste sécurisé, un service VPN l'enveloppe dans un paquet extérieur, qui est ensuite chiffré par un processus appelé encapsulation.
                        </div>
                        <div className="container font-italic mt-5">
                            Ce paquet extérieur maintient la sécurité des données pendant le transfert, et il constitue l'élément central du tunnel VPN. Lorsque les données arrivent sur le serveur VPN,
                            le paquet extérieur est retiré pour accéder aux données qu'il contient, ce qui nécessite un processus de déchiffrement.
                        </div>
                        <div className="float-right font-italic my-2">-NordVPN</div>
                    </div>
                    <div className="container my-5 font-italic">
                        Pour plus d'informations consulter: <a href="https://nordvpn.com/fr/what-is-a-vpn/" target="_blank">NordVPN</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vpn