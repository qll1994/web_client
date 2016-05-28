var resultObj = function()
{
	this.vie;
	this.time;
	this.fini;
	this.niv = [];

}
resultObj.prototype.init = function()
{
	this.vie = 3;
	this.time = 0;
	this.fini = 0;
	for(var i = 1;i<4;i++)
	{
		this.niv[i] = 0;
	}
	this.niv[1] = 1;//niveau1

}
resultObj.prototype.draw = function()
{
	if(this.vie >= 0)
	{
	    ctx.font = "30px Arial";
	    ctx.fillText("Vie:" + this.vie,canWidth/2,40);
	    ctx.fillText("Temps:" + this.time + "s",canWidth/2,80);
	    ctx.fillStyle = "white";
	    ctx.textAlign = "center";			
	}
	if (!this.vie) {ctx.fillText("Game Over",canWidth/2,canHeight/2);}


}
resultObj.prototype.update = function()
{
	if(this.vie)
	{
		now = Date.now();
		this.time = (now - debut)/1000;		
	}else
	{
		this.vie = 0;
		//alert("Ce jeu est fini!Vous avec reussi d'insister "+ this.time + "s!");
	}
/*	if(this.time > 40 && this.time < 50)
	{
		//ctx.fillText("Niveau update...! Niveau 1!",canWidth/2,canHeight/2);
		this.niv[1] = 1;
		this.niv[2] = 0;
		this.niv[3] = 0;
		//changeSpd(1);

	}else if(this.time > 80)
	{
		//ctx.fillText("Niveau update...! Niveau 2!",canWidth/2,canHeight/2);
		this.niv[1] = 0;
		this.niv[2] = 1;
		this.niv[3] = 0;
		//changeSpd(2);
	}else
	{
		//ctx.fillText("Niveau update...! Niveau 3!",canWidth/2,canHeight/2);
		this.niv[1] = 0;
		this.niv[2] = 0;
		this.niv[3] = 1;
		//changeSpd(3);
	}
*/
}
