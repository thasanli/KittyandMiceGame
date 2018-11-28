import { startGameBtn } from "./startPage";

let remainingTime = 10;
let i = 1;
let m = 1;
let score = 0;


export
    function running() {
    $('#htmlPath').html('');

    setInterval(gameBegin, 1000);
    setInterval(gameAnimation, 1000);

}



function gameBegin() {
    if (remainingTime == -1) {

        let scoreTimeContainer = document.createElement('div');
        scoreTimeContainer.id = 'scoreTimeContainer';
        $('#scoreTimeContainer').html(`
        <div id = 'scoreTimeContainerPath'>
        <div id = 'remainingTime'> <span class = 'gameOver'> Game Over </span> </div> 
        <div id = 'score'>  <span class = 'scoreSpan'> Your score: ${score} </span>   </div> 
        </div>
        `)
        return $('#htmlPath').append(scoreTimeContainer);


    }
    let scoreTimeContainer = document.createElement('div');
    scoreTimeContainer.id = 'scoreTimeContainer';
    $('#scoreTimeContainer').html(`
        <div id = 'scoreTimeContainerPath'>
        <div id = 'remainingTime'> <span class = 'timeSpan'> ${remainingTime} </span> </div> 
        <div id = 'score'>  <span class = 'scoreSpan'> Score: ${score} </span>   </div> 
        </div>
        `)
    $('#htmlPath').append(scoreTimeContainer);


    remainingTime--
}


function gameAnimation() {
    const miceRunDiv = document.createElement('div' + i);
    miceRunDiv.id = `runningMice`;


    let randomX = Math.floor((Math.random() * 10) + 1);

    miceRunDiv.animate([
        {
            left: `${randomX * 10}vw`,
            bottom: `-80vh`,

        },
        {
            left: `${randomX * 10}vw`,
            bottom: `150vh`,

        }
    ], 4000);
    $('#htmlPath').append(miceRunDiv);
    miceRunDiv.addEventListener("click", () => {
        miceRunDiv.id = 'nothing';
        score++;
    })
    i++;
}









