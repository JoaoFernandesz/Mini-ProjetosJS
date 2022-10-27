const interruptor = document.getElementById ( 'interruptor' );
const lamp = document.getElementById ( 'lamp' );


function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}


function ligarDesligar () {
    if (!isLampBroken ()) {

        if ( interruptor.textContent ==  'desligar') {
            lamp.src = './img/desligada.jpg';
            interruptor.textContent = 'ligar';
            
        } else {
            lamp.src = './img/ligada.jpg';
            interruptor.textContent = 'desligar';
        }
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

interruptor.addEventListener ('click', ligarDesligar);
lamp.addEventListener ('mouseover', ligarDesligar);
lamp.addEventListener ('mouseleave', ligarDesligar);
lamp.addEventListener ('dblclick', lampBroken);