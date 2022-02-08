this.sound = document.createElement("audio");




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

let hits = 0;
async function fire() {
    console.log('hello world', hits)

    //play a small fire sound

    // place bullet image in (6,3)then (5,3),(4,3),(3,3),(2,3) after it will hit target and once target is hit  10 times target will explode

    let previousStep = null;

    for(let i=1; i<=5; i = i+1){

        await sleep(150);
            
        let step = document.getElementById(i);
        step.innerHTML = '<img src=\'bullet.png\' id=\'theBullet\'>'

        if(previousStep !== null)
        previousStep.innerHTML = ''

        previousStep = step;

    }
    
    await sleep(150);
    previousStep.innerHTML = ''


    hits = hits + 1
    if(hits == 10) {
        
        let targetCell = document.getElementById("targetCell")
        targetCell.innerHTML = ''
        console.log('BLOWN')
    }

}

function restart() {

    console.log('restarted')
    hits = 0;
    let targetCell = document.getElementById("targetCell")
    targetCell.innerHTML = '<img id = "target" src="target.png" alt="Enemy">'


}