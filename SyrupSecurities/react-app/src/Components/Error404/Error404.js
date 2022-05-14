import React from 'react'
import "./styles/Error404Styles.css"
import errorImg from "../../img/error.png"
import { useHistory } from 'react-router-dom'

const Error404 = () => {

    const history = useHistory()

    const toHome = () => {
        history.push("/")
    }

    return (
        <>
            <div id="notfound">
                <div className="text-center pb-5" id="bgNf">
                    <img src={errorImg} alt="not found" className="" />
                    <h2 className="text-white">404 - Page non trouvée</h2>
                    <p className="text-dark font-weight-bold">La page cherchée n'existe pas ou est en panne.</p>
                    <button className="button404 bg-dark" onClick={() => toHome()}>Retour à l'accueil</button>
                </div>
            </div>

        </>
    )
}

export default Error404