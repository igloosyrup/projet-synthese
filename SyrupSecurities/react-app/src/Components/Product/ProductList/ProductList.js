import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import noImage from '../../../img/hmm.png'


const ProductList = () => {
    const history = useHistory()
    let { id } = useParams()

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

    const toProduct = (productID) => {
        history.push("/product/" + productID)
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-5 col-sm-12 col-md-9">
                <h1 className="text-center display-4">Liste des produits</h1>
                <div className="table-responsive">
                    <table className="table mt-5 text-center">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nom</th>
                                <th scope="col">Déscription</th>
                                <th scope="col">Prix par unité</th>
                                <th scope="col">Quantité</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products
                                    .map((product) =>
                                    (
                                        <tr key={product.id}>
                                            <th scope="row">
                                                <img src={(product.imageUrl === undefined || product.imageUrl === null || product.imageUrl === "") ? noImage : product.imageUrl} alt="not found" className="img-thumbnail" width={150} height={150} />
                                            </th>
                                            <th scope="row">
                                                <Link className='text-dark' to="#" onClick={() => toProduct(product.id)}>
                                                    {product.name}
                                                </Link>
                                            </th>
                                            <th scope="row">{product.description}</th>
                                            <th scope="row">{product.price}$</th>
                                            <th scope="row">{product.quantity}</th>
                                            <th scope="row"><button className="btn btn-warning font-weight-bold" >Ajouter</button></th>
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
