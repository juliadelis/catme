const gameButtons = document.querySelectorAll("ul li a img")
const seletor = document.querySelectorAll(".selected")
const play = document.querySelector("div.play")
let selected= false
let n = 0

for (let i = 0; i < gameButtons.length; i++) {
    const button = gameButtons[i];
   button.addEventListener("click",function () {
            selected=true
            n=n+1
            seletor[i].classList.toggle("opacity")

  

    })
    
}
play.addEventListener("click",function () {
    if (n==1 && selected==true) {
        alert("Conecte o bluetooth ao dispositivo")
    }
    if(selected==false){
        alert("Escolha uma categoria")
    }
    if(n>1 && selected==true){
        alert("Escolha apenas uma categoria")
    }
    
})
