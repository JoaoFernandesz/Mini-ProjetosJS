const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {
    const cores = ['red','yellow','green']
    const color = cores[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalID);
}

const turnOn = {
    'red':       () => img.src = 'vermelho.png',
    'yellow':    () => img.src = 'amarelo.png',
    'green':     () => img.src = 'verde.png',
    'automatic': () => intervalID = setInterval(changeColor, 1000)
}


buttons.addEventListener('click', trafficLight);