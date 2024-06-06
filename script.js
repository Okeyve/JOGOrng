let randomNumber, attempts;

function startGame() {
    // Gera um número aleatório entre 1 e 500000
    randomNumber = Math.floor(Math.random() * 500000) + 1;
    attempts = 0;
    setMessage("");
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guessField").value);

    if (guess >= 1 && guess <= 500000) {
        attempts++;

        if (guess === randomNumber) {
            setMessage(`Parabéns! Você acertou o número secreto ${randomNumber} em ${attempts} tentativas!`);
        } else if (guess < randomNumber) {
            setMessage("Tente um número maior!");
        } else if (guess > randomNumber) {
            setMessage("Tente um número menor!");
        }
    } else {
        setMessage("Por favor, insira um número válido entre 1 e 500.000.");
    }
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

function resetGame() {
    startGame();
    document.getElementById("guessField").value = "";
}

// Adiciona um ouvinte de eventos para capturar a tecla "Enter"
document.getElementById("guessField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        checkGuess(); // Chama a função para verificar o palpite
    }
});

// Inicia o jogo quando a página é carregada
window.onload = startGame;
