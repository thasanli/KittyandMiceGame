import { running } from "./gamePage";

let i = 3;

function loadingAnimation() {
    if (i == -1) {
        return 1
    }
    htmlPath.innerHTML = `
    <div id = 'scoreTimeContainer'> 
    <span id = 'gameloading'> ${i} </span>
    </div> 
    `
    i--;
}

export
    function loadingInterval() {
    setInterval(loadingAnimation, 1000);
    setTimeout(running, 4000);
}


