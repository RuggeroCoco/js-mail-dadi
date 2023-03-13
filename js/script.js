// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const submitBtn = document.getElementById("submit-btn");

let userNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il tuo numero è ${userNumber}`);

let pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il numero del computer è ${pcNumber}`);

submitBtn.addEventListener("click", function () {
    if (userNumber > pcNumber) {
        result.innerHTML = "Hai vinto!";
    } else if (pcNumber > userNumber); {
        result.innerHTML = "Hai perso!";
    } else (pcNumber === userNumber); {
       result.innerHTML = "Avete pareggiato";
    }
});
