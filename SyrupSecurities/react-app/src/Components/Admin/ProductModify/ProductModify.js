import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'

const ProductModify = () => {
    let { id } = useParams()
    const history = useHistory()
    const [product, setProduct] = useState({ id: "", name: "", description: "", price: "", quantity: "", images: [] })

    useEffect(() => {
        const getProduct = async () => {
            const productFromServer = await fetchProduct()
            setProduct(productFromServer)
        }
        getProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetch(`http://localhost:8888/product/get/` + id)
        return await res.json()
    }

    const saveProduct = async () => {
        const result = await fetch('http://localhost:8888/product/update',
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
        return await result.json()
    }


    const submit = (e) => {
        e.preventDefault()
        saveProduct()
            .then((res) => res.id !== null ? updateSuccess() : window.confirm("La mise à jour du produit a été échoué"))
    }

    const updateSuccess = () => {
        window.confirm("La mise à jour du produit a été effectuée avec succès")
        window.location.reload()
    }

    const validateInput = (e) => {
        e.preventDefault();
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const toAdminProductList = () => {
        history.push("/admin-product-list")
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-center mt-5 mb-5">
                Modification du produit {product.name}
            </h1>
            <div className="container">
                <Link className="btn btn-primary" to="#" onClick={toAdminProductList}>Retour</Link>
                <form onSubmit={submit} className="mt-5">
                    <div className="form-group">
                        <label htmlFor="nameProduct">Nom du produit</label>
                        <input type="text" className="form-control" id="nameProduct" name="name" placeholder="Entrez le nom du produit" onChange={validateInput} value={product.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descProduct">Description du produit</label>
                        <textarea rows="4" col="50" className="form-control" id="descProduct" name="description" placeholder="Entrez la description du produit" onChange={validateInput} value={product.description} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceProduct">Prix du produit</label>
                        <input type="number" className="form-control" id="priceProduct" name="price" placeholder="Entrez le prix du produit" onChange={validateInput} value={product.price} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantityProduct">Quantité du produit</label>
                        <input type="number" className="form-control" id="quantityProduct" name="quantity" placeholder="Entrez la quantité du produit" onChange={validateInput} value={product.quantity} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ImageProduct">Image(s) du produit</label>
                        <div className="row mx-auto">
                            <button className="btn btn-dark" onClick={(e) => e.preventDefault()}>Ajouter une image</button>
                            <input type="text" className="form-control ml-4 col-sm-4" id="ImageProduct" name="images" placeholder="Ajouter une image au produit" onChange={validateInput} />
                        </div>
                    </div>

                    <div className="row ml-auto">
                        <button type="submit" className="btn btn-primary">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ProductModify