function somar (){
    var valorinput = parseFloat(document.getElementById('valor1').value)
    var valorinput2 = parseFloat(document.getElementById('valor2').value)
    resultado = valorinput + valorinput2
    document.getElementById('resultado').innerHTML = resultado
}
function subtrair (){
    var valorinput = parseFloat(document.getElementById('valor1').value)
    var valorinput2 = parseFloat(document.getElementById('valor2').value)
    resultado = valorinput - valorinput2
    document.getElementById('resultado').innerHTML = resultado
}
function multiplicar (){
    var valorinput = parseFloat(document.getElementById('valor1').value)
    var valorinput2 = parseFloat(document.getElementById('valor2').value)
    resultado = valorinput * valorinput2
    document.getElementById('resultado').innerHTML = resultado
}
function dividir (){
    var valorinput = parseFloat(document.getElementById('valor1').value)
    var valorinput2 = parseFloat(document.getElementById('valor2').value)
    resultado = (valorinput / valorinput2).toFixed(2)
    document.getElementById('resultado').innerHTML = resultado
}