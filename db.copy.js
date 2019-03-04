document.querySelector('#write').onclick = sendToDb;
document.querySelector('#get').onclick = getFromDb;


function sendToDb(){
    
    let startD = document.querySelector('#time-1').value.split("T");
    let endD = document.querySelector('#time-2').value.split("T");

    let obj = {'startD': startD[0], 'endD': endD[0], 'startT': startD[1], 'endT': endD[1],}
    
    let startDate = new Date(startD);
    let endDate = new Date(endD);
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / 1000);
    var hours = Math.floor(diffDays / 3600);

    var minutes = (diffDays/60)%60;
    
    send(obj);
    setResult(hours,minutes)
}

function setResult(hours,minutes){
    document.querySelector('#result').innerHTML =
    //`you worked ${hours} hours and ${minutes} minutes`
    `you worked ${hours} hours and ${minutes} minutes`
    ;
}
function send(obj){
    fetch(`dataBase.php?sd=${obj.startD}&ed=${obj.endD}&st=${obj.startT}&et=${obj.endT}`)
    .then(response=> response.text())
    .then(text=>  document.querySelector('#result2').innerHTML = text);
}

function getFromDb(){
    fetch(`dataBase.php?getData=0`)
    .then(response=> response.text())
    .then(text=>  document.querySelector('#table').innerHTML = text);
}

getFromDb();
//,{method: 'post', body: JSON.stringify(obj)})