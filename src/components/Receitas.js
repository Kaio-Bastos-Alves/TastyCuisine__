import Header from "./header"
import './css/Receitas.css'
import ReceitasPro from './data/receitas.json'
import { useEffect, useState } from "react"

const Receitas = () => {
    const [recipes, SetRecipes] = useState([
        {
            "id": 1,
            "Nome": "Bolo de chocolate",
            "Likes": 1,
            "Time": "25 minutos",
            "Dificuldade": "Médio",
            "Imagem": "https://s2-receitas.glbimg.com/j9WXDFp05XljuvekMlU2WR2VKfQ=/1280x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/1/N/aQD0fhQs2qW7qlFw0bTA/bolo-de-chocolate-facil.jpg"
        },
        {
            "id": 2,
            "Nome": "Bolo de chocolate",
            "Likes": 1,
            "Time": "25 minutos",
            "Dificuldade": "Médio",
            "Imagem": "https://s2-receitas.glbimg.com/j9WXDFp05XljuvekMlU2WR2VKfQ=/1280x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/1/N/aQD0fhQs2qW7qlFw0bTA/bolo-de-chocolate-facil.jpg"
        }
    ])

    const handleDelete = (id) => {
        const NewRecipe = recipes.filter(recipe => recipe.id !== id);
        SetRecipes(NewRecipe);
    }   

    useEffect(() => {
        console.log('use effect ran');
    }, []);
    return(
        <div>
            <ReceitasPro>
        </div>
    )
}

export default Receitas;