import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const history = useHistory()
    // const [credentials, setcredentials] = useState({ username: "", pwd: "" })

    const submit = (e) => {
        e.preventDefault()
        //validation
    }

    const toAddProduct = () =>{
        history.push("/addProduct")
    }
    
    const toAdmin = () =>{
        history.push("/admin")
    }
    
    const toCustomerList = () =>{
        history.push("/customerlist")
    }


    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-6">
                <div className="mb-3">
                    <Link className="btn btn-primary" to="#" onClick={() => toAdmin()}>
                        Retour
                    </Link>
                </div>
                <h1 className="text-center">Liste des produits</h1>
            </div>
        </div>
    )
}

export default ProductList
