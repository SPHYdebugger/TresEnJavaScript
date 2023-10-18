let turno = 1;
const tablero = new Array(9).fill(null);
let jugador1 = '';
let jugador2 = '';
let nombreJugador1 = '';
let nombreJugador2 = '';

const btnPulsado = (e, pos) => {

    if (tablero[pos] !== null) {
        mostrarAlerta('Esta casilla ya está usada, por favor elige otra.');
        return;
    }

    turno++;
    const btn = e.target;
    const imgIndex = turno % 2;
    const imagen = imgIndex === 0 ? jugador1 : jugador2;

    btn.style.backgroundImage = `url(${imagen})`;
    btn.style.backgroundSize = 'cover';

    tablero[pos] = imagen;
    
    // Mostrar ganador y casillas ganadoras
    if (haGanado()) {
        setTimeout(() => {
            const nombreGanador = turno % 2 === 0 ? nombreJugador1 : nombreJugador2;
            mostrarAlerta('¡Enhorabuena jugador ' + nombreGanador + '!');
            
        }, 100);
        
        if (combinación == 1){
            document.querySelectorAll('button')[0].classList.add('ganador');
            document.querySelectorAll('button')[1].classList.add('ganador');
            document.querySelectorAll('button')[2].classList.add('ganador');
        }else if (combinación == 2){
            document.querySelectorAll('button')[3].classList.add('ganador');
            document.querySelectorAll('button')[4].classList.add('ganador');
            document.querySelectorAll('button')[5].classList.add('ganador');
        }else if (combinación == 3){
            document.querySelectorAll('button')[6].classList.add('ganador');
            document.querySelectorAll('button')[7].classList.add('ganador');
            document.querySelectorAll('button')[8].classList.add('ganador');
        }else if (combinación == 4){
            document.querySelectorAll('button')[0].classList.add('ganador');
            document.querySelectorAll('button')[3].classList.add('ganador');
            document.querySelectorAll('button')[6].classList.add('ganador');
        }else if (combinación == 5){
            document.querySelectorAll('button')[1].classList.add('ganador');
            document.querySelectorAll('button')[4].classList.add('ganador');
            document.querySelectorAll('button')[7].classList.add('ganador');
        }else if (combinación == 6){
            document.querySelectorAll('button')[2].classList.add('ganador');
            document.querySelectorAll('button')[5].classList.add('ganador');
            document.querySelectorAll('button')[8].classList.add('ganador');
        }else if (combinación == 7){
            document.querySelectorAll('button')[0].classList.add('ganador');
            document.querySelectorAll('button')[4].classList.add('ganador');
            document.querySelectorAll('button')[8].classList.add('ganador');
        }else if (combinación == 8){
            document.querySelectorAll('button')[2].classList.add('ganador');
            document.querySelectorAll('button')[4].classList.add('ganador');
            document.querySelectorAll('button')[6].classList.add('ganador');
        }
    }
}

    // Combinaciones ganadoras
const haGanado = () =>{
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true, combinación = 1;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true, combinación = 2;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true, combinación = 3;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true, combinación = 4;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true, combinación = 5;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true, combinación = 6;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true, combinación = 7;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true, combinación = 8;
    }else{
        return false;
    }
}

    // Seleccionar los avatares
document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e,i)));

    function seleccionarImagen1(rutaImagen) {
        jugador1 = rutaImagen;
        console.log('Imagen seleccionada para jugador 1:', jugador1);
    }
    
    function seleccionarImagen2(rutaImagen) {
        jugador2 = rutaImagen;
        console.log('Imagen seleccionada para jugador 2:', jugador2);
    }
    
    // Agregar eventos de clic a las imágenes
    document.getElementById('imagen11').addEventListener('click', function () {
        seleccionarImagen1('caraSofi.png');
        nombreJugador1 = 'SOFIA';
        document.getElementById('imagen11').classList.add('seleccionado');
        document.getElementById('imagen21').classList.add('noSeleccionado');
        document.getElementById('imagen31').classList.add('noSeleccionado');
    });
    
    document.getElementById('imagen21').addEventListener('click', function () {
        seleccionarImagen1('caraMami.png');
        nombreJugador1 = 'MARIA';
        document.getElementById('imagen21').classList.add('seleccionado');
        document.getElementById('imagen11').classList.add('noSeleccionado');
        document.getElementById('imagen31').classList.add('noSeleccionado');
    });
    
    document.getElementById('imagen31').addEventListener('click', function () {
        seleccionarImagen1('caraPapi.png');
        nombreJugador1 = 'SANTI';
        document.getElementById('imagen31').classList.add('seleccionado');
        document.getElementById('imagen11').classList.add('noSeleccionado');
        document.getElementById('imagen21').classList.add('noSeleccionado');
    });
    
    document.getElementById('imagen12').addEventListener('click', function () {
        seleccionarImagen2('caraSofi.png');
        nombreJugador2 = 'SOFIA';
        document.getElementById('imagen12').classList.add('seleccionado');
        document.getElementById('imagen22').classList.add('noSeleccionado');
        document.getElementById('imagen32').classList.add('noSeleccionado');
    });
    
    document.getElementById('imagen22').addEventListener('click', function () {
        seleccionarImagen2('caraMami.png');
        nombreJugador2 = 'MARIA';
        document.getElementById('imagen22').classList.add('seleccionado');
        document.getElementById('imagen12').classList.add('noSeleccionado');
        document.getElementById('imagen32').classList.add('noSeleccionado');
    });
    
    document.getElementById('imagen32').addEventListener('click', function () {
        seleccionarImagen2('caraPapi.png');
        nombreJugador2 = 'SANTI';
        document.getElementById('imagen32').classList.add('seleccionado');
        document.getElementById('imagen12').classList.add('noSeleccionado');
        document.getElementById('imagen22').classList.add('noSeleccionado');
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
      
     
      
      
