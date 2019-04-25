var item1 = {
    nome: "Geladeira",
    valor: 350.50,
}

var item2 = {
    nome: "Livro",
    valor: 39.90
}

var item3 ={
    nome: "Moto",
    valor: 1.200
}
 
var item4 ={
    nome: "Notebook",
    valor: 200
}


var itensNoCarrinho = [item1, item2, item3,item4] //Adiciona os itens no vetor

for(var n = itensNoCarrinho.length; n >= 0; n--){ //For que percorre todos os itens, do mais recentemente adicionado ao mais antigo
    console.log(itensNoCarrinho[n])
}