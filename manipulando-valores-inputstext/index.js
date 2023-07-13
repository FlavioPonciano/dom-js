function distribuiCaracter() {
    var caracter = document.getElementById('recebeCaracter').value //Puxando o valor do elemento com o atributo .value
    document.getElementById('recebeCaracter').value = '' //zerando o campo de digitação

    //limpar espaços em branco nas extremidades da string
    caracter.trim()


    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter no campo referente a números
            document.getElementById('apenasNumeros').value += caracter
            break;
        default:
            //Adicionar o caractere no campo referente a letras
            document.getElementById('apenasLetras').value += caracter
    }
}