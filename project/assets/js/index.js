if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "/index pages/index.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "/index pages/index.html";
}

const user = document.getElementById('user');
const bs = document.getElementById('bs');

if (localStorage.getItem("token") != null) {
  document.getElementById("botaoSair").style.display = "inline-block";
  document.getElementById("botaoSair").innerHTML = "Sair"; 
}
else{
  document.getElementById("botaoSair").style.display = "none";
}