const api = 'http://api.quotable.io/random';
let text=document.querySelector("#text");
let btn=document.querySelector("#btn");
let input=document.querySelector("#input");
let time=document.getElementById('time');
let err=document.querySelector("#error");
let comp=document.querySelector("#comp");
let countdown;
let timeLeft = 60;

// let q0=function Quote() {
//     return fetch(api)
//     .then(response => response.json())
//     .then(data => data.content)
// }
// let var=

function startCountdown() {
    countdown = setInterval(function() {
        timeLeft--;
        time.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            time.innerText = "Time's up!";
            input.disabled=true;
        }
    }, 1000);
}
btn.addEventListener("click",function(){
    input.disabled=false;
    startCountdown();
});
comp.addEventListener("click",compareText);

function compareText() {
    let originalText = text.innerText.trim();
    let inputText = input.value.trim();
    let errors = 0;
    let minLength = Math.min(originalText.length, inputText.length);
    for (let i = 0; i < minLength; i++) {
        if (originalText[i] !== inputText[i]) {
            errors++;
        }
    }
    err.innerText = `errors: ${errors}`;   
}
