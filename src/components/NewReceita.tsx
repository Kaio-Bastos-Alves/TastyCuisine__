
import axios from 'axios'
import { useState, useEffect } from "react"

const Receitas = () => {
    const [receitas, setReceitas] = useState(['Calabraza', 'Muçarela', 'Baiana'])
    axios.get("http://localhost:8080/usuario/findAll")
        .then(response=>{
            console.log(response.data.data)
            setReceitas(response.data.data)
        })

const listaPizzas = receitas.map(pizza=><li>{receitas.nome}</li>)

    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}