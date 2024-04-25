const produtos = [
    { id: 1, nome: 'Whey', imagem: '../imagens/produtos/whey.png', url: '../index pages/whey.html' },
    { id: 2, nome: 'Bcaa', imagem: '../imagens/produtos/bcaa.png', url: '../index pages/bcaa.html' },
    { id: 3, nome: 'whey', imagem: '../imagens/produtos/whey.png', url: '../index pages/whey.html'},
    { id: 4, nome: 'bcaa', imagem: '../imagens/produtos/bcaa.png', url: '../index pages/bcaa.html' },
    { id: 5, nome: 'whey', imagem: '../imagens/produtos/whey.png', url: '../index pages/whey.html' }
];


const ul = document.getElementById('listaProdutos');

produtos.forEach((produto) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <a href="${produto.url}">
            <img width="50" src="${produto.imagem}" >
            <span class="item-name">${produto.nome}</span>
        </a>
    `;
    ul.appendChild(li);
});

function filtrar(){
    var input, filter, ul, li, span, a, i, txtvalue, count = 0;
    //pegar os elementos html
    input = document.getElementById('inputbusca');
    ul = document.getElementById('listaProdutos');
    //filtro
    filter = input.value.toUpperCase();
    //Pegar todas as li's da lista
    li = ul.getElementsByTagName("li");
    //pecorrer os li's
    for(i = 0; i < li.length; i++){
        //pegar a tag A do elemento 
        a = li[i].getElementsByTagName("a")[0];
        //pegar o texto dentro do A
        txtvalue = a.textContent || a.innerText;
        //validação
        if(txtvalue.toUpperCase().indexOf(filter) > -1 ){
            //valor bateu?
            li[i].style.display = "";
            //incrementar contador
            count++;
            //pegar a span 
            span = li[i].querySelector(".item-name");
            //se existir
            if(span){
                span.innerHTML = txtvalue.replace(new RegExp(filter, "gi"), (match)=> {
                    return "<strong>" + match + "</strong>";
                });
            }
        }else{
            //não mostra o item da lista
            li[i].style.display = "none";
        }
    }

    if(count === 0){
        ul.style.display = "none";
        
    }else{
        ul.style.display = "block";
        setTimeout(function() {
            ul.style.display = "none";
            input.value = "";
        }, 10000);
        
    }
}

function ocultarAoClicarFora(event) {
    const input = document.getElementById('inputbusca');
    const ul = document.getElementById('listaProdutos');

    // Verifica se o clique ocorreu fora do campo de entrada
    if (!input.contains(event.target)) {
        ul.style.display = "none"; // Oculta o elemento
    }
}

// Adiciona um event listener para o evento de clique no documento inteiro
document.addEventListener('click', ocultarAoClicarFora);










