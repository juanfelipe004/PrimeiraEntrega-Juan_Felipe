const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const user = document.getElementById('user');
const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;
const bs = document.getElementById('bs');

if (localStorage.getItem("token") != null) {
    alert("ERROR, você ja está logado!");
    window.location.href = "/index pages/index.html";
}
