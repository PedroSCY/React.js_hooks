import React from "react";

export interface BotaoProps {
    icone?: any;
    texto?: string;
    cor?: string;
    tamanho?: "xs" | "md" | "lg" | "xl" | "2xl" | "3xl";
    redondo?: boolean;
    onClick?: (e: any) => void;
    className?: string;
}

function Botao(props: BotaoProps) {

    console.log("[Botao com MEMO] - Renderizei");
    
    function tamanho() {
        if (props.tamanho === "xs") return 9;
        if (props.tamanho === "lg") return 14;
        if (props.tamanho === "xl") return 16;
        if (props.tamanho === "2xl") return 20;
        if (props.tamanho === "3xl") return 24;
        return 11;
    }

    return (
        <button
            className={`
            flex items-center gap-2 rounded-md px-5 h-${tamanho()}
            hover:bg-opacity-80 select-none
            ${props.redondo && `rounded-full justify-center w-${tamanho()}`}
            ${props.cor ?? "bg-blue-500"}
            ${`text-${props.tamanho ?? "base"}`}
            ${props.className ?? ""}
        `}
            onClick={props.onClick}
        >
            {props.icone ? props.icone : null}
            {props.texto ? props.texto : null}
        </button>
    );
}

// React.memo não é exatamente um hook, mas é uma funcionalidade que memoriza um comonente funcional interio até que suas props sejam alteradas, semelhante ao useMemo e useCallback, porem um grava o resultado e o outro a propria função respectivamente.
export default React.memo(Botao);
