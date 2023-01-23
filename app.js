let goldCount = 0
let silverCount = 0 



function gold() {
goldCount += 1
    console.log("you clicked the gold button", goldCount )
    draw()
    function draw(){
        document.getElementById("player1").innerText = goldCount
    }
}



function silver() {
    silverCount += 1
    console.log("you clicked the silver button", silverCount)
    draw()
    function draw(){
        document.getElementById("player2").innerText = silverCount
    }
}

let totalScore = 0 
function totScore()
goldCount + silverCount == totalScore
    function draw(){
        document.getElementById("totalPoints").innerText = totalScore
    }
