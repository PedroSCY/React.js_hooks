import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import Display from "../../components/template/Display";
import InputFormatado from "../../components/formulario/InputFormatado";
import Botao from "../../components/template/Botao";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function () {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [validadeN1, setValidadeN1] = useState(false);
  const [validadeN2, setValidadeN2] = useState(false);
  const [soma, setSoma] = useState(0)

  useEffect(()=>{
    setValidadeN1(number1>0);
},[number1]);

useEffect(()=>{
    setValidadeN2(number2>0);
},[number2]);

  function somar() {
    if(validadeN1 && validadeN2){
        setSoma(number1+number2);
    } else {
        setSoma(-9999);
    }
  }

  function validarNumero(n1: number): boolean {
    if (n1 < 0) return false;
    return true;
  }

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma"></Display>
        <Flex center centerCross>
          <InputFormatado
            tipo="number"
            valor={number1}
            onInput={(e) => {
                setNumber1(+e.target.value);
            }}
          />
          <IconPlus className="ml-4" />
          <InputFormatado
            tipo="number"
            valor={number2}
            onInput={(e) => {
                setNumber2(+e.target.value);
            }}
          />
          <Botao cor="bg-orange-400" texto="=" onClick={somar}></Botao>
        </Flex>
        <Display texto={soma} />
      </Flex>
    </Pagina>
  );
}
