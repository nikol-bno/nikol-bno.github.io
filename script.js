function encriptar() {
  var texto = document.getElementById("imputTexto").value.toLowerCase();
  var txtCifrado = texto.replace(/e/img,"enter");
  var txtCifrado = txtCifrado.replace(/o/img,"ober");
  var txtCifrado = txtCifrado.replace(/i/img,"imes");
  var txtCifrado = txtCifrado.replace(/a/img,"ai");
  var txtCifrado = txtCifrado.replace(/u/img,"ufat");
  document.getElementById("candadoImg").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("texto2").classList.remove("centrado");
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
  document.getElementById("imputTexto").value = "";
}

function desencriptar() {
  var texto = document.getElementById("imputTexto").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/img,"e");
  var txtCifrado = txtCifrado.replace(/ober/img,"o");
  var txtCifrado = txtCifrado.replace(/imes/img,"i");
  var txtCifrado = txtCifrado.replace(/ai/img,"a");
  var txtCifrado = txtCifrado.replace(/ufat/img,"u");
  document.getElementById("candadoImg").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
  document.getElementById("imputTexto").value = "";
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy")
  alert("¡Copiado!")
}