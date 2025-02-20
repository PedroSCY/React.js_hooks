import { useEffect, useState } from "react";
import Display from "../../components/template/Display";
import Pagina from "../../components/template/Pagina";

export default function(){
    const quantidadeCaracteres = 400;
    const [caracteresRestantes, setCaracteresRestantes] = useState(quantidadeCaracteres);
    const [texto, setTexto] = useState("");

    useEffect(()=>{
        let timer = setTimeout(()=>{
            let aux = quantidadeCaracteres - texto.length;
            setCaracteresRestantes(aux);
            console.log("Atualizei");
        },1000);
        return ()=>{clearTimeout(timer);} // Função de limpeza - é chamada quando o componente é desmontado, ou seja quando o componente é removido da tela e isso acontece sempre que o texto é alterado, pois recarrega o componente, o demontando e remontando. Usamos o return para definir esse comportamento.
    },[texto])

    return(<Pagina titulo="Contagem de caracteres" subtitulo="Entendendo as funções de limpeza">
        <Display texto="Digite o texto" textoComplementar = {`${caracteresRestantes} caracteres restantes`}/>
        <textarea
        value={texto}
        onInput={(e)=>{setTexto(e.currentTarget.value)}}
        className={`border border-zinc-700 bg-zinc-700 
                text-white text-2xl w-3/5 h-72
                    rounded p-5`}
        ></textarea>
    </Pagina>)
}