var bombObj = function()
{

    this.x = [];
    this.y = [];
    //this.num;
    this.img = new Image();
    this.spd = [];
    this.alive=[];
}
bombObj.prototype.num = 50;
bombObj.prototype.init = function()
{
    //this.num = 30;
    for(var i = 0;i<this.num;i++)
    {
        this.x[i] = 49 * i + Math.random()*50;
        this.y[i] = canHeight - Math.random()*20;
        this.spd[i] = Math.random()*0.08+0.057;
       
        this.alive[i] = false;
    }

    
    this.img.src = "./src/fruit.png";
}
bombObj.prototype.draw = function()
{
    surveille();
    for(var i = 0;i < this.num;i++)
    {
        //this.spd[i] = Math.random()*0.01+0.01;
        //this.x[i] = 50 * i + Math.random()*50;
        this.y[i] = this.y[i] - this.spd[i] * 16;
        if(this.alive[i])ctx.drawImage(this.img,this.x[i],this.y[i]);       
    }
    
}

bombObj.prototype.born = function(i)
{
    if (this.alive[i] == false) 
    {
        this.alive[i] = true;
        this.y[i]=canHeight - Math.random()*20;
        this.x[i] = 49 * i + Math.random()*50;
    }
}
bombObj.prototype.update=function()
{
    for(var i = 0;i < this.num;i++)
    {
        if(this.alive[i])
        {
            if(this.y[i]<10)
            {
                this.alive[i] = false;
            }
        }       
    }


}
function surveille()
{
    var nb = 0;
    for(var i = 0;i<bomb.num;i++) //calculer il y a combien de bombe vivants
    {
        if (bomb.alive[i]) {nb++};
    }
    if(nb<30)//si le nombre du bombe est plus petit que 30, on laisse les bombs revivre.
    {
        for(var i = 0;i<bomb.num;i++)
        {
            if(!bomb.alive[i]) bomb.born(i);
        }
    }

  //  return;
}
/*function changeSpd(x)
{
    for(var i = 0;i<bomb.num;i++)
    {
        switch(x)
        {
            case 1: bomb.spd[i] = 0.08 + Math.random()*0.12;
                break;
            case 2: bomb.spd[i] = 0.1 + Math.random()*0.18;
                break;
            case 3: bomb.spd[i] = 0.12 + Math.random()*0.2;
            default: 
        }        
    }

}*/
