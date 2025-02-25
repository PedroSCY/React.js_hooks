import { useState, useMemo } from "react";
import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import Display from "../../components/template/Display";
import InputFormatado from "../../components/formulario/InputFormatado";

export default function () {
    const [numero1, setNumero1] = useState(1);
    const [numero2, setNumero2] = useState(1);
    const [numero3, setNumero3] = useState(1);
    const [numero4, setNumero4] = useState(1);


    // function potencia(){
    //     let future = Date.now() + 3000;
    //     while(Date.now()<future);
    //     return numero1 ** numero2;
    // }

    // O useMemo faz com que o resultado de um processamento seja guardado após a primeira execução até que os valores de entrada sejam alterada, ou que o componente seja desmontado , desta forma a re-renderização do componente causada por outros componentes ou variaveis não fará com que esse processamento seja refeito, contanto que os parametros não sejam mudados.

    // Por exemplo, como colocamos o processamento do numero1 e numero2 dentro do useMemo() a re-renderização causada pela mudança de estado dos numeros 3 e 4 não fará com que o processamento seja refeito, pois como os parametros são os mesmos, o useMemo já devolve o resultado memorizado, evitando o desperdicio de recursos de processamento. 

    let potencia = useMemo(() => {
        let future = Date.now() + 3000;
        // Isso causará um atraso, simulando um processamento pesado.
        while (Date.now() < future);
        return numero1 ** numero2;
    }, [numero1,numero2]);

    let soma = numero3 + numero4;

    return (
        <Pagina titulo="Memoização 1" subtitulo="Usando o hook useMemo">
            <Flex col center>
                <Display
                    texto={
                        <>
                            <span>{numero1}</span>
                            <sup>{numero2}</sup>
                            <span>= {potencia}</span>
                        </>
                    }
                ></Display>
                <Flex>
                    <InputFormatado valor={numero1} tipo="number" onInput={(e) => setNumero1(+e.target.value)} />
                    <InputFormatado valor={numero2} tipo="number" onInput={(e) => setNumero2(+e.target.value)} />
                </Flex>
                <Display texto={`${numero3}+${numero4} = ${soma}`}></Display>
                <Flex>
                    <InputFormatado valor={numero3} tipo="number" onInput={(e) => setNumero3(+e.target.value)} />
                    <InputFormatado valor={numero4} tipo="number" onInput={(e) => setNumero4(+e.target.value)} />
                </Flex>
            </Flex>
        </Pagina>
    );
}
