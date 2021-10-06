
function clicar(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let soma = Number(n1) + Number(n2);
    document.getElementById("resN").innerHTML = "A soma dos valores: " + soma;
}

function numero1(){
    let n1 = document.getElementById('n1').value;

    if (n1 >= 2 && n1 <= 10){
        document.getElementById("resN").innerHTML = "numero valido";
    }
    else{
        document.getElementById("resN").innerHTML = "numero invalido (numeros de 2 a 10)";
    }
}

function numero2(){
    let n2 = document.getElementById('n2').value;

    if (n2 >= 2 && n2 <= 10){
        document.getElementById("resN").innerHTML = "numero valido";
    }
    else{
        document.getElementById("resN").innerHTML = "numero invalido (numeros de 2 a 10)";
    }
}

