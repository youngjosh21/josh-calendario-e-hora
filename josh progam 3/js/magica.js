//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const ddia = document.querySelector('#ddia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const texto = document.querySelector('#texto')
//
setInterval(relogio, 1000)
//

function relogio(){


    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let sec = dia.getSeconds()
    let d = dia.getDate()
    let m = dia.getMonth() + 1
    let y = dia.getFullYear()


    if (hr < 10){ hr = "0" + hr}

    if (min < 10) {min = "0" + min}

    if (sec < 10){sec = "0" + sec}

    if (d < 10) {d = '0' + d}
    
    if (m < 10) {m = '0' + m}
   

    
    if(hr > 5 && hr<12){
    texto.textContent = 'Bom Dia!'
    
    }
    else if(hr > 12 && hr<18){
    texto.textContent = 'Boa Tarde!'
    
    }
    if(hr > 18 && hr<5){
    texto.textContent = 'boa noite!'
    
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
    ddia.textContent = d
    mes.textContent = m
    ano.textContent = y


console.log(y)

}