import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const ProductAdd = () => {
    const history = useHistory()
    const [product, setProduct] = useState({ name: "", description: "", price: "", quantity: "", imageUrl: "" })

    const submit = (e) => {
        e.preventDefault()
        registerProduct(product)
            .then((res) => res.id !== null ? registerSuccess() : window.confirm("L'ajout est échoué"))
    }

    const registerProduct = async (product) => {
        const result = await fetch('http://localhost:8888/product/register',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
        return await result.json()
    }

    const registerSuccess = () => {
        window.confirm("Le produit a été ajouté avec succès")
        window.location.reload()
    }
    const validateInput = (e) => {
        e.preventDefault()
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const toAdmin = () => {
        history.push("/admin")
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
                <h1 className="text-center">Ajouter un nouveau produit</h1>
                <form onSubmit={submit} className="mt-5">
                    <div className="form-group">
                        <label htmlFor="nameProduct">Nom du produit</label>
                        <input type="text" className="form-control" id="nameProduct" name="name" placeholder="Entrez le nom du produit" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descProduct">Description du produit</label>
                        <textarea rows="4" col="50" className="form-control" id="descProduct" name="description" placeholder="Entrez la description du produit" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceProduct">Prix du produit</label>
                        <input type="number" className="form-control" id="priceProduct" name="price" placeholder="Entrez le prix du produit" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantityProduct">Quantité du produit</label>
                        <input type="number" className="form-control" id="quantityProduct" name="quantity" placeholder="Entrez la quantité du produit" onChange={validateInput} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ImageProduct">Image du produit</label>
                        <input type="text" className="form-control col-sm-4" id="ImageProduct" name="imageUrl" placeholder="Ajouter une imageUrl au produit" onChange={validateInput} />
                    </div>
                    <div className="row ml-auto">
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductAdd
