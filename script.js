/**
 * Função que exibe no console a escolha do jogador humano.
 * @param {string} choice - A escolha do jogador ('rock', 'paper' ou 'scissors').
 */
let pontosHumano = 0;
let pontosComputador = 0;

const humanChoice = (choice) => {
    console.log(`Human chose: ${choice}`);
}

/**
 * Função que retorna aleatoriamente a escolha do computador.
 * @returns {string} - A escolha do computador ('rock', 'paper' ou 'scissors').
 */
const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Função principal do jogo. Recebe a escolha do humano, sorteia a do computador,
 * exibe os resultados na tela e no console, e mostra o emoji correspondente em cada container.
 * @param {string} human - A escolha do jogador humano ('rock', 'paper' ou 'scissors').
 */
const playGame = (human) => {
    const computer = computerChoice();
    console.log(`Computer chose: ${computer}`);

    // Seleciona os containers pelo id
    const containerHuman = document.querySelector('#human');
    const containerComputer = document.querySelector('#computer');

    // Seleciona os h1 de cada container
    const h1Human = containerHuman.querySelector('h1');
    const h1Computer = containerComputer.querySelector('h1');

    // Remove o emoji anterior, se já existir
    const jogadaHumanaExistente = containerHuman.querySelector('.jogada-humana');
    if (jogadaHumanaExistente) jogadaHumanaExistente.remove();

    const jogadaComputadorExistente = containerComputer.querySelector('.jogada-computador');
    if (jogadaComputadorExistente) jogadaComputadorExistente.remove();

    // Função auxiliar para retornar o emoji correspondente à jogada
    const emoji = (jogada) => {
        if (jogada === 'rock') return '👊';
        if (jogada === 'paper') return '🖐️';
        if (jogada === 'scissors') return '✌️';
    };

    // Cria e insere o emoji da jogada do humano abaixo do h1 do container do humano
    const divHumano = document.createElement('div');
    divHumano.className = 'jogada-humana';
    divHumano.style.fontSize = '80px'; // Fonte maior
    divHumano.style.marginTop = '10px';
    divHumano.style.textAlign = 'center';
    divHumano.style.transition = 'transform 0.3s ease'; // Adiciona transição suave
    divHumano.textContent = emoji(human);
    h1Human.insertAdjacentElement('afterend', divHumano);

    // Cria e insere o emoji da jogada do computador abaixo do h1 do container do computador
    const divComputador = document.createElement('div');
    divComputador.className = 'jogada-computador';
    divComputador.style.fontSize = '80px'; // Fonte maior
    divComputador.style.marginTop = '10px';
    divComputador.style.textAlign = 'center';
    divComputador.style.transition = 'transform 0.3s ease'; // Adiciona transição suave
    divComputador.textContent = emoji(computer);
    h1Computer.insertAdjacentElement('afterend', divComputador);

    // Atualiza a pontuação
    const spanHumano = document.querySelector('.your-score span');
    const spanComputador = document.querySelector('.machine-score span');

    // Seleciona o span da mensagem de resultado
    const spanResultado = document.querySelector('.result-text span');
    spanResultado.style.transition = 'transform 0.3s ease';

    // Função auxiliar para aplicar fade
    function fadeTransition(element, newText) {
        element.classList.add('fade-out');
        setTimeout(() => {
            element.textContent = newText;
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
            setTimeout(() => {
                element.classList.remove('fade-in');
            }, 300);
        }, 300);
    }

    let mensagemDoResultado = '';

    if (human === computer) {
        mensagemDoResultado = "Empate!";
        spanResultado.style.color = ""; // Cor padrão (herda do CSS)
        console.log("It's a tie!");
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        mensagemDoResultado = "Você ganhou!";
        spanResultado.style.color = "green";
        console.log("You win!");
        pontosHumano++;
    } else {
        mensagemDoResultado = "Você perdeu!";
        spanResultado.style.color = "red";
        console.log("You lose!");
        pontosComputador++;
    }

    // Atualiza o texto dos spans de pontuação
    spanHumano.textContent = pontosHumano;
    spanComputador.textContent = pontosComputador;

    // Para o resultado:
    fadeTransition(spanResultado, mensagemDoResultado);

    // Para os emojis:
    fadeTransition(divHumano, emoji(human));
    fadeTransition(divComputador, emoji(computer));
}

