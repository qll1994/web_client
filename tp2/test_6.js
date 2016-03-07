var animFrame = window.requestAnimationFrame||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null ;
var i = 0;
var mainloop = function() {
    draw();
    update();
};

 var recursiveAnim = function() {
    mainloop();
    animFrame( recursiveAnim );
};

    // start the mainloop
function draw() {
	
		var ctx = document.getElementById("canvas").getContext('2d');
	//var img = document.getElementById('img');
    var img = new Image();
	img.onload = function(){
		ctx.clearRect(0,0,1000,1000);
		ctx.drawImage(img,i*100,0,100,100,0,0,100,100); //pourquoi?
		i++;	
	};
	img.src = 'coin-sprite-animation.png';
}
function update()
{
    if (i===10) {i = 0;};
}
    animFrame( recursiveAnim );	
