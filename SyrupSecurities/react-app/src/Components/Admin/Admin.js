import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const Admin = () => {
    const history = useHistory()

    const toAddProduct = () => {
        history.push("/add-product")
    }

    const toAdminProductList = () => {
        history.push("/admin-product-list")
    }

    const toCustomerList = () => {
        history.push("/customer-list")
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-6">
                <h1 className="text-center">Administrateur</h1>
                <ul className="list-group mt-5">
                    <li className="list-group-item"><Link to="#" onClick={toAddProduct}>Ajout d'un nouveau produit</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={toAdminProductList}>Voir la liste des produits</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={toCustomerList}>Voir la liste de clients</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Admin
