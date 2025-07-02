# Jokenpo (Pedra, Papel e Tesoura)

Este projeto é um jogo interativo de Jokenpo (Pedra, Papel e Tesoura) desenvolvido em HTML, CSS e JavaScript, onde você joga contra a máquina. O jogo possui interface amigável, placar dinâmico e transições suaves para uma experiência divertida.

## Funcionalidades

- Interface responsiva e moderna.
- Três botões para escolher: Pedra 🥊, Papel 🖐️ ou Tesoura ✌️.
- A máquina faz uma escolha aleatória a cada rodada.
- Exibição do emoji correspondente à escolha do jogador e da máquina.
- Mensagem dinâmica indicando vitória, empate ou derrota, com cores diferentes:
  - Verde para vitória
  - Vermelho para derrota
  - Cor padrão para empate
- Placar atualizado automaticamente para o jogador e para a máquina.
- Transições suaves ao trocar emojis e mensagens de resultado.

## Como jogar

1. Abra o arquivo `index.html` em seu navegador.
2. Clique em um dos botões para escolher Pedra, Papel ou Tesoura.
3. Veja o emoji da sua escolha e da máquina aparecerem abaixo dos títulos.
4. Confira a mensagem de resultado (vitória, empate ou derrota) e o placar atualizado.

## Estrutura do projeto

- `index.html` — Estrutura da interface do jogo.
- `style.css` — Estilos para layout, cores, responsividade e transições.
- `script.js` — Lógica do jogo:
  - Função `humanChoice(choice)`: exibe no console a escolha do jogador.
  - Função `computerChoice()`: retorna aleatoriamente a escolha da máquina.
  - Função `playGame(human)`: executa a lógica principal do jogo, sorteia a jogada da máquina, exibe os emojis, atualiza o placar e mostra a mensagem de resultado com transição suave.
  - Função auxiliar `emoji(jogada)`: retorna o emoji correspondente à jogada.
  - Função auxiliar `fadeTransition(element, newText)`: aplica transição suave ao trocar textos/emojis.
- Pasta `imagens/` — Contém imagens ilustrativas de vitória, empate e derrota para enriquecer a documentação.

## Exemplos Visuais

### Vitória
![Vitória](imagens/vitoria.png)

### Empate
![Empate](imagens/empate.png)

### Derrota
![Derrota](imagens/derrota.png)

## Objetivo

O objetivo é se divertir jogando Jokenpo contra a máquina e tentar vencer o maior número de rodadas possível! O placar é atualizado automaticamente e o resultado de cada rodada é exibido de forma clara e animada.

---

Sinta-se à vontade para modificar e melhorar o projeto!