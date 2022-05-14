import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import noImage from '../../../img/hmm.png'

const ProductList = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }
        getProducts()
    }, [])

    const fetchProducts = async () => {
        const res = await fetch(`http://localhost:8888/product/get-all/`)
        return await res.json()
    }

    const deleteRequest = async (productID) => {
        const result = await fetch('http://localhost:8888/product/delete/' + productID,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
        return await result.json()
    }

    const deleteProduct = (e, productID) => {
        e.preventDefault()
        if (window.confirm("Voulez-vous supprimer ce produit")) {
            deleteRequest(productID)
                .then((res) => res === true ? deleteSuccess() : window.confirm("Suppression échouée"))
        }else{
            return;
        }
    }

    const deleteSuccess = () => {
        if (window.confirm("Suppression avec succès")) {
            window.location.reload();
        }
    }

    const toModify = (e, productId) => {
        e.preventDefault()
        history.push("/product-modify/"+productId)
    }

    const toAdmin = () => {
        history.push("/admin")
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-12 col-md-9">
                <Link className="btn btn-primary" to="#" onClick={toAdmin}>Retour</Link>
                <h1 className="text-center">Liste des clients</h1>
                <div className="table-responsive">
                    <table className="table mt-5 text-center">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nom</th>
                                <th scope="col">Déscription</th>
                                <th scope="col">Prix par unité</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">Modifier</th>
                                <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products
                                    .map((product) =>
                                    (
                                        <tr key={product.id}>
                                            <th scope="row">{(product.images === undefined || product.images === null || product.images === "") ?
                                                <img src={noImage} alt="not found" className="img-thumbnail" width={150} height={150} /> : product.images[0]}</th>
                                            <th scope="row">{product.name}</th>
                                            <th scope="row">{product.description}</th>
                                            <th scope="row">{product.price}$</th>
                                            <th scope="row">{product.quantity}</th>
                                            <th scope="row"><button className="btn btn-warning" onClick={(e) => toModify(e, product.id)}>Modifier</button></th>
                                            <th scope="row"><button className="btn btn-danger" onClick={(e) => deleteProduct(e, product.id)}>Supprimer</button></th>
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

export default ProductList
