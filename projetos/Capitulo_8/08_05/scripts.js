function minhaFuncao() {
  document.getElementById("demoFuncao").innerHTML = 4 + 5;
}

function somarDoisNumeros() {
  var primeiroNumero = document.getElementById("primeiroNumero").value;
  var segundoNumero = document.getElementById("segundoNumero").value;
  var resultado = Number(primeiroNumero) + Number(segundoNumero)
  document.getElementById("resultado").innerHTML = primeiroNumero + " + " + segundoNumero + " = " + resultado;
}

function verificarSaldo() {
  var saldo = document.getElementById("saldo").value;

  if (saldo >= 0) {
      document.getElementById("farol").style.backgroundColor = "green";
  } else {
      document.getElementById("farol").style.backgroundColor = "red";
  }

}

function moverQuadrado() {
  var quadrado = document.getElementById("quadrado");
  var numeroRandomico = Math.random() * 500 + 400;
  quadrado.style.left = numeroRandomico + "px";
}