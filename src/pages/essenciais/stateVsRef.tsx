import Botao from "../../components/template/Botao"
import Display from "../../components/template/Display"
import Pagina from "../../components/template/Pagina"
import Flex from "../../components/template/Flex"
import { useState, useRef } from "react"

// O useRef é uma forma de manter um valor entre renderizações sem que o componente seja remontado.
// O valor de referência é mantido entre renderizações e não causa a remontagem do componente.
// O valor de referência é acessado através da propriedade current do objeto retornado por useRef.

//Nesse caso o valor de referência é incrementado mas só é exibido na tela quando o estado é alterado por outras alterações, como por exemplo alterações no useState.

// Umas das principais diferencas entre o useRef e o useState é que no useref, a variável não muda, apenas os valores que estão dentro dela, enquanto no useState, a variavel pode ser alterada. 

// exemplo: referencia.current = referencia.current+1; não altera a variavel referencia, apenas o valor que está dentro dela.já no estado, setEstado(estado+1) altera a variavel estado (imagino que o useState faz isso internamente já que o valor é o retorno do que é processado por ele, é como ele funciona).

// Isso significa que a posição de memória da variável referencia não muda, apenas o valor que está dentro dela. Já no estado, a posição de memória da variável estado muda. porque a variavel é subtituida e não "editada".

// É um pouco dificil de explicar, tem que fazer um cursinho pra entender hahaha (meme)

export default function(){
    const [estado,setEstado] = useState(0);
    const referencia = useRef(0);

    function incrementaReferencia(){
        referencia.current = referencia.current+1;
    }

    return(<Pagina titulo="Referencia Vs State" subtitulo="Entendendo useRef">
        <Display texto={`R: ${referencia.current} | S: ${estado}`}/>
        <Flex gap={5}>
            <Botao redondo tamanho="2xl" cor="bg-pink-500" 
            texto="R+" onClick={()=>incrementaReferencia()}/>
            <Botao redondo tamanho="2xl" cor="bg-green-500" 
            texto="S+" onClick={()=>setEstado(estado+1)}/>
        </Flex>
    </Pagina>)
}