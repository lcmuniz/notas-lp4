
import CartaoNota from './CartaoNota'

import './ListaNotas.css'

function ListaNotas(props) {

    return (
        <ul className="lista-notas">

            {
                props.notas.map(e => <li><CartaoNota titulo={e.titulo} texto={e.texto} /></li>)
            }

        </ul>
    )
}

export default ListaNotas