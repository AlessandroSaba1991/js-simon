/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//mi seleziono l'elemento della dom dove andare ad appendere i numeri
const element_container = document.querySelector('.container')
const numeri_random = []
const numeri_indovinati = []
    //creare 5 numeri casuali
for (let i = 0; i < 5; i++) {
    const number_random = parseInt(Math.floor(Math.random() * 100));
    numeri_random.push(number_random)
    const element_number = document.createElement('div');
    element_number.append(number_random)
    element_container.append(element_number)
}

setTimeout(indovina, 3000);

function indovina() {

    for (i = 0; i < 5; i++) {
        const numero_utente = parseInt(prompt('Inserisci il numero'))
        if (numeri_random.includes(numero_utente)) {
            numeri_indovinati.push(numero_utente)
        }
    }
    console.log(`Hai invinato ${numeri_indovinati.length} numeri e sono ${numeri_indovinati}`);
}