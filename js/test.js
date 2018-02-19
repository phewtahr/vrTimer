/*
	READ ME
		having the main function in a loop on separate threads was still causing lag.
		i'm probably going to try to fix that, because it would be more efficient than having a separate function for every timer.
		however, here is a demo for the time being.
*/

var phew = new Array( 15, 15, 15, 15, 15, 15, 15, 15, 15, 15 );
var tahr = new Array( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );
var phewtahr = [
	(phew[0]+tahr[0]+1)*60,
	(phew[1]+tahr[1]+1)*60,
	(phew[2]+tahr[2]+1)*60,
	(phew[3]+tahr[3]+1)*60,
	(phew[4]+tahr[4]+1)*60,
	(phew[5]+tahr[5]+1)*60,
	(phew[6]+tahr[6]+1)*60,
	(phew[7]+tahr[7]+1)*60,
	(phew[8]+tahr[8]+1)*60,
	(phew[9]+tahr[9]+1)*60
	];
	var stop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var test = 0;
function countdown0(minutes0)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes0;
		var counter = document.getElementById("timer0");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown0(mins - 1); }, 1000);
			}
		}
		phewtahr[0]--;
		if(phewtahr[0] < 1)
			document.getElementById("vr1").disabled = false;
		if(stop[0] == 1)
		{
			document.getElementById("timer0").innerHTML = "15:00";
			phewtahr[0] = 0;
		}
	}
	/*if(stop[0] == 1)
	{
		document.getElementById("kek").innerHTML = test=4;
		stop[0] = 0;
		return;
	}*/
	tick();
}
function countdown1(minutes1)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes1;
		var counter = document.getElementById("timer1");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown1(mins - 1); }, 1000);
			}
		}
		phewtahr[1]--;
		if(phewtahr[1] < 1)
			document.getElementById("vr2").disabled = false;
	}
	tick();
}
function countdown2(minutes2)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes2;
		var counter = document.getElementById("timer2");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown2(mins - 1); }, 1000);
			}
		}
		phewtahr[2]--;
		if(phewtahr[2] < 1)
			document.getElementById("vr3").disabled = false;
	}
	tick();
}
function countdown3(minutes3)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes3;
		var counter = document.getElementById("timer3");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown3(mins - 1); }, 1000);
			}
		}
		phewtahr[3]--;
		if(phewtahr[3] < 1)
			document.getElementById("vr4").disabled = false;
	}
	tick();
}
function countdown4(minutes4)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes4;
		var counter = document.getElementById("timer4");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown4(mins - 1); }, 1000);
			}
		}
		phewtahr[4]--;
		if(phewtahr[4] < 1)
			document.getElementById("vr5").disabled = false;
	}
	tick();
}
function countdown5(minutes5)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes5;
		var counter = document.getElementById("timer5");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown5(mins - 1); }, 1000);
			}
		}
		phewtahr[5]--;
		if(phewtahr[5] < 1)
			document.getElementById("vr6").disabled = false;
	}
	tick();
}
function countdown6(minutes6)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes6;
		var counter = document.getElementById("timer6");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown6(mins - 1); }, 1000);
			}
		}
		phewtahr[6]--;
		if(phewtahr[6] < 1)
			document.getElementById("vr7").disabled = false;
	}
	tick();
}
function countdown7(minutes7)
{
	var seconds = 60;
	function tick()
	{
		var timecall;
		var mins = minutes7;
		var counter = document.getElementById("timer7");
		var current_minutes = mins-1;
		seconds--;

		counter.innerHTML =
			current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
		if(seconds > 0)
			timecall = setTimeout(tick, 1000);
		else
		{
			if(mins > 1)
			{
				setTimeout(function () { countdown7(mins - 1); }, 1000);
			}
		}
		phewtahr[7]--;
		if(phewtahr[7] < 1)
			document.getElementById("vr8").disabled = false;
	}
	tick();
}

function cont0()
{
	document.getElementById("vr1").disabled = true;
	stop[0] = 0;
	/*if(stop[0] == 1)
	{
		document.getElementById("kek").innerHTML = test=1;
		stop[0] = 0;
		return;
	}*/
	countdown0();
	countdown0(phew[0]+tahr[0]);

}
function cont1()
{
	document.getElementById("vr2").disabled = true;
	countdown1();
	countdown1(phew[1]+tahr[1]);
}
function cont2()
{
	document.getElementById("vr3").disabled = true;
	countdown2();
	countdown2(phew[2]+tahr[2]);
}
function cont3()
{
	document.getElementById("vr4").disabled = true;
	countdown3();
	countdown3(phew[3]+tahr[3]);
}
function cont4()
{
	document.getElementById("vr5").disabled = true;
	countdown4();
	countdown4(phew[4]+tahr[4]);
}
function cont5()
{
	document.getElementById("vr6").disabled = true;
	countdown5();
	countdown5(phew[5]+tahr[5]);
}
function cont6()
{
	document.getElementById("vr7").disabled = true;
	countdown6();
	countdown6(phew[6]+tahr[6]);
}
function cont7()
{
	document.getElementById("vr8").disabled = true;
	countdown7();
	countdown7(phew[7]+tahr[7]);
}

function add0()
{
	tahr[0] += 15;
	document.getElementById("change0").innerHTML = phew[0]+tahr[0];
}
function add1()
{
	tahr[1] += 15;
	document.getElementById("change1").innerHTML = phew[1]+tahr[1];
}
function add2()
{
	tahr[2] += 15;
	document.getElementById("change2").innerHTML = phew[2]+tahr[2];
}
function add3()
{
	tahr[3] += 15;
	document.getElementById("change3").innerHTML = phew[3]+tahr[3];
}
function add4()
{
	tahr[4] += 15;
	document.getElementById("change4").innerHTML = phew[4]+tahr[4];
}
function add5()
{
	tahr[5] += 15;
	document.getElementById("change5").innerHTML = phew[5]+tahr[5];
}
function add6()
{
	tahr[6] += 15;
	document.getElementById("change6").innerHTML = phew[6]+tahr[6];
}
function add7()
{
	tahr[7] += 15;
	document.getElementById("change7").innerHTML = phew[7]+tahr[7];
}

function minus0()
{
	tahr[0] -= 15;
	document.getElementById("change0").innerHTML = phew[0]+tahr[0];
}	
function minus1()
{
	tahr[1] -= 15;
	document.getElementById("change1").innerHTML = phew[1]+tahr[1];
}
function minus2()
{
	tahr[2] -= 15;
	document.getElementById("change2").innerHTML = phew[2]+tahr[2];
}
function minus3()
{
	tahr[3] -= 15;
	document.getElementById("change3").innerHTML = phew[3]+tahr[3];
}
function minus4()
{
	tahr[4] -= 15;
	document.getElementById("change4").innerHTML = phew[4]+tahr[4];
}
function minus5()
{
	tahr[5] -= 15;
	document.getElementById("change5").innerHTML = phew[5]+tahr[5];
}
function minus6()
{
	tahr[6] -= 15;
	document.getElementById("change6").innerHTML = phew[6]+tahr[6];
}
function minus7()
{
	tahr[7] -= 15;
	document.getElementById("change7").innerHTML = phew[7]+tahr[7];
}

function reset0()
{
	document.getElementById("kek").innerHTML = test=1;
	stop[0]++;
}
function reset1()
{
	document.getElementById("timer1").innerHTML = 0;
}

function eof()
{
	document.getElementById("kek").innerHTML = test=2;

}

/* test
document.getElementById("kek").innerHTML = test++;
*/

/*layout for reset
- reset timer s
- reset plusminus
- reset start bar		x
- reset name bar
*/