import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const AdminSignIn = () => {
    const history = useHistory()
    const [credentials, setcredentials] = useState({ username: "", pwd: "" })
    const adminSignIn = async (username, pwd) => {
        const res = await fetch(`http://localhost:8888/admin/${username}/${pwd}`)
        return await res.json()
    }

    const submit = (e) => {
        e.preventDefault()
        adminSignIn(credentials.username, credentials.pwd)
            .then((res) => res === true ? toHome() : window.alert("Connexion invalide!"))
    }

    const toHome = () => {
        window.alert("Connexion avec succès!")
        history.push("/admin")
    }

    const toSignIn = () => {
        history.push("/signin")
    }

    return (
        <div>
            <Navbar />
            <div className="container my-5 col-sm-4">
                <h2 className="mb-5 text-center">Se connecter</h2>
                <div className="mb-3">
                <Link className="m-y text-primary" to="#" onClick={() => toSignIn()}>
                    Pas un Administrateur? Cliquez ici
                </Link>
                </div>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="usernameAdmin">Nom d'utilisateur</label>
                        <input type="username" className="form-control" id="usernameAdmin" name="username" placeholder="Entrez votre nom d'utilisateur" onChange={(e) => setcredentials({ ...credentials, username: e.target.value })} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwdAdmin">Mot de passe</label>
                        <input type="password" className="form-control" id="pwdAdmin" name="pwd" placeholder="Entrez votre mot de passe" onChange={(e) => setcredentials({ ...credentials, pwd: e.target.value })} required/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminSignIn
