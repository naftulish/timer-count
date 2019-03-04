let interval;
let runnig = false;

document.querySelector('#time-1').value = getTimeDate(); 
document.querySelector('#time-2').value = getTimeDate(); 
document.querySelector('#myDiv').onclick = run;

	console.log(getTimeDate());

function getTimeDate(){

	let date = new Date();

	let year =  date.getFullYear();

	let month = Number(date.getMonth()+1);
	month<10 ? month = "0" + month : month = "" + month;

	let day = Number(date.getDate());
	day<10 ? day = "0" + day : day = "" + day;

	let hours = Number(date.getHours());
	hours<10 ? hours = "0" + hours : hours = "" + hours;

	let minutes = Number(date.getMinutes());;
	minutes<10 ? minutes = "0" + minutes : minutes = "" + minutes;

	let string = `${year}-${month}-${day}T${hours}:${minutes}`;	
	return string;
}

function timer(){
	let timer = document.querySelector('.circle>span.timer');
	let time = 1;
	interval = setInterval(
		function(){ 
			let timeString = time.toString();
			timer.innerHTML = timeString.toHHMMSS(); 
			time++;
		}, 1000);
}

function run(){
	if(!runnig){
		document.querySelector('#myDiv').classList.add("run");
		document.querySelector('#myDiv>span').innerHTML='Stop';
		timer();
		document.querySelector('#time-1').value = getTimeDate(); 
		runnig=true;
	}else{
		document.querySelector('#myDiv').classList.remove("run");
		document.querySelector('#myDiv>span').innerHTML='Start';
		document.querySelector('#time-2').value = getTimeDate(); 
		clearInterval(interval);
		runnig=false;
	}
}


String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ':' + minutes + ':' + seconds;
}

	