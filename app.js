const inputNum = document.getElementById("inputNum");
let valor;
let numero;

function Sumar() {
    valor = inputNum.value;
    numero = parseInt(valor);

    document.getElementById("result1").textContent = `${numero} + 1 = ${numero+1}`;
    document.getElementById("result2").textContent = `${numero} + 2 = ${numero+2}`;
    document.getElementById("result3").textContent = `${numero} + 3 = ${numero+3}`;
    document.getElementById("result4").textContent = `${numero} + 4 = ${numero+4}`;
    document.getElementById("result5").textContent = `${numero} + 5 = ${numero+5}`;
    document.getElementById("result6").textContent = `${numero} + 6 = ${numero+6}`;
    document.getElementById("result7").textContent = `${numero} + 7 = ${numero+7}`;
    document.getElementById("result8").textContent = `${numero} + 8 = ${numero+8}`;
    document.getElementById("result9").textContent = `${numero} + 9 = ${numero+9}`;
    document.getElementById("result10").textContent = `${numero} + 10 = ${numero+10}`;
    actve()
}
function Restar() {
    valor = inputNum.value;
    numero = parseInt(valor);

    document.getElementById("result1").textContent = `${numero} - 1 = ${numero-1}`;
    document.getElementById("result2").textContent = `${numero} - 2 = ${numero-2}`;
    document.getElementById("result3").textContent = `${numero} - 3 = ${numero-3}`;
    document.getElementById("result4").textContent = `${numero} - 4 = ${numero-4}`;
    document.getElementById("result5").textContent = `${numero} - 5 = ${numero-5}`;
    document.getElementById("result6").textContent = `${numero} - 6 = ${numero-6}`;
    document.getElementById("result7").textContent = `${numero} - 7 = ${numero-7}`;
    document.getElementById("result8").textContent = `${numero} - 8 = ${numero-8}`;
    document.getElementById("result9").textContent = `${numero} - 9 = ${numero-9}`;
    document.getElementById("result10").textContent = `${numero} - 10 = ${numero-10}`;
    actve()
}

function Multiplicar() {
    valor = inputNum.value;
    numero = parseInt(valor);

    document.getElementById("result1").textContent = `${numero} x 1 = ${numero*1}`;
    document.getElementById("result2").textContent = `${numero} x 2 = ${numero*2}`;
    document.getElementById("result3").textContent = `${numero} x 3 = ${numero*3}`;
    document.getElementById("result4").textContent = `${numero} x 4 = ${numero*4}`;
    document.getElementById("result5").textContent = `${numero} x 5 = ${numero*5}`;
    document.getElementById("result6").textContent = `${numero} x 6 = ${numero*6}`;
    document.getElementById("result7").textContent = `${numero} x 7 = ${numero*7}`;
    document.getElementById("result8").textContent = `${numero} x 8 = ${numero*8}`;
    document.getElementById("result9").textContent = `${numero} x 9 = ${numero*9}`;
    document.getElementById("result10").textContent = `${numero} x 10 = ${numero*10}`;
    actve()
}
function Dividir(){
    valor = inputNum.value;
    numero = parseInt(valor);

    document.getElementById("result1").textContent = `${numero} / 1 = ${numero/1}`;
    document.getElementById("result2").textContent = `${numero} / 2 = ${numero/2}`;
    document.getElementById("result3").textContent = `${numero} / 3 = ${numero/3}`;
    document.getElementById("result4").textContent = `${numero} / 4 = ${numero/4}`;
    document.getElementById("result5").textContent = `${numero} / 5 = ${numero/5}`;
    document.getElementById("result6").textContent = `${numero} / 6 = ${numero/6}`;
    document.getElementById("result7").textContent = `${numero} / 7 = ${numero/7}`;
    document.getElementById("result8").textContent = `${numero} / 8 = ${numero/8}`;
    document.getElementById("result9").textContent = `${numero} / 9 = ${numero/9}`;
    document.getElementById("result10").textContent = `${numero} / 10 = ${numero/10}`;
    actve()
}
function borrar(){
    document.querySelector(".result").style.display = "none";
}
function actve() {
    document.querySelector(".result").style.display = "block";
}


