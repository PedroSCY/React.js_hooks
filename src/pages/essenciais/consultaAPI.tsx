import { IconLoader } from "@tabler/icons-react";
import Pagina from "../../components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        console.log("Foto Atualizada");
        setUrl(obj.message);
      });
  }, []); // O array vazio indica que a função de efeito só será chamada uma vez

  return (
    <Pagina titulo="Requisição à API" subtitulo="Requerindo dados">
      {url ? (
        <img className="max-w-sm" src={url}/>
      ) : (
        <IconLoader className="animate-spin" />
      )}
    </Pagina>
  );
}
