let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];


}
let a = document.querySelector("#user-score")
let b = document.querySelector("#comp-score")
const msg = document.querySelector("#msg");
const showwinner = (userwin) => {
    if (userwin) {

        userscore++;
        a.innerText = userscore;
        msg.innerText = "you win😂";
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        b.innerText = compscore;
        msg.innerText = "you lose😓";
        msg.style.backgroundColor = "red";
    }
}
const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw💀";
    msg.style.backgroundColor = "black";
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const comchoice = gencompchoice();
    console.log("computer choice=", comchoice)
    if (userchoice === comchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = comchoice === "scissors" ? false : true;
        }
        else {
            userwin = comchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }

};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});
