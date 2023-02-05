function soma(a, b){
    return (a) + (b);
}

function subtração(a,  b){
    return Number(a) - Number(b);
}

function multiplicacao(a, b){
    let x = a * b
    return x.toFixed(2);
}

function divisao(a, b){
    let x = a / b
    return x.toFixed(2);
}

function potencia(a, b){
    return a ** b;
}

function fatorial(a, b, id){
    var f = 1;
    if(id){
        for(let i = a; i > 1; i--){
            f *= i;
        } 
    }else{
        for(let i = b; i > 1; i--){
            f *= i;
        }     
    }
    return f;
}
function porcentagem(a, b){
    return (b/a) * 100;
}
function media(a, b){
    return (a+b) / 2;
}
function saida(x){
    console.log(x)
}
function render(){
    soma()
    pegaValores()
}
function resultado (id, resultado){
    var span = document.querySelector(id);
    return span.textContent = resultado;
}
function pegaValores(){
    var botao = document.querySelector("#calcular");
    botao.addEventListener('click', inputs)
}
function inputs(){
    var valorA = document.querySelector("#numero_a");
    var valorB = document.querySelector("#numero_b");
    valorA = Number(valorA.value);
    valorB = Number(valorB.value);

    let s = soma(valorA, valorB);
    resultado("#soma", s);

    let subA = subtração(valorA, valorB);
    resultado("#subtracaoA", subA);
    let subB = subtração(valorB, valorA);
    resultado("#subtracaoB", subB);

    let multA = multiplicacao(valorA, valorB);
    resultado("#multiplicacao", multA);

    let divA = divisao(valorA, valorB)
    resultado("#divisaoA", divA);
    let divB = divisao(valorB, valorA);
    resultado("#divisaoB", divB);

    let potA = potencia(valorA, valorB);
    resultado("#potenciaA", potA);
    let potB = potencia(valorB, valorA);
    resultado("#potenciaB", potB);

    let raA = Math.sqrt(valorA);
    resultado("#raizA", raA.toFixed(2));
    let raB = Math.sqrt(valorB);
    resultado("#raizB", raB.toFixed(2));

    let fatA = fatorial(valorA, valorB, true);
    resultado("#fatorialA", fatA);
    let fatB = fatorial(valorA, valorB, false);
    resultado("#fatorialB", fatB);

    let porA = porcentagem(valorA, valorB);
    resultado("#porcentagemA", `${Math.ceil(porA, 1)}%`); 
    let porB = porcentagem(valorB, valorA);
    resultado("#porcentagemB", `${Math.ceil(porB, 1)}%`); 

    let med = media(valorA, valorB);
    resultado("#media", med.toFixed(1));
}
render();