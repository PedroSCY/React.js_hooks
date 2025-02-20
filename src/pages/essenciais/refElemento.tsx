import Pagina from "../../components/template/Pagina";
import Botao from "../../components/template/Botao";
import Flex from "../../components/template/Flex";
import { useRef } from "react";
import { IconArrowLeft } from "@tabler/icons-react";

// É possivel ter acesso a um elemento da DOM usando referencias, pra "conectar" o elemento da DOM com a variel com useRef, precisamos referenciar a variavel diretamente no elemento atraves do atributo ref. 


export default function(){
    const referencia = useRef<any>(); // iniciamos a variavel referencia com useRef vazia, e passamos o tipo any, pois o typescript nos obriga ainda que não saibamos o tipo exato do elemento que vamos referenciar.

    console.log("renderizei");

    function apagar(){
        // Aqui a nossa referencia já sabe que é um paragrafo e podemos acessar os seu atributos e a manibuçar como quisermos.
        //referencia.current = <p>
        //referencia.current.innerText = "Texto Legal!";
        // slice(0,-1) remove o ultimo caracter da string.
        // E fazemos isso diretamente no elemento da DOM. (O que não é recomendado, mas é possivel)
        referencia.current.innerText = referencia.current.innerText.slice(0,-1);

        //Aidna que resulte em uma alteração visual, por ser uma alteração direta na Dom, que é a nossa pagina atual, não há renderizações, pois não estamos alterando o estado do componente, apenas o elemento da DOM.
    }

    return(<Pagina titulo="Referenciando um elemento" subtitulo="Usando referencias na DOM">
        <Flex col center>
            <p ref={referencia} // Aqui dizemos para a nossa variavel referencia pra olhar para este paragrafo. 
                className="text-4xl text-gray-300 m-4">Texto Legal!</p>
            <Botao redondo tamanho="2xl" cor="bg-sky-500" 
            icone={<IconArrowLeft/>} onClick={apagar}/>
        </Flex>
    </Pagina>)
}