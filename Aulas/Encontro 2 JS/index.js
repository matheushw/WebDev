var idade = 10;
/*while(idade < 18){
    console.log("Você não pode entrar aqui com "+idade+" anos");
    idade++;
}
console.log("Agora você pode");*/
var h1 = document.getElementById('texto-ola');
console.log(h1);

function imprimirDadosPessoa(pessoa){
    console.log("Nome da pessoa: " + pessoa.nome);
    console.log("Idade da pessoa: " + pessoa.idade);
    console.log("Altura da pessoa: " + pessoa.altura);
}

var a = { //no JS, é assim que se declara um objeto
    nome:"Daniel",
    idade: 20 //Não colocar ;
}

imprimirDadosPessoa(a);

var b = {
    nome:"Janaina",
    idade: 54,
    altura: 1.72
}

imprimirDadosPessoa(b);

var textoh1 = h1.textContent;
textoh1.textContent = "tchau";
h1.textContent = "Tchau";

/*function dizerOla(){
    alert("Olá");
}

dizerOla();*/

function quadrado(x){
    var conta = x*x;
    return conta;
}
console.log(quadrado(2));
console.log(quadrado(4));

function cubo(x){
    return x*x*x;

}
console.log(cubo(10));

function somar(a,b){
    return a+b;
}
console.log(somar(1,2));


var funcao = imprimirDadosPessoa; //Passando todo o "valor" da função para uma variável
funcao(a);

function somarDoisQuadrados(a,b, calcular){
    return calcular (a) + calcular (b);
}
console.log(somarDoisQuadrados(10,5,quadrado));

function somarDoisNumeros(a,b,calcular){
    return calcular (a) + calcular (b);
}
console.log(somarDoisNumeros(10,5,cubo));

var funcoes = {
    a: imprimirDadosPessoa,
    b: somarDoisNumeros
}

console.log(funcoes.a(b));  //b = pessoa
console.log(funcoes.b(2,7, quadrado));

var elemento  =document.querySelector("h1");
console.log(elemento);

var z = 1;
var y = 2;
var x = 3;
var w = 4;
var soma = 0;
var itensCarrinho = [w,x,y,z] //vetor
console.log("");
for(var i = itensCarrinho.length -1; i >= 0 ; i--){
    soma += itensCarrinho[i];
    console.log((i+1)+ "º item: " + itensCarrinho[i])
}
console.log("Soma = "+soma);