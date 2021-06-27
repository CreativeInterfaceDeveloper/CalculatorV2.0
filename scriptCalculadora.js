


function operar(){

    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var resultante;

    if (document.getElementById('suma').checked){
        console.log("ejecutado SUMA");
        resultante = numero1 + numero2;
        document.getElementById('resultado').value = resultante;
    }

    if (document.getElementById('resta').checked){
        console.log("ejecutado MENOS");
        resultante = numero1 - numero2;
        document.getElementById('resultado').value = resultante;
    }

    if (document.getElementById('multiplicacion').checked){
        console.log("ejecutado MULTIPLICACION");
        resultante = numero1 * numero2;
        document.getElementById('resultado').value = resultante;
    }

    if (document.getElementById('division').checked){
        console.log("ejecutado DIVISION");

        if(numero1 + numero2 == 0) 
            document.getElementById('resultado').value = "inconsistencia de valores en operación";

        else{
            resultante = numero1 / numero2;
            document.getElementById('resultado').value = resultante;
        }
        
    }



}
