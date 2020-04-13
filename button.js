const buttons = document.querySelectorAll(".button")

let expandir = function (b) {
    console.log("te amo julia delis")
}
buttons.forEach(button => {
    button.addEventListener('click',function () {
        expandir(button)
    })
});