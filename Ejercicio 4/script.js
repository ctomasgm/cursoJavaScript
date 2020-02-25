function calcular() {
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let operacion = parseInt(document.getElementById('operación').value);
    console.log(valor1)
if(!isNaN(valor1) && !isNaN(valor2)){
    switch (operacion) {
        case 1:
            console.log(valor1 + valor2);
            document.getElementById("resultado").innerHTML = valor1 + valor2;
            break;
        case 2:
            console.log(valor1 - valor2);
            document.getElementById("resultado").innerHTML = valor1 - valor2;
            break;
        case 3:
            console.log(valor1 * valor2);
            document.getElementById("resultado").innerHTML = valor1 * valor2;
            break;
        case 4:
            console.log(valor1 / valor2);
            document.getElementById("resultado").innerHTML = valor1 / valor2;
            break;

        default:
            alert("Valor de operación no valido");
            break;
    }
}else
    alert("Valores no Válidos")
}