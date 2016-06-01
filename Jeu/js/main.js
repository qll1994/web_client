var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;



var can;
var bg = new Image();
var canWidth;
var canHeight;

var bomb;
var fish;    
var result;

var souris_x;
var souris_y;

var debut;
var now;
var nb_bomb = 30;
function init()
{

	can = document.getElementById('canvas');
    can.addEventListener('mousemove',onMouseMove,false);

	ctx = can.getContext('2d');

	canWidth = can.width;
	canHeight = can.height;
	
	bg.src = "./assets/background/sea.png";
	ctx.drawImage(bg,0,0,canWidth,canHeight);
	bomb = new bombObj();
    fish = new fishObj();
    result = new resultObj();
	bomb.init();
    fish.init();
    result.init();
    debut = Date.now();
    //ctx.drawImage(bomb.img,canWidth/2,canHeight/2);
    animFrame( recursiveAnim );

}

function update()
{
    bomb.update();
    result.update();
}
function draw()
{
    ctx.clearRect(0,0,canWidth,canHeight);

    ctx.drawImage(bg,0,0,canWidth,canHeight);

    bomb.draw();
    fish.draw();
    result.draw();
    //text();
    //ctx.drawImage(bomb.img,canWidth/2,canHeight/2,15,15);
}
function onMouseMove(e)
{
    "use strict";
    if(result.vie>0)
    {
        var rect = can.getBoundingClientRect();
        souris_x = e.clientX - rect.left;
        souris_y = e.clientY - rect.top;
    }

    //console.log(souris_x);
}
function recursiveAnim () {
    "use strict"; 
    mainloop();
    animFrame( recursiveAnim );
}

var mainloop = function () {
    draw();
    update();
    collision();
}
window.addEventListener("load", init, false);
