function modificaEstilo(corDeFundo, largura, altura) {
    document.getElementById('quadrado').style.backgroundColor = corDeFundo //acessando o atributo com  .style para acessar o css do elemento, nesse caso o background e atribuindo a cor definida por parametro. Em caso de modificações com mais um termo como background-image se transforma backgroundImage

    //afetando atributos de largura e altura do elemento
    document.getElementById('quadrado').style.width = largura
    document.getElementById('quadrado').style.height = altura
}

//Para saber mais é só acessar a W3School na parte de DOM Style