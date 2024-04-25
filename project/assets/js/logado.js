const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const user = document.getElementById('user');
const logado = document.querySelector("#logado");
logado.innerHTML = ` ${userLogado.nome}`;
const bs = document.getElementById('bs');

if (localStorage.getItem("token") != null) {
  document.getElementById("botaoSair").style.display = "inline-block";
  document.getElementById("botaoSair").innerHTML = "Sair"; 
}
else{
  document.getElementById("botaoSair").style.display = "none";
}

function remover(){
    user.remove();
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "/index pages/index.html";
}

remover()