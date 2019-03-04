document.querySelector('#write').onclick = sendToDb;

function sendToDb(){
    
    let startD = document.querySelector('#time-1').value.split("T");
    let endD = document.querySelector('#time-2').value.split("T");

    let formData = new FormData(document.querySelector('form'));

    formData.append('startD', startD[0])
    formData.append('endD', endD[0]);
    formData.append('startT', startD[1]);
    formData.append('endT', endD[1]);
    
    let startDate = new Date(startD);
    let endDate = new Date(endD);
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / 1000);
    var hours = Math.floor(diffDays / 3600);

    var minutes = (diffDays/60)%60;
    
    send(formData);
    setResult(hours,minutes)
}

function setResult(hours,minutes){
    document.querySelector('#result').innerHTML =
    //`you worked ${hours} hours and ${minutes} minutes`
    `you worked ${hours} hours and ${minutes} minutes`
    ;
}
function send(obj){
    fetch(`dataBase.php`,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
        },
        body: obj // body data type must match "Content-Type" header
    })
    .then(response=> response.text())
    .then(text=>  document.querySelector('#result2').innerHTML = text)
    .then(success=>  getFromDb());
}

function getFromDb(){
    fetch(`dataBase.php?getData=0`)
    .then(response=> response.text())
    .then(text=>  document.querySelector('#table').innerHTML = text);
}

getFromDb();
//,{method: 'post', body: JSON.stringify(obj)})