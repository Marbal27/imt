

let btn = document.getElementById('btn')
let num1 = document.getElementById('height_input')
let num2 = document.getElementById('weight_input')
let num3 = document.getElementById('result_input')

let o = document.getElementById('helpId3')
let oo = document.getElementById('helpId1')
let ooo = document.getElementById('helpId2')


btn.addEventListener('click', function () {
    let n1 = +num1.value / 100;//рост
    let n2 = +num2.value //вес

    if (n1 < 0) {
        oo.textContent = "проверьте данные роста"
        oo.style = "color: red !important"
        return
    }

    if (n2 < 0) {
        ooo.textContent = "проверьте данные веса"
        ooo.style = "color: red !important"
        return
    }


    let imt = n2 / (n1 * n1)
    num3.value = imt.toFixed(2)

    if (imt > 30) {
        o.textContent = "ожирение у вас"
        o.style = "color: red !important"

    }
    else if (imt < 18.5) {
        o.textContent = "нехватка веса"
        o.style = "color: blue !important"
    }
    else {
        o.textContent = "норма веса"
        o.style = "color: green !important"
    }

})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
        console.log('SW registred', registration)
    })
    .catch(error => {
        console.log('SW failed', error)
    })
}