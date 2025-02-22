import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconRefreshAlert, IconSection, IconShoppingCart, IconUsers } from "@tabler/icons-react";

export const secoes = [
        {
            titulo: "Essenciais",
            aberta: true,
            itens: [{titulo: "Contador",tag: "useState",url: "/essenciais/contador",icone:<IconNumbers />},
            {titulo:"Votação", url:"/essenciais/votacao", tag:"useState", icone:<IconUsers/>},
            {titulo:"Consulta à API", url:"/essenciais/consultaAPI", tag:"useEffect", icone: <IconArrowsLeftRight/>},
            {titulo:"Maior", url:"/essenciais/maior", tag:"useEffect", icone:<IconMathGreater/>},
            {titulo:"Contagem Caracteres", url:"/essenciais/contagemCaracteresEffect", tag:"useEffect", icone:<IconLetterCase/>},
            {titulo:"State VS Referencia", url:"/essenciais/stateVsRef", tag:"useRef",icone:<IconRefreshAlert/>},
            {titulo:"Referenciando Elemento", url:"/essenciais/refElemento", tag:"useRef", icone:<IconSection/>},
            {titulo:"Contagem Caracteres", url:"/essenciais/contagemCaracteresRef", tag:"useRef", icone: <IconLetterCase/>}],
        },
        {
            titulo: "Personalizados",
            aberta: false,
            itens: [{titulo:"Modal", url:"/personalizados/modal", tag:"personalizados", icone:<IconAppWindow/>},
                {titulo:"Tamanho Janela", url:"/personalizados/tamanhoJanela", tag:"personalizados", icone: <IconDimensions/>},
                {titulo:"Validando Senha", url:"/personalizados/senha", tag:"personalizados", icone:<IconLock/>}]
        },
        {
            titulo:"Contexto",
            aberta: false,
            itens: [
                {titulo:"Loja", url:"/contexto/loja", tag:"useContext", icone:<IconShoppingCart/>},
                
            ]
        },
    ];

    export default secoes