import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
        const [usuarios, setUsuarios] = useState<any[]>([]);

        useEffect(() => {
          axios.get("http://localhost:8080/usuario/findAll")
          .then(response=>{
            console.log(response.data)
            setUsuarios(response.data)
          })
        }, [])
  
const ListaUsers = usuarios.map((usuario, index)=><li key={index}>{usuario?.nome_completo}</li>)
return (
        <div>
            <ul>
                {ListaUsers}
            </ul>
        </div>
    )
 }

 export default ItemList