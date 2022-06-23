import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="text-center bg-dark py-5" >
                <div className="container pt-4">
                    <div className="mb-4">
                        <a className=" text-light m-1" target="_blank" href="https://github.com/igloosyrup" style={{ fontSize: 35 }}>
                            Retrouvez-moi sur github
                            <i className="ml-2 fa-brands fa-github fa-xl"></i>
                        </a>
                        <br />
                        <span className='text-light'>
                            © 2022 IglooSyrup
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer