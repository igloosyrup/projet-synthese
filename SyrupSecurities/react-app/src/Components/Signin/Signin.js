import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const Signin = () => {
    const history = useHistory()

    const toSignUp = () => {
        history.push("/signup")
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5 col-sm-4">
                <h2 className="mb-5 text-center">Se connecter</h2>
                <form>
                <div className="form-group">
                        <label for="emailCustomer">Adresse courriel</label>
                        <input type="email" className="form-control" id="emailCustomer" name="email" placeholder="Entrez votre courriel" />
                        <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre courriel avec quelqu'un d'autre..</small>
                    </div>
                    <div className="form-group">
                        <label for="pwdCustomer">Mot de passe</label>
                        <input type="password" className="form-control" id="pwdCustomer" name="pwd" placeholder="Entrez votre mot de passe" />
                    </div>
                    <div className="row ml-auto">
                    <button type="submit" className="btn btn-primary">Soumettre</button>
                    <Link className="nav-link text-primary" onClick={() => toSignUp()}>
                        Pas de compte? Inscrivez-vous
                    </Link>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signin
