/*
Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo 
deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background 
deve ser alterado para verde
*/

function mudaCor() {
    document.getElementById('recebeTexto').style.backgroundColor = 'yellow'
}

function resetar() {
    var caracter = ''
    caracter = document.getElementById('recebeTexto').value += caracter
    if (caracter.length > 3) {
        document.getElementById('recebeTexto').style.backgroundColor = 'green'
    } else if (caracter.length > 0) {
        document.getElementById('recebeTexto').style.backgroundColor = 'red'
    } else {
        document.getElementById('recebeTexto').style.backgroundColor = ''
    }

}