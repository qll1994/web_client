function trigger()
{
	
	setTimeout(move,2000);
}
function move()
{
	var left=0;
	setInterval(function bouger()
		{
			left += 10;
			//var distance = document.getElementById('carre').style.left;
			var width = window.innerWidth;
			
			
			if(left+50<width)
			{
				document.getElementById('carre').style.left=left+'px';
			}else
			{
				clearInterval();
			}
		}
	,100)
}
