let scegli = prompt(`Scegli Pari o Dispari`);
let numero = parseInt(prompt(`Inserisci un numero che vada da 1 a 5`));
//funzione 1
let random = getRandomNum(1,5);
//funzione 2
let risulatoSomma = somma(numero,random);
//fuznione 3
let PD = pariDispari (risulatoSomma, scegli);

console.log(numero)

function getRandomNum(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random)

function somma(numeroUtente, numeroPc)
{
    return numero + random;
}

console.log(risulatoSomma)

function pariDispari(SommaDeiDueNumeri, scegliPariDisapri)
{
    if(risulatoSomma % 2 == 0 && scegli == `pari`){
        alert(`hai vinto`)
    }

    else if (risulatoSomma % 2 != 0 && scegli == `dispari`){
        alert(`hai vinto`)
    }

    else {
        alert(`hai perso`)
    }
}

console.log(PD)