// Función para cargar palabras desde el archivo
async function cargarPalabras() {
    try {
        const response = await fetch('palabras.txt'); // Ruta al archivo de palabras
        if (!response.ok) {
            throw new Error('Error al obtener palabras desde el archivo');
        }
        const contenido = await response.text();
        palabras = contenido.split('\n').map((linea) => linea.trim());
        console.log('Palabras cargadas desde el archivo:', palabras);

        // Luego de cargar las palabras, iniciar el juego
        iniciarJuego();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función para cargar palabras cuando sea necesario
cargarPalabras();

  // seleccionar una palabra al azar
  function seleccionarPalabra() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
}

        let palabraSeleccionada = "";
        let letrasAdivinadas = [];
        let intentosRestantes = 6;

        // Elementos del HTML
        const palabraElemento = document.getElementById("palabra");
        const intentosRestantesElemento = document.getElementById("intentosRestantes");
        const letrasUsadasElemento = document.getElementById("letras");
        const adivinaLetraElemento = document.getElementById("adivinaLetra");
        const adivinaBtn = document.getElementById("adivinaBtn");

        


        // Iniciar el juego
        function iniciarJuego() {
            seleccionarPalabra();
            letrasAdivinadas = [];
            intentosRestantes = 6;
            mostrarPalabra();
            actualizarIntentosRestantes();
            actualizarLetrasUsadas();
        }

        // Función para mostrar la palabra con letras adivinadas
        function mostrarPalabra() {
            let palabraMostrada = "";
            for (let letra of palabraSeleccionada) {
                if (letrasAdivinadas.includes(letra)) {
                    palabraMostrada += letra + " ";
                } else {
                    palabraMostrada += " _ ";
                }
            }
            palabraElemento.textContent = palabraMostrada;
        }

        // Actualizar los intentos restantes
        function actualizarIntentosRestantes() {
            intentosRestantesElemento.textContent = intentosRestantes;
        }

        // Actualizar las letras usadas
        function actualizarLetrasUsadas() {
            letrasUsadasElemento.textContent = letrasAdivinadas.join(", ");
        }

        // Comprobar la letra
        function adivinarLetra(letra) {
            if (!letrasAdivinadas.includes(letra)) {
                letrasAdivinadas.push(letra);
                if (!palabraSeleccionada.includes(letra)) {
                    intentosRestantes--;
                }
                mostrarPalabra();
                actualizarIntentosRestantes();
                actualizarLetrasUsadas();
                verificarFinDelJuego();
            }
        }
        
        

        function verificarFinDelJuego() {
            if (intentosRestantes === 0) {
                mostrarAlerta('¡Perdiste! La palabra era: ' + palabraSeleccionada);
                mostrarPalabraCompleta(); // Muestra la palabra completa antes de reiniciar
                document.getElementById("reiniciarBtn").style.display = "inline"; // Muestra el botón de reinicio
            } else if (!palabraElemento.textContent.includes("_")) {
                mostrarAlerta('¡Ganaste! Has adivinado la palabra.');
                mostrarPalabraCompleta(); // Muestra la palabra completa antes de reiniciar
                
            }
        }

        function mostrarPalabraCompleta() {
            palabraElemento.textContent = palabraSeleccionada;
        }

        

        // Comprobar la letra
        adivinaBtn.addEventListener("click", function () {
            const letraAdivinada = adivinaLetraElemento.value.toLowerCase();
            if (letraAdivinada.length === 1 && letraAdivinada.match(/[a-z]/)) {
                adivinarLetra(letraAdivinada);
                adivinaLetraElemento.value = "";
            } else {
                mostrarAlerta('Ingresa una letra válida.');
            }
        });

        
    
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





