const images = ['../images/Pik.png', '../images/Karo.png', '../images/Skocko.png', 
    '../images/Tref.png', '../images/Herc.png', '../images/Zvezda.png'];

const symbols = new Map();
symbols.set('pik', 0);
symbols.set('karo', 1);
symbols.set('skocko', 2);
symbols.set('tref', 3);
symbols.set('herc', 4);
symbols.set('zvezda', 5);

export default {
    images,
    symbols
};