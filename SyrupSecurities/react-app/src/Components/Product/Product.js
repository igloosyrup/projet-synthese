import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Product = () => {
    const history = useHistory()
    const [product, setProduct] = useState({})

    let { id } = useParams()

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

    return (
        <div>
            <Navbar />
            <div className="container-fluid my-5 col-sm-6">
                <h1 className="text-center display-4">Produit: {product.name} </h1>
                <img className="text-center my-3 img-thumbnail" src={product.imageUrl} alt="productImage" height="350px" />
                <form className="mt-5">
                    <div className="form-group">
                        <label htmlFor="price">Prix du produit:</label>
                        <input type="text" className="form-control" id="price" name="price" placeholder={product.price+"$"} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantité de produit disponible:</label>
                        <input type="text" className="form-control" id="quantity" name="quantity" placeholder={product.quantity} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descriptioin du produit:</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder={product.description} readOnly />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
