import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import noImage from '../../img/hmm.png'


const Cart = () => {
    const history = useHistory()
    const [cart, setCart] = useState({ id: "", cartProductMap: "", customer: "" })

    let { id } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const cartFromServer = await fetchCart()
            setCart(cartFromServer)
            console.log(cartFromServer)
        }
        getProducts()
    }, [])

    const fetchCart = async () => {
        const res = await fetch(`http://localhost:8888/cart/` + id)
        return await res.json()
    }

    const toCustomerProfile = () => {
        console.log(id)
        history.push("/customer/" + id)
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center display-4 my-5">
                    Mon panier
                </h1>
                <div className="container-fluid mt-5 col-sm-12 col-md-9">
                    <Link className="btn btn-primary" to="#" onClick={toCustomerProfile}>Retour</Link>
                    <div className="table-responsive">
                        {cart.cartProductMap.length > 0 ?
                            <table className="table mt-5 text-center">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Déscription</th>
                                        <th scope="col">Prix par unité</th>
                                        <th scope="col">Quantité</th>
                                        <th scope="col">Mettre à jour la quantité</th>
                                        <th scope="col">Retirer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.cartProductMap
                                            .map((product) =>
                                            (
                                                <tr key={product.id}>
                                                    <th scope="row">
                                                        <img src={(product.imageUrl === undefined || product.imageUrl === null || product.imageUrl === "") ? noImage : product.imageUrl} alt="not found" className="img-thumbnail" width={150} height={150} />
                                                    </th>
                                                    <th scope="row">{product.name}</th>
                                                    <th scope="row">{product.description}</th>
                                                    <th scope="row">{product.price}$</th>
                                                    <th scope="row">{product.quantity}</th>
                                                    <th scope="row"><button className="btn btn-warning" >Mettre à jour</button></th>
                                                    <th scope="row"><button className="btn btn-danger" >Retirer</button></th>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                            : 
                                    <h2 className="text-center font-weight-normal py-5 my-5">
                                        Vous n'avez pas de produit dans votre panier
                                    </h2>
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart