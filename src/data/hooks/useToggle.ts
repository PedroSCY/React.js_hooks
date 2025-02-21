import { useState } from "react";


export default function useToggle(valor?: boolean) {
    const [ativo, setAtivo] = useState(false);

    const toggleAtivo = () => {
        setAtivo((state) => !state);
    };
    
    const r:[boolean, ()=>void] = [ativo, toggleAtivo];

    return r;
}
