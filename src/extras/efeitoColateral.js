//Função pura
//Não depende de variáveis externas
function soma(a,b){
    return a+b;
}

//Função impura
//Depende de variáveis externas
let resultado;
function soma2(a,b){
    resultado = a+b;
}

// Efeito colateral é quando a função não pode garantir que o resultado será o mesmo sempre por não ter controle sobre as variáveis externas

soma2(1,5);
soma2(0,8);