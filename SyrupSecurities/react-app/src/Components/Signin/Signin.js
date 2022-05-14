import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const Signin = () => {
    const history = useHistory()
    const [credentials, setcredentials] = useState({ email: "", pwd: "" })

    const customerSignIn = async (email, pwd) => {
        const res = await fetch(`http://localhost:8888/customer/${email}/${pwd}`)
        return await res.json()
    }

    const submit = (e) => {
        e.preventDefault()
        customerSignIn(credentials.email, credentials.pwd)
            .then((res) => res.id != null ? toHome(res.id) : window.alert("Connexion invalide!"))
    }

    const toHome = (id) => {
        alert("Connexion avec succès!")
        history.push("/customer/" + id)
    }

    const toSignUp = () => {
        history.push("/signup")
    }

    const toAdminSignIn = () => {
        history.push("/admin-signin")
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5 col-sm-4">
                <h2 className="mb-5 text-center">Se connecter</h2>

                <div className="mb-3">
                    <Link className="m-y text-primary" to="#" onClick={() => toAdminSignIn()}>
                        Administrateur? Cliquez ici
                    </Link>

                </div>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="emailCustomer">Adresse courriel</label>
                        <input type="email" className="form-control" id="emailCustomer" name="email" placeholder="Entrez votre courriel" onChange={(e) => setcredentials({ ...credentials, email: e.target.value })} />
                        <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre courriel avec quelqu'un d'autre..</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwdCustomer">Mot de passe</label>
                        <input type="password" className="form-control" id="pwdCustomer" name="pwd" placeholder="Entrez votre mot de passe" onChange={(e) => setcredentials({ ...credentials, pwd: e.target.value })} />
                    </div>
                    <div className="row ml-auto">
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                        <Link className="m-auto text-primary" to="#" onClick={() => toSignUp()}>
                            Pas de compte? Inscrivez-vous
                        </Link>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signin
