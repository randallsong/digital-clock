//obtain local time and display it on the web page
function getTime(){
	var t = new Date();
	var link = document.getElementById('clock');
	var h = t.getHours();
	var m = t.getMinutes();
	var s = t.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	//adds together combined data assembles it together to diplay current time
	link.innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {
    	i = "0" + i
    }  
    return i;
}
//makes the clock look better as it adds zeroes to single digit times

setInterval(function(){getTime(), 1000})


function changeBackground(){
	var t = new Date();
	var h = t.getHours();
	var image = document.getElementById('greeting')
	if (7 <= h && h <11){
		image.innerHTML = "Good Morning"
		document.body.style.backgroundImage = 'url(http://img04.deviantart.net/732e/i/2011/109/9/1/canterlot_sunset___wallpaper_by_crappyunicorn-d3ece2n.jpg)'
	}else if (11 <= h && h <19){
		image.innerHTML = "Good Afternoon"
		document.body.style.backgroundImage = 'url(daytime-castle.png)'
	}else{
		image.innerHTML = "Good Evening"
		document.body.style.backgroundImage = 'url(http://2.bp.blogspot.com/-Z3yXVYjA4Y0/T-Or-_O2G0I/AAAAAAAAAX4/TWSmT5R7LgA/s1600/HD_Shot_01_Pan+copy.png)'
	}
}
setInterval(function(){changeBackground(), 1000});
//change background and message based on time of day by getting
//the current hour, then changing the message and background styling

