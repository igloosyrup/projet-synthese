import React from 'react'
import Navbar from '../Navbar/Navbar'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className='my-5'>
                <h1 className="display-4 text-center">Vous avez des questions? Contactez-nous</h1>
                <div className="container my-5 col-sm-6 col-xl-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Votre Courriel</label>
                            <input type="email" className="form-control" id="email" placeholder="nom@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Commentaire(s)/Questions(s)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize:"none"}}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-dark">Soumettre</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs