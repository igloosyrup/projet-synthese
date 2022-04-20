import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../Navbar/Navbar'

const Register = () => {
    const history = useHistory()

    const [customer, setCustomer] = useState({
        firstname: "", lastname: "", email: "", pwd: "",
        phoneNumber: "", aptNumber: "", postalCode: "", country: "", city: ""
    })

    


    const toSignIn = () => {
        history.push("/signin")
    }

    const validateInput = () => {
        
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5 col-sm-4">

                <h2 className="mb-5 text-center">S'enregistrer</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstnameCustomer" className=""><i className="fas fa-user"></i> Prénom: </label>
                        {/* {error.firstname !== "" ? error.firstname : ""} */}
                        <input type="text" className="form-control" id="firstnameCustomer" name="firstname" placeholder="Entrez votre prénom" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastnameCustomer" className=""><i className="fas fa-user"></i>  Nom: </label>
                        {/* {error.lastname !== "" ? error.lastname : ""} */}
                        <input type="text" className="form-control" id="lastnameCustomer" name="lastname" placeholder="Entrez votre nom" onChange={validateInput} required />
                    </div>
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
                        <Link className="nav-link text-primary" onClick={() => toSignIn()}>
                            Vous avez un compte? Connectez-vous
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
