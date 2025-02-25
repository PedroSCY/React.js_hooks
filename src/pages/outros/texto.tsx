import { useLayoutEffect, useState } from "react"
import Pagina from "../../components/template/Pagina";


// Diferente do useEffect, o useLayoutEffect faz alterações antes do componente ser montado, minimizando a discrepancia de alterações visuais. E é destinado para mudanças de layouts.

export default function(){
    const [texto, setTexto] = useState("Texto Secreto!!!!!!!!!!!!");

    useLayoutEffect(()=>{
        setTexto("Olá!");
    },[])

    return(<Pagina titulo="Texto secreto" subtitulo="Entendendo um problema do useEffect">
        <p className="text-5xl text-gray-300">{texto}</p>
    </Pagina>)
}