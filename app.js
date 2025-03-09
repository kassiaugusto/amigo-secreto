let amigos = []; 


function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, adicione um nome válido!");
        return; 
    }

    amigos.push(nomeAmigo); 
    atualizarListaAmigos();   
    inputAmigo.value = "";  
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para sortear!");
        return;
    }
    
    const sorteio = [...amigos];

    const sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];

    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = "";  

    const li = document.createElement('li');
    li.textContent = `Você sorteou ${sorteado}`;
    listaResultado.appendChild(li);

    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.textContent = "Sortear novamente";
    botaoSortear.disabled = true;

    setTimeout(() => {
        const reiniciarSorteio = confirm("Deseja fazer outro sorteio?");
        if (reiniciarSorteio) {
            reiniciarSorteio();
        } else {
            alert("O sorteio foi encerrado.");
        }
    }, 1000); 
}
