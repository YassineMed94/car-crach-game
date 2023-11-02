
function randomColor(){
    function c(){
        let colo = Math.floor(Math.random() * 256).toString(16);
        return ("0"+ String(colo)).substr(-2);
    }
    return "#"+c()+c()+c();
}

function onCollision(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    return !((aRect.top >  bRect.bottom) || (aRect.bottom <  bRect.top) ||
        (aRect.right <  bRect.left) || (aRect.left >  bRect.right)); 
}

function onGameOver() {
    player.start = false;
    startScreen.classList.remove('hide');
    startScreen.innerHTML = "Game Over <br> Your score is " + player.score + "<br> Play Agains.";
}

function moveRoadLines(){
    let roadLines = document.querySelectorAll('.roadLines');
    roadLines.forEach((item)=> {
        if(item.y >= 700){
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveEnemyCars(carElement){
    let enemyCars = document.querySelectorAll('.enemyCar');
    enemyCars.forEach((item)=> {

        if(onCollision(carElement, item)){
            onGameOver();
        }
        if(item.y >= 750){
            item.y = -300;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
} 

function gamePlay() {
    let carElement = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if(player.start){
        moveRoadLines();
        moveEnemyCars(carElement);
            
        if(keys.ArrowUp && player.y > (road.top + 70)) player.y -= player.speed;
        if(keys.ArrowDown && player.y < (road.bottom - 85)) player.y += player.speed;
        if(keys.ArrowLeft && player.x > 0) player.x -= player.speed;
        if(keys.ArrowRight && player.x < (road.width - 70)) player.x += player.speed;

        carElement.style.top = player.y + "px";
        carElement.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);

        player.score++;
        const ps = player.score - 1;
        score.innerHTML = 'Score: ' + ps;          
    }
}
document.addEventListener('keydown', (e)=>{
    e.preventDefault();
    keys[e.key] = true;
});

document.addEventListener('keyup', (e)=>{
    e.preventDefault();
    keys[e.key] = false;
});
