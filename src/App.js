
import { useState } from 'react'

import FormNota from './components/FormNota'
import ListaNotas from './components/ListaNotas'

import './App.css'

function App() {

  const [minhasNotas, setMinhasNotas] = useState([])

  function adicionarNota(novaNota) {

    const novoArray = [...minhasNotas, novaNota] 

    setMinhasNotas(novoArray)

  }

  return (
    <section className="container">
      <section className="left">
        <FormNota aoAdicionarNota={adicionarNota} />
      </section>
      <section className="right">
        <ListaNotas notas={minhasNotas} />
      </section>
    </section>
  );
}

export default App;
