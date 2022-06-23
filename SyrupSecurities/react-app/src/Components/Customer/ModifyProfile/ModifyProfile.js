import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const ModifyProfile = () => {
    const history = useHistory()
    const [customer, setCustomer] = useState({
        firstname: "", lastname: "", email: "", phoneNbr: "",
        strAddr: "", aptNumber: "", postalCode: "", country: "", city: ""
    })

    const [tmpCustomer, setTmpCustomer] = useState({
        firstname: "", lastname: "", email: "", phoneNbr: "",
        strAddr: "", aptNumber: "", postalCode: "", country: "", city: ""
    })

    let { id } = useParams()

    useEffect(() => {
        const getCustomer = async () => {
            const customerFromServer = await fetchCustomer()
            setCustomer(customerFromServer)
        }
        getCustomer()
    }, [])

    const fetchCustomer = async () => {
        const res = await fetch(`http://localhost:8888/customer/` + id)
        return await res.json()
    }

    const validateInput = (e) => {
        e.preventDefault()
        if (tmpCustomer[e.target.name] !== customer[e.target.name]) {
            console.log("true")
            setTmpCustomer({ ...tmpCustomer, [e.target.name]: e.target.value })
        } else {
            setTmpCustomer({ ...tmpCustomer, [e.target.name]: "" })
        }
    }

    const submit = (e) => {
        e.preventDefault()
        Object.keys(tmpCustomer).map(i => (tmpCustomer[i] !== customer[i] && tmpCustomer[i] !== "") ?customer[i] = tmpCustomer[i] : "")
        saveModifications(customer)
            .then((res) => res.id !== null ? updateSuccess() : window.confirm("La mise à jour du produit a été échoué"))
    }

    const updateSuccess = () => {
        window.confirm("La modification a été effectuée eavec succès")
        window.location.reload()
    }

    const saveModifications = async (customer) => {
        const result = await fetch('http://localhost:8888/customer/update',
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
        return await result.json()
    }

    const toCustomerProfile = () => {
        console.log(id)
        history.push("/customer/" + id)
    }

    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="display-4 text-center my-4">Modification de mes informations</h1>
                <div className="container col-sm-12 col-md-9 col-lg-7">
                    <form onSubmit={submit}>
                        <div className="row ml-auto">
                            <Link className="m-auto btn btn-dark" to="#" onClick={() => toCustomerProfile()}>
                                Retour
                            </Link>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstnameCustomer" className=""><i className="fas fa-user"></i>Prénom: </label>
                            <input type="text" className="form-control" id="firstnameCustomer" name="firstname" placeholder={customer.firstname} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastnameCustomer" className=""><i className="fas fa-user"></i>Nom: </label>
                            <input type="text" className="form-control" id="lastnameCustomer" name="lastname" placeholder={customer.lastname} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailCustomer">Adresse courriel</label>
                            <input type="email" className="form-control" id="emailCustomer" name="email" placeholder={customer.email} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNbrCustomer" className=""><i className="fas fa-user"></i>Numéro de téléphone: </label>
                            <input type="text" className="form-control" id="phoneNbrCustomer" name="phoneNbr" placeholder={customer.phoneNbr} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="strAddrCustomer" className=""><i className="fas fa-user"></i>Rue: </label>
                            <input type="text" className="form-control" id="strAddrCustomer" name="strAddr" placeholder={customer.strAddr} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="aptNumberCustomer" className=""><i className="fas fa-user"></i>Numéro d'apartement: </label>
                            <input type="text" className="form-control" id="aptNumberCustomer" name="aptNumber" placeholder={customer.aptNumber} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCodeCustomer" className=""><i className="fas fa-user"></i>Code Postal: </label>
                            <input type="text" className="form-control" id="postalCodeCustomer" name="postalCode" placeholder={customer.postalCode} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="countryCustomer" className=""><i className="fas fa-user"></i>Pays: </label>
                            <input type="text" className="form-control" id="countryCustomer" name="country" placeholder={customer.country} onChange={validateInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cityCustomer" className=""><i className="fas fa-user"></i>Ville: </label>
                            <input type="text" className="form-control" id="cityCustomer" name="city" placeholder={customer.city} onChange={validateInput} />
                        </div>
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModifyProfile