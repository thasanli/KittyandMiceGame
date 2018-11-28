import  {loadingInterval}  from "./loadingPage";


export
    function startGameBtn() {
    
    htmlPath.innerHTML = `

    <div id ='miceContainer'>
    <img src="img/miceGameStart.png" id = 'miceStartImg' alt="mice">
    </div>

    <div id='introductionTxt'>
    <p id = 'intotext'> Hello and Welcome. <br> 
    You will have 20 seconds to catch as many mice as you can.<br> 
    You need to click at running mouse when you see them <br> 
    Enjoy!</p> 
    </div> <br> 

    <div id="startGameContainer">
    <div id = 'mouseBtn'> </div>
    <div id = 'clickHereBtn'> <span id = 'startGameSpanBtn'> Start Game </span> </div>
    
     </div>
    `
    startBtns()
}

function startBtns() {
    let clickHereBtn = document.getElementById('clickHereBtn');
    clickHereBtn.addEventListener("click", () => {
        setTimeout(loadingInterval, 10)
    });
}

