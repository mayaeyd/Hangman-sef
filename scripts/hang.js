var pressedKey = "";

document.addEventListener("keypress",(e)=>{
    pressedKey = e.key.toLowerCase();
    console.log(pressedKey);
//meteor
    for(const char of randomWord){
        if(char === pressedKey){
            const letterIndex = letters.indexOf(char);
            dashes[letterIndex] = char;
        }
        else{
            document.querySelector(".head").classList.remove("hidden");
        }  
    }

    console.log("Word prog: ",dashes.join(" "));

    answerSection.innerHTML = dashes.join(" ")
    
    pressedKey=""
});



