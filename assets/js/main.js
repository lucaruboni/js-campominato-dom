/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


/* Creare al click di un bottone una griglia 10x10.
Ogni volta che clicco su un quadrato questo si colora */


//seleziono i valori delle difficoltà






// dopo che ho scelto l'opzione devo fare in modo che il bottone decida che griglia creare in base alla selezione della difficoltà

//seleziono il bottone nella dom

const level = document.querySelector('select')

let difficult = document.querySelectorAll('.difficoltà')
console.log(difficult)

let difficultEl = document.querySelector('.difficoltà_niente');
console.log(difficultEl)

let difficultNoobEl = Number(document.querySelector('.difficoltà_1').value);
console.log(difficultNoobEl)

let difficultSundayEl = Number(document.querySelector('.difficoltà_2').value);
console.log(difficultSundayEl)

let difficultMlgEl = Number(document.querySelector('.difficoltà_3').value);
console.log(difficultMlgEl)
//creo l'eventlistener al click

 const btnElement = document.querySelector('button')

 /*btnElement.addEventListener('click', function(e){
    e.preventDefault()
    if(typeof difficult !== Number){
        difficult = Number(difficult)
        console.log(Number(difficult.value)) 
    }
    
    return Number(difficult.value)

}) */
// dopo che ho scelto l'opzione devo fare in modo che il bottone decida che griglia creare in base alla selezione della difficoltà

//seleziono il bottone nella dom



//event listener al click del btn che crea la griglia

let winLose = document.getElementById('win_lose')

btnElement.addEventListener('click', function(e){
   
    
           //seleziono il contenitore delle mie celle
    const container = document.querySelector(".row");


    let maxCellsNumber = 100
    
    //ciclo per creare le celle

    const cellList = [

    ]



    let cellNumber
    let cell
    for (let i = 0; i < maxCellsNumber; i++) {
    
         cellNumber = Number(i + 1)
         /* console.log(`N°${Number(cellNumber)}`) */
         cellList.push(cellNumber)
         
        
        cell = `<div class="cell active">${Number([i])}</div>`
        /* console.log(cell) */
        container.innerHTML += cell
        
    }
    
    console.log(cellList)

// quando clicco su una cella me la colora


const cells = document.querySelectorAll('.cell.active')
console.log(cells)

for (let i = 0; i < cells.length; i++){
    const cellSelected = cells[i];
    /* console.log(cellSelected) */
    cellSelected.addEventListener('click', function(){

        /* console.log(i)
        console.log(bombsList)
        console.log(bombsList.includes(i)) */
        
        if (bombsList.includes(i) === false) {
            this.classList.toggle('bg_black')

            console.log(Number([i]))
            console.log(`You clicked cell n° ${[i]}`)
        }    
            
        else if (cellList === bombsList.includes(i)) {
            
            winLose.innerHTML = 'Hai Vinto!'
        } 

        else{
            
            this.classList.toggle('bg-danger')
            console.log('you clicked a bomb')
            winLose.innerHTML = 'Hai Perso'

    } 
 
   
})
   
    }

})
  


/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.
Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */ 
const bombsList = [

]

let bombsNumber

for (let i = 0; i < 16; i++) {
    
    bombsNumber = Number(Math.floor(Math.random() * 101))
    console.log(bombsNumber)  
    
    bombsList.push(bombsNumber)
    console.log(bombsList)
}


