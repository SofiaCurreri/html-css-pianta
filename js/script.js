//Contatore che mi dice quanto manca per il prossimo Hanami (considerando data inizio Hanami il 28/03/2024, anche se notoriamente la data è variabile)

//data di inizio Hanami, quindi è la mia data di "scadenza"
const dataHanami = new Date("2024-03-28T00:00:00").getTime();

const giorniEl = document.getElementById("giorni");
const oreEl = document.getElementById("ore");
const minutiEl = document.getElementById("minuti");
const secondiEl = document.getElementById("secondi");

function countdown(){
    //data di oggi
    const oggi = new Date().getTime();

    //tempo rimanente alla scadenza, mi viene restituito in millisecondi
    const tempoRimanente = dataHanami - oggi;

    //devo trasformare questa differenza in giorni, ore, minuti e secondi
    const giorni = Math.floor(tempoRimanente / (24*60*60*1000));
    const ore = Math.floor((tempoRimanente % (24*60*60*1000)) / (1000*60*60));
    const minuti = Math.floor((tempoRimanente % (1000*60*60)) / (1000*60));
    const secondi = Math.floor((tempoRimanente % (1000*60)) / (1000));

    //per scrittura corretta numeri su tabellone countdown
    secondiEl.innerHTML = (secondi < 10) ? '0' + secondi : secondi;
    minutiEl.innerHTML = (minuti < 10) ? '0' + minuti : minuti;
    oreEl.innerHTML = (ore < 10) ? '0' + ore : ore;
    giorniEl.innerHTML = (giorni < 10) ? '0' + giorni : giorni;

    const contatore = document.getElementById("contatore");
    // contatore.innerHTML = `Mancano ${giorni} gg ${ore} h ${minuti} min ${secondi} s al prossimo Hanami!`; 

    if(tempoRimanente < 0){
        document.getElementById("contatore").innerHTML = "Il conto alla rovescia è terminato! È tempo di Hanami!";
    }    

}

//aggiorno il countdown ogni secondo, ovvero ogni 1000 ms
setInterval(countdown, 1000);