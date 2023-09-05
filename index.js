console.log("Welcome to Tic Tac Toe")

let music = new Audio("elements/music.mp3")
let audioturn = new Audio("elements/ting.mp3")
let gameover = new Audio("elements/gameover.mp3")
var wining = new Audio("elements/wining.wav")
audioturn.preload = "auto"

var turn = "X"
let isgameover = false


//function to change the turn
changeTurn = ()=>{
    return turn === "X" ? "O" : "X"
}


//function to check for a win

const checkWin = ()=>{
    var boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2, 5, 5, 0],
        [3,4,5, 5, 15, 0],
        [6,7,8, 5, 25, 0],
        [0,3,6, -5, 15, 90],
        [1,4,7, 5, 15, 90],
        [2,5,8, 15, 15, 90],
        [0,4,8, 5, 15, 45],
        [2,4,6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON"
            isgameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px"
            // document.querySelector('.line').style.transform = "translate(5vw 15vw) rotate(90deg)"
            document.querySelector('.line').style.transform =  `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw"
            wining.play()
        }
    })
}

//Game Logic:
// music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{  //element is a div whose id is box

    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            audioturn.play()
            turn = changeTurn()
            checkWin()
            if(!isgameover){         //means true
                document.getElementsByClassName("info")[0].innerText = "Turn for:" + turn;
                audioturn.preload = "auto"
            }


        }
    }
        );
})

//Listener to clear

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "" 
    })

    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for:" + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0px"

    gameover.play()

    
})







