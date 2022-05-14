import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const CustomerList = () => {
    const history = useHistory()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const getCustomers = async () => {
            const customersFromServer = await fetchCustomers()
            console.log(customersFromServer)
            console.log(customersFromServer[0].id)
            setCustomers(customersFromServer)
        }
        getCustomers()
    }, [])

    const fetchCustomers = async () => {
        const res = await fetch(`http://localhost:8888/customer/get-all/`)
        return await res.json()
    }

    const toAdminHome = (e) => {
        e.preventDefault()
        history.push("/admin")
    }


    const deleteUser = async (customerID) => {
        const result = await fetch('http://localhost:8888/customer/delete/' + customerID,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
        return await result.json()
    }

    const deleteCustomer = (e, customerID) => {
        e.preventDefault()
        if (window.confirm("Voulez-vous supprimer ce client")) {
            deleteUser(customerID)
                .then((res) => res === true ? deleteSuccess() : window.confirm("Suppression échouée"))
        }else{
            return;
        }
        const deleteSuccess = () =>{
            if (window.confirm("Suppression avec succès")) {
                window.location.reload();
            }
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-12 col-md-9">
                <Link className="btn btn-primary" to="#" onClick={toAdminHome}>Retour</Link>
                <h1 className="text-center">Liste des clients</h1>
                <div className="table-responsive">

                    <table className="table mt-5 text-center ">
                        <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                                <th scope="col">Courriel</th>
                                <th scope="col">Numéro de téléphone</th>
                                <th scope="col">Numéro d'apartement</th>
                                <th scope="col">Adresse rue</th>
                                <th scope="col">Code Postal</th>
                                <th scope="col">Ville</th>
                                <th scope="col">Pays</th>
                                <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers
                                    .map((customer) =>
                                    (
                                        <tr key={customer.id}>
                                            <th scope="row">{customer.firstname}</th>
                                            <th scope="row">{customer.lastname}</th>
                                            <th scope="row">{customer.email}</th>
                                            <th scope="row">{customer.phoneNbr}</th>
                                            <th scope="row">{customer.aptNumber !== null ? customer.aptNumber : "Aucun"}</th>
                                            <th scope="row">{customer.strAddr}</th>
                                            <th scope="row">{customer.postalCode}</th>
                                            <th scope="row">{customer.city}</th>
                                            <th scope="row">{customer.country}</th>
                                            <th scope="row"><button className="btn btn-danger" onClick={(e) => deleteCustomer(e, customer.id)}>Supprimer</button></th>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerList
