let turno = 0;
const tablero = [];
const imagenes = ['sources/caraPapi.jpg', 'sources/caraSofi.jpg'];
let combinación = 0;

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const imgIndex = turno % 2;
    const imagen = imagenes[imgIndex];
    
    btn.style.backgroundImage = `url(${imagen})`;
    btn.style.backgroundSize = 'cover';
    
    tablero[pos] = imagen;
    
    if (haGanado()) {
        alert('¡Enhorabuena jugador ' + imagen + '!' + 'combinación' + combinación);
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

document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e,i)));
