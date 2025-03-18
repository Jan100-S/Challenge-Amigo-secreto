// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  let campoNome = document.getElementById('amigo');
 let nome = campoNome.value.trim(); // Remove espaços em branco no início e no fim

  // Valida se o campo está vazio
  if (nome === '') {
    alert('Por favor, insira um nome.'); // Exibe um alerta de erro
    return; // Interrompe a execução da função
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);

  // Atualiza a lista de amigos na interface
  atualizarListaAmigos();

  // Limpa o campo de entrada
  campoNome.value = '';
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista atual

  // Adiciona cada nome da lista ao HTML
  for (let i = 0; i < amigos.length; i++) {
    let itemLista = document.createElement('li');
    itemLista.textContent = amigos[i];
    listaAmigos.appendChild(itemLista);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  // Valida se há amigos disponíveis
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para sortear.');
    return;
  }

  // Gera um índice aleatório
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado na interface
  let resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}