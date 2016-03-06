var left = new Array(10);
var carre = new Array(10);
var clock = new Array(10);
for (var i = 1; i < 11; i++) {
	carre[i] = "carre" + i;
	left[i] = 0;
};
function bouger (i)
{
	clock[i] = setInterval(function(){
		if(left[i]>=window.innerWidth - 50)
		{
			clearInterval(clock[i]);
		}else{
			left[i] += 10;
			document.getElementById(carre[i]).style.left = left[i] + "px";			
		}
	},16);
}
function start()
{
	for (var i = 1 ; i <= 10; i++) {
		setTimeout("bouger("+i+")",1000*i); //pourquoi??dans les parentheses il faut ajouter "+i+"
	}
}
