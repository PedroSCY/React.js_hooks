import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";
import InputFormatado from "../../components/formulario/InputFormatado";

import { useState, useCallback } from "react";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Botao from "@/components/template/Botao";

export default function () {
  const [quantidade, setQuantidade] = useState(0);

  // o useCallback é semelhante ao useMemo, porem ele armazena a função e não o resultado, dessa forma a função é é reconstruida por inteira a cada renderização.

  const finalizar = useCallback(function (e: any) {
    e.preventDefault();
    window.alert("Compra finalizada!");
    setQuantidade(0);
  }, []); // desta forma "[]" a função só será montado uma unica vez, quando o componente for montado.

  return (
    <Pagina
      titulo="Memoizando Funções"
      subtitulo="Entendendo o hook useCallback"
    >
      <Display texto="Quantos produtos você quer?" />
      <form>
        <Flex col center gap={8}>
          <p className="font-bold italic text-yellow-500">
            Abra o console do navegar para acompanhar.
          </p>
          <InputFormatado
            valor={quantidade}
            tipo="number"
            onInput={(e) => setQuantidade(+e.target.value)}
          />
          {/* Tambem é recomendado que o componente que chamara a função seja memorizado */}
          <Flex gap={8}>
            <Flex col>
              <span className="text-xs">
                Botao com Memorização de componente
              </span>
              <BotaoMemoizado texto="Confirmar" onClick={finalizar} />
            </Flex>
            <Flex col>
              <span className="text-xs">
                Botao sem Memorização de componente
              </span>
              <Botao texto="Confirmar" cor="bg-red-500" onClick={finalizar} />
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Pagina>
  );
}
