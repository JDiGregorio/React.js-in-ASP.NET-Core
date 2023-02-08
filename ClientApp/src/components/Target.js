import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Target = ({ title, parraf, btnText, children }) => {

    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">
                    {title}
                </h1>

                <p className="card-text text-light">
                    {parraf}
                </p>

                <a href="#" className="btn btn-danger">
                    {btnText}
                </a>

                {children}
            </div>
        </div>
    )
}

export default Target