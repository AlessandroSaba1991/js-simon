/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//mi seleziono l'elemento della dom dove andare ad appendere i numeri
const element_container = document.querySelector('.container')
    //creo una lista vuota dove inserire i numeri generati 
const numeri_random = []
    //creo una lista vuota per i numeri indovinati
const numeri_indovinati = []

//creare 5 numeri casuali unici
while (numeri_random.length != 5) {
    //creo il numero 
    const number_random = parseInt(Math.floor(Math.random() * 100));
    //controllo se è già presente nella lista dei numeri random
    if (!numeri_random.includes(number_random)) {
        //esito positivo lo pusho
        numeri_random.push(number_random)
            //creo un elemento 
        const element_number = document.createElement('div');
        //gli assegno una classe
        element_number.classList.add('numeri')
            //attacco il numero all'elemento
        element_number.append(number_random)
            //attacco l'elemento al container della dom
        element_container.append(element_number)
    }
}

//setto una timing function con 30 secondi di ritardo 
setTimeout(function() {
    //pulisco la dom dai numeri visualizzati fino ad adesso
    element_container.innerHTML = ''
        //faccio partire la funzione indovina con 1ms di ritardo (altrimenti mi faceva inserire i numeri tramite prompt con i numeri ancora in visualizzazione nella dom)
    setTimeout(indovina, 1)
}, 30000)

//creo la funzione 
function indovina() {

    //faccio partire un ciclo per fa inserire 5 numeri all'utente
    for (i = 0; i < 5; i++) {
        const numero_utente = parseInt(prompt('Inserisci il numero'))
            //controllo che il numero inserito non è presente nella lista numeri indovinati
        if (!numeri_indovinati.includes(numero_utente)) {
            //controllo se il numero inserito è presente nella lista dei numeri random
            if (numeri_random.includes(numero_utente)) {
                //lo pusho nella lista numeri indovinati
                numeri_indovinati.push(numero_utente)
            }
        }
    }
    //comunico il risultato a schermo in un div
    const element_risultato = document.createElement('div')
    element_risultato.classList.add('risultato')
    element_risultato.innerHTML = `Hai indovinato ${numeri_indovinati.length} su ${numeri_random.length} numeri e sono: ${numeri_indovinati}.`
    element_container.append(element_risultato)

}