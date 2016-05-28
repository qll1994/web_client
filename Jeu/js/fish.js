var fishObj = function()
{
	this.x;
	this.y;
	this.body = new Image();
	this.eye = new Image();;
	this.tail = new Image();
}
fishObj.prototype.init = function()
{
	this.y = canHeight/2;
	this.x = canWidth/2;
	this.body.src = "./src/babyFade0.png";
	this.eye.src = "./src/babyEye0.png";
	this.tail.src = "./src/babyTail0.png";
}
fishObj.prototype.draw = function()
{
	this.x = souris_x;
	this.y = souris_y - 10;
	ctx.drawImage(this.tail,this.x + 32,this.y+5);
	ctx.drawImage(this.body,this.x,this.y );
	ctx.drawImage(this.eye,this.x + 17,this.y + 17);
}
