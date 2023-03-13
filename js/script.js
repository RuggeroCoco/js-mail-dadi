// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const searchInput = document.getElementById("search-input");
const availableEmails = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
  "user5@example.com",
  "user6@example.com",
];

const submitBtn = document.getElementById("submit-btn");

const result = document.getElementById("result");

submitBtn.addEventListener("click", function () {
  console.log(searchInput.value);
  if (availableEmails.includes(searchInput.value)) {
    result.innerHTML = "Accesso consentito";
  } else {
    result.innerHTML = "Accesso negato";
  }
});
