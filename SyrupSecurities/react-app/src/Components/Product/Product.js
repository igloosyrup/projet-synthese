import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const Product = () => {
    const history = useHistory()
    // const [credentials, setcredentials] = useState({ username: "", pwd: "" })

    const submit = (e) => {
        e.preventDefault()
        //validation
    }

    const toAddProduct = () =>{
        history.push("/addProduct")
    }
    
    const toProductList = () =>{
        history.push("productlist")
    }
    
    const toCustomerList = () =>{
        history.push("/customerlist")
    }


    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-6">
                <h1 className="text-center">Produit </h1>
                <ul className="list-group mt-5">
                    <li className="list-group-item"><Link to="#" onClick={toAddProduct}>Ajout d'un nouveau produit</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={toProductList}>Voir la liste des produits</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={toCustomerList}>Voir la liste de clients</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Product
