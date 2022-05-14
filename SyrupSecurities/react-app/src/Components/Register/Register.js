import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../Navbar/Navbar'

const Register = () => {
    const history = useHistory()

    const [customer, setCustomer] = useState({
        firstname: "", lastname: "", email: "", pwd: "",
        phoneNbr: "", strAddr:"", aptNumber: "", postalCode: "", country: "", city: ""
    })

    const registerCustomer = async (customer) => {
        const result = await fetch('http://localhost:8888/customer/register',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
        return await result.json()
    }

    const toSignIn = () => {
        history.push("/signin")
    }

    const registerSuccess = () =>{
        window.confirm("Inscription avec succès!")
        toSignIn()
    }

    const validateInput = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(customer.aptNumber === ""){
            setCustomer({...customer, aptNumber: null})
            customer.aptNumber = null
        }
        console.log(customer)
        registerCustomer(customer)
            .then((res) => res.id != null ? registerSuccess() : window.alert("Données invalides!"))
    }

    return (
        <div className="mb-5">
            <Navbar />
            <div className="container mt-5 col-sm-4">

                <h2 className="mb-5 text-center">S'enregistrer</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstnameCustomer" className=""><i className="fas fa-user"></i> Prénom: </label>
                        <input type="text" className="form-control" id="firstnameCustomer" name="firstname" placeholder="Entrez votre prénom" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastnameCustomer" className=""><i className="fas fa-user"></i>  Nom: </label>
                        <input type="text" className="form-control" id="lastnameCustomer" name="lastname" placeholder="Entrez votre nom" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailCustomer">Adresse courriel</label>
                        <input type="email" className="form-control" id="emailCustomer" name="email" placeholder="Entrez votre courriel" onChange={validateInput} required />
                        <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre courriel avec quelqu'un d'autre..</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwdCustomer">Mot de passe</label>
                        <input type="password" className="form-control" id="pwdCustomer" name="pwd" placeholder="Entrez votre mot de passe" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNbrCustomer" className=""><i className="fas fa-user"></i>  Numéro de téléphone: </label>
                        <input type="text" className="form-control" id="phoneNbrCustomer" name="phoneNbr" placeholder="Entrez votre numéro de téléphone" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="strAddrCustomer" className=""><i className="fas fa-user"></i>  Rue: </label>
                        <input type="text" className="form-control" id="strAddrCustomer" name="strAddr" placeholder="Entrez la rue où vous demeurez" onChange={validateInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aptNumberCustomer" className=""><i className="fas fa-user"></i>  Numéro d'apartement: </label>
                        <input type="text" className="form-control" id="aptNumberCustomer" name="aptNumber" placeholder="Entrez votre numéro d'apartement" onChange={validateInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCodeCustomer" className=""><i className="fas fa-user"></i>  Code Postal: </label>
                        <input type="text" className="form-control" id="postalCodeCustomer" name="postalCode" placeholder="Entrez le code postal où vous demeurez" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryCustomer" className=""><i className="fas fa-user"></i>  Pays: </label>
                        <input type="text" className="form-control" id="countryCustomer" name="country" placeholder="Entrez le pays où vous demeurez" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cityCustomer" className=""><i className="fas fa-user"></i>  Ville: </label>
                        <input type="text" className="form-control" id="cityCustomer" name="city" placeholder="Entrez la ville où vous demeurez" onChange={validateInput} required />
                    </div>
                    <div className="row ml-auto">
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                        <Link className="m-auto text-primary" to="#" onClick={() => toSignIn()}>
                            Vous avez un compte? Connectez-vous
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
