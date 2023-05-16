let numTage = document.querySelector(".num")
let mystart = document.querySelector(".mystart")
let myPlay = document.querySelector('.myPlay')
let myPause = document.querySelector('.myPause')
let myStop = document.querySelector('.myStop')
let plus_minus1 = document.querySelector('.plus_minus1')
let plus_minus = document.querySelector('.plus_minus')
let quadrupled = document.querySelector('.quadrupled')
let quadrupled_child = document.querySelector('.quadrupled_child')
let atriboots = document.querySelector(".atriboots")
let quadrupled1 = document.querySelector(".quadrupled1")
let quadrupled2 = document.querySelector(".quadrupled2")
let timset = null
let countType = null
let start = false
let num = 0
let a

function increment() {
    displey()
    a = true

    plus_minus.style.background = "red"
    plus_minus1.style.background = "#F0F0F0"
    countType = 1

    if (start) {
        timer()
        mystart.classList.add('d-none')

        if (myPause) {
            myPause.style.display = 'block'
            myPlay.style.display = "none"
        }

    } else {
        mystart.classList.remove('d-none')
    }


}

function displey() {
    quadrupled1.style.display = 'block'
    quadrupled2.style.display = 'none'
    quadrupled.style.display = "block"
    quadrupled_child.style.display = "none"


}

function displey1() {
    quadrupled.style.display = "none"
    quadrupled_child.style.display = "block"
    quadrupled1.style.display = 'block'
    quadrupled2.style.display = 'none'
}

function decrement() {
    displey()
    a = false
    plus_minus1.style.background = "red"
    plus_minus.style.background = "#F0F0F0"

    countType = -1
    if (start) {
        if (myPause) {
            myPause.style.display = 'block'
            myPlay.style.display = "none"
        }
        timer()
        mystart.classList.add('d-none')
    } else {
        mystart.classList.remove('d-none')
    }


}

function timer() {
    if (timset) {
        clearInterval(timset)
    }
    timset = setInterval(function () {
        num += countType
        numTage.innerHTML = num
    }, 1000)

}

function Start() {

    myStop.style.display = 'block'
    myPause.style.display = 'block'
    start = true
    timer()

    if (start) {
        timer()
        mystart.classList.add('d-none')
    } else {
        mystart.classList.remove('d-none')
    }
    atriboots.style.display = "block"
}

function pause() {


    if (timset) {
        clearInterval(timset)
    }
    myPause.style.display = 'none'
    myPlay.style.display = "block"

}


function play() {
    let myPlay = document.querySelector('.myPlay')
    let myPause = document.querySelector('.myPause')
    myPause.style.display = 'block'
    myPlay.style.display = "none"

    timer()
}


function stop() {

    if (timset) {
        clearInterval(timset)
    }
    num = 0
    numTage.innerHTML = num
    if (myPause) {
        myPause.style.display = 'none'
        myPlay.style.display = "block"
    }
}


function one_loan_each() {

    if (a) {
        countType = 1
        timer()
    } else {
        countType = -1
        timer()
    }
    displey()

}

function dbl() {
    if (a) {
        countType = 2
        timer()
    } else {
        countType = -2
        timer()
    }
    displey1()


}


function speed_1() {

    speed_max()

}

function speed_2() {
    timer()

    quadrupled1.style.display = 'block'
    quadrupled2.style.display = 'none'
}

function speed_max() {

    if (timset) {
        clearInterval(timset)
    }
    timset = setInterval(function () {
        num += countType
        numTage.innerHTML = num
    }, 500)
    quadrupled1.style.display = 'none'
    quadrupled2.style.display = 'block'


}

