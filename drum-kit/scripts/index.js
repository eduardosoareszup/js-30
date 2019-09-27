const drumKitKeys = [
    {
        keyLetter: 'a',
        keyNumber: '65'
    },
    {
        keyLetter: 's',
        keyNumber: '83'
    },
    {
        keyLetter: 'd',
        keyNumber: '68'
    },
    {
        keyLetter: 'f',
        keyNumber: '70'
    },
    {
        keyLetter: 'g',
        keyNumber: '71'
    },
    {
        keyLetter: 'h',
        keyNumber: '72'
    },
    {
        keyLetter: 'j',
        keyNumber: '74'
    },
    {
        keyLetter: 'k',
        keyNumber: '75'
    },
    {
        keyLetter: 'l',
        keyNumber: '76'
    },
    
];


window.addEventListener('keydown', (e) => {
    startSound(e.key);    
});

const clickKey = (letter) => {
    startSound(letter);
}


const startSound = (keySelected) => {
    drumKitKeys.forEach(key => {
        if (keySelected === key.keyLetter) {
            const audio = document.querySelector(`audio[data-key="${key.keyNumber}"]`);
            audio.play();    
        }
    });
}
