import React, { useMemo, useState } from 'react'
import { ResaTaurantes } from './data/restaurantes'
import './css/Restaurantes.css'
import Header from './header'


const Receitas: React.FC = () => {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState<string>('Todos')

  const receitasFiltradas = useMemo(() => {
    return ResaTaurantes.filter(r => {
      const matchBusca = r.title.toLowerCase().includes(busca.trim().toLowerCase())
      return matchBusca
    })
  }, [busca, categoria])

  return (
    <main className="receitas-main">
        <Header/>



      <section className="grid-receitas">

        {receitasFiltradas.map(r => (
          <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
            <div className="imagem-receita">
              <img src={r.image} alt={r.title} />
                <h2>{r.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Receitas
