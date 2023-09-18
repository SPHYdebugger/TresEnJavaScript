let turno = 0;
const tablero = [];
const imagenes = ['sources/X.png', 'sources/O.png'];
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
        alert('¡Enhorabuena jugador ' + imagen + '!');
    }
}

const haGanado = () =>{
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }else{
        return false;
    }
}

document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e,i)));
