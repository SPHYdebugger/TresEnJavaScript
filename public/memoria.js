const images = ["sources/1.png", "sources/2.png", "sources/3.png", "sources/4.png", "sources/5.png", "sources/6.png"];
const gameBoard = document.getElementById("game-board");

let counter = 6;
let flippedCards = [];
let matchedPairs = 0;
let intentosRestantes = 6;
const intentosRestantesElemento = document.getElementById("intentosRestantes");

// Función para cargar imágenes aleatoriamente
function shuffleImages() {
    const shuffledImages = [...images, ...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    return shuffledImages;
}

// Función para crear los botones del juego
function createGameButtons() {
    const shuffledImages = shuffleImages();
    console.log(shuffleImages);
    for (let i = 0; i < shuffledImages.length; i++) {
        const button = document.createElement("button");
        button.classList.add("game-button");
        button.dataset.image = shuffledImages[i];
        button.addEventListener("click", handleCardClick);
        gameBoard.appendChild(button);
    }
}

// Función para manejar el clic en una carta
function handleCardClick() {
    if (intentosRestantes === 0) {
        finalizarJuego();
    }
    if (flippedCards.length < 2) {
        const card = this;
        card.style.backgroundImage = `url(${card.dataset.image})`;
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
                // Coincidencia
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        card.style.visibility = "hidden";
                    });
                    flippedCards = [];
                    matchedPairs++;
                    if (matchedPairs === images.length) {
                        mostrarAlerta('Has ganado!!!');
                    }
                }, 1000);
            } else {
                // No hay coincidencia
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        card.style.backgroundImage = "";
                        card.classList.remove("flipped");
                    });
                    flippedCards = [];
                    intentosRestantes --;
                    actualizarIntentosRestantes();
                }, 1000);
            }
        }
        
    }
    
}

// Actualizar los intentos restantes
function actualizarIntentosRestantes() {
    intentosRestantesElemento.textContent = intentosRestantes;
}

// Iniciar el juego
createGameButtons();
actualizarIntentosRestantes();

// Finalizar el juego
function finalizarJuego() {
    // Mostrar las cartas que no se han girado
    const cartas = document.querySelectorAll(".game-button");
    cartas.forEach((carta) => {
        if (!carta.classList.contains("flipped")) {
            carta.style.backgroundImage = `url(${carta.dataset.image})`;
            carta.style.visibility = "visible";
        }
    });

    // Deshabilitar el clic en las cartas
    cartas.forEach((carta) => {
        carta.removeEventListener("click", handleCardClick);
    });

    // Mostrar un mensaje de fin de juego
    setTimeout(() => {
        mostrarAlerta('Has agotado los intentos, has perdido');
    }, 1000);
}


function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('alerta');
    alerta.innerText = mensaje;
  
    // Mostrar la alerta
    alerta.style.display = 'block';
              
    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {     
        setTimeout(() => {
        alerta.style.display = 'none';
            }, 300);
    }, 3000);
}

