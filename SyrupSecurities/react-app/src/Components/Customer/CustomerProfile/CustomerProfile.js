import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const CustomerProfile = () => {
    const history = useHistory()
    const [customer, setCustomer] = useState({
        firstname: "", lastname: "", email: "", phoneNbr: "",
        strAddr: "", aptNumber: "", postalCode: "", country: "", city: ""
    })

    let { id } = useParams()
    
    useEffect(() => {
        const getCustomer = async () => {
            const customerFromServer = await fetchCustomer()
            setCustomer(customerFromServer)
        }
        getCustomer()
    }, [])


    const fetchCustomer = async () => {
        const res = await fetch(`http://localhost:8888/customer/` + id)
        return await res.json()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="display-4 text-center my-4">Bienvenue {customer.firstname} {customer.lastname}</h1>
                
            </div>
        </div>
    )
}

export default CustomerProfile