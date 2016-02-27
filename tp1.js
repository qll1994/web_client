function trigger(){
	setInterval(decompter,1000);
}
function decompter()
{
	var id = document.getElementById('compteur').innerHTML;
	if (id <= 0) 
		{
			clearInterval();
		}else
		{
			document.getElementById('compteur').innerHTML = id - 1;
		}	
}
