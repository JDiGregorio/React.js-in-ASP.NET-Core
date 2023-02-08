import React, {  useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Target from "./components/Target"

let mPersona = {
    Nombre: "Maria",
    Correo: "maria@gmail.com"
}

const App = () => {
    const [numero, setNumero] = useState(0)
    const [persona, setPersona] = useState(mPersona)
    const [nombre, setNombre] = useState("Pedro")

    const [empleados, setEmpleados] = useState([])

    const EscribirConsola = () => {
        setNombre("Maria")
        console.log("1. El nombre ha cambiado a: " + nombre)
    }

    useEffect(() => {
        consumirAPI();
    }, [])

    useEffect(() => {
        console.log("2. El nombre ha cambiado a: " + nombre)
    }, [nombre])

    const consumirAPI = async () => {
        const response = await fetch("api/employee/GetEmployee")

        if (response.ok) {
            const data = await response.json()

            console.log(data)

            setEmpleados(data)
        }
    }

    return (
        <div className="container-fluid">
            <div>
                <h5>Lista de empleados</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado, index) => (
                            <tr key={index}>
                                <td>
                                    {empleado.name}
                                </td>
                                <td>
                                    {empleado.email}
                                </td>
                                <td>
                                    {empleado.address}
                                </td>
                                <td>
                                    {empleado.phoneNumber}
                                </td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App