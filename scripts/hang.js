var pressedKey = "";
var mistakes = 0;

document.addEventListener("keypress",(e)=>{
    pressedKey = e.key.toLowerCase();
    console.log(pressedKey);
    var isCorrectGuess = false;

    for(let i=0; i<randomWord.length; i++){
        if(randomWord[i] === pressedKey){
            dashes[i] = pressedKey;
            isCorrectGuess = true;
        }
    }
        
    if(!isCorrectGuess){
        mistakes +=1;
            switch(mistakes){
                case 1:
                    document.querySelector(".head").classList.remove("hidden");
                    break;
                case 2:
                    document.querySelector(".body").classList.remove("hidden");
                    break;
                case 3:
                    document.querySelector(".left-hand").classList.remove("hidden");
                    break;
                case 4:
                    document.querySelector(".right-hand").classList.remove("hidden");
                    break;
                case 5:
                    document.querySelector(".left-leg").classList.remove("hidden");
                    break;
                case 6:
                    document.querySelector(".right-leg").classList.remove("hidden");
                    break;
            }
        if(mistakes === 6) window.location.href="./../lose.html";
        
    }
            

    answerSection.innerHTML = dashes.join(" ");
    console.log(dashes);
    

    if(!dashes.includes(' __ ')) window.location.href="./../win.html";

    pressedKey=""
});



