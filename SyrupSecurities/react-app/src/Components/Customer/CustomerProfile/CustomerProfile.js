import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const CustomerProfile = () => {
    const history = useHistory()
    const [customer, setCustomer] = useState(null)

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

    const toModifyProfile = (id) => {
        history.push("/customer/modify/" + id)
    }

    const toMyCart = (id) => {
        history.push("/cart/" + id)
    }

    return (
        <>
            {customer !== null ?
                <div>
                    <Navbar customerProp={customer} />
                    <div className="container my-5">
                        <h1 className="display-4 text-center my-4">Bienvenue {customer.firstname} {customer.lastname}</h1>
                        <div className="container col-sm-12 col-md-9 col-lg-7">
                            <form>
                                <div className="row ml-auto my-5">
                                    <Link className="m-auto btn btn-dark" to="#" onClick={() => toModifyProfile(id)}>
                                        Modifier mes informations
                                    </Link>
                                    <Link className="m-auto btn btn-dark" to="#" onClick={() => toMyCart(id)}>
                                        Mon panier
                                    </Link>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstnameCustomer" className=""><i className="fas fa-user"></i> Prénom: </label>
                                    <input type="text" className="form-control" id="firstnameCustomer" name="firstname" placeholder={customer.firstname} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastnameCustomer" className=""><i className="fas fa-user"></i>  Nom: </label>
                                    <input type="text" className="form-control" id="lastnameCustomer" name="lastname" placeholder={customer.lastname} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailCustomer">Adresse courriel</label>
                                    <input type="email" className="form-control" id="emailCustomer" name="email" placeholder={customer.email} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNbrCustomer" className=""><i className="fas fa-user"></i>  Numéro de téléphone: </label>
                                    <input type="text" className="form-control" id="phoneNbrCustomer" name="phoneNbr" placeholder={customer.phoneNbr} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="strAddrCustomer" className=""><i className="fas fa-user"></i>  Rue: </label>
                                    <input type="text" className="form-control" id="strAddrCustomer" name="strAddr" placeholder={customer.strAddr} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="aptNumberCustomer" className=""><i className="fas fa-user"></i>  Numéro d'apartement: </label>
                                    <input type="text" className="form-control" id="aptNumberCustomer" name="aptNumber" placeholder={customer.aptNumber} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="postalCodeCustomer" className=""><i className="fas fa-user"></i>  Code Postal: </label>
                                    <input type="text" className="form-control" id="postalCodeCustomer" name="postalCode" placeholder={customer.postalCode} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="countryCustomer" className=""><i className="fas fa-user"></i>  Pays: </label>
                                    <input type="text" className="form-control" id="countryCustomer" name="country" placeholder={customer.country} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cityCustomer" className=""><i className="fas fa-user"></i>  Ville: </label>
                                    <input type="text" className="form-control" id="cityCustomer" name="city" placeholder={customer.city} readOnly />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}

export default CustomerProfile