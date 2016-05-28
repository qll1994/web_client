function collision () 
{
	if(result.vie>0) //si la vie est plus grand que 0, on detecte la collision
	{
		for(var i = 0;i < bomb.num;i++)//on parcourt tous les bombs pour detecter si la poisson rencontre le bombe.
		{
			if(bomb.alive[i])
			{
				if(distance(bomb.x[i],bomb.y[i],souris_x,souris_y) < 850) //c'est a dire la souris et le bombe se rencontrent
				{
					//if(result.vie > 0)
					//{
						result.vie--;
						bomb.alive[i] = false;
					//}
				}			
			}

		}		
	}

}
function distance(x1,y1,x2,y2)
{
	return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);
}
