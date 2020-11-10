//restart game button
var restart = document.querySelector("#d")
//all tables data
var squares = document.querySelectorAll("td")

function clearBoard(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
        
    }
}

restart.addEventListener("click",clearBoard);

function changemarker(){
    if (this.textContent === '') {
        this.textContent = 'X'
    }
    else if (this.textContent === "X") {
        this.textContent = "O"
    }
    else {
        this.textContent = ''
    }
}

for (let index = 0; index < squares.length; index++) {
    const element = squares[index];
    element.addEventListener("click" , changemarker)
}
