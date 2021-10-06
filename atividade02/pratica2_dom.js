function nome(){
    let txt = document.getElementById('txt').value;
    document.getElementById("resTxt").innerHTML = txt.toUpperCase();

}

function numero(){
    let n = document.getElementById('n').value;
    let soma = Number(n) + 10;
    document.getElementById("resN").innerHTML = `Daqui a 10 anos você terá ${soma} anos`;

}

