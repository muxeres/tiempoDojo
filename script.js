let elementoCookie = document.getElementById("message-cookie")
let tempElements = document.querySelectorAll("#temp")

let temperaturesC = [24,18,27,19,21,16,26,21]
let temperaturesF = [75,65,80,66,69,61,78,70]

let alerts =function () {
    let alerta = "Loading weather report..."
    alert(alerta)
}
let removes= function () {
    elementoCookie.remove()
}
let changeTemp = function (event) {
    if (event.value==="celcius") {
        for (let i = 0; i < temperaturesC.length; i++) {
            tempElements[i].innerText =`${temperaturesC[i]}°`
        }
    }else if(event.value==="fahrenheit"){
        for (let i = 0; i < temperaturesF.length; i++) {
            tempElements[i].innerText =`${temperaturesF[i]}°`
        }
    }
}