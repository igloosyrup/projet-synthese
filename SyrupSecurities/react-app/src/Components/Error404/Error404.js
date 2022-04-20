import React from 'react'
import "./styles/Error404Styles.css"
import hmm from "../../img/hmm.png"
import { useHistory } from 'react-router-dom'

const Error404 = () => {

    const history = useHistory()

    const toHome = () => {
        history.push("/")
    }

    return (
        <>
            <div id="notfound">
                <div className="text-center">
                    <img src={hmm} alt="not found" className="" />
                    <h2>404 - Page non trouvée</h2>
                    <p>La page cherchée n'existe pas ou est en panne.</p>
                    <button className="btn btn-link button404" onClick={() => toHome()}>Retour à l'accueil</button>
                </div>
            </div>

        </>
    )
}

export default Error404