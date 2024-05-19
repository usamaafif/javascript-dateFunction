let currentDate=new Date();
document.getElementById("CurrentDate").innerHTML=currentDate;

function today(){
    let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let today=currentDate.getDay();
    document.getElementById('output').innerHTML=day[today];

}
function passDays(){
   let bornday= document.getElementById("input").value;
   let dob=new Date(bornday)
   if(bornday=="")
    alert("Enter Input")
else{

    let passMsec=currentDate.getTime()-dob.getTime();
    let passdays=passMsec/(1000*60*60*24)
    document.getElementById("output").innerHTML= Math.floor(passdays)+" Days Passed since you Born"
}
}
function nextDays(){
    let bornday=document.getElementById("input").value;
 
    if(bornday=="")
        alert("Please Input ")
    else{
        let dob=new Date(bornday)
    let day=dob.getDate();
    let year=dob.getFullYear();
    let month=dob.getMonth();
    
     today=new Date();
    var cmas=new Date(today.getFullYear(), month, day);
    if(month<new Date().getHours())
     cmas.setFullYear(cmas.getFullYear()+1);
    else
    cmas.setFullYear(cmas.getFullYear());
     var one_day=1000*60*60*24;
      document.getElementById("output").innerHTML=(Math.floor((cmas.getTime()-today.getTime())/(one_day))+
      " days left untill next Birthday!");


    }
}
function greet(){
    let user=prompt("Enter User Name");
    if(isNaN(user))
    {

                
    let hour=currentDate.getHours();
    if(hour>5 && hour<11)
        document.getElementById("output").innerHTML="Good Morning "+user;
  else  if(hour>11 && hour<15)
        document.getElementById("output").innerHTML="Good Afternoon "+user;
  else if(hour>15 && hour<19)
    document.getElementById("output").innerHTML="Good Evening "+user;
  else
    document.getElementById("output").innerHTML="Good Night "+user;
    }
    else
    alert("Please Enter A Name")
}
function time(getoffset){
    let localtime=currentDate.getTime();
    let localoffset=currentDate.getTimezoneOffset()*60000;
    let utc=localtime+localoffset;
    let offset =getoffset;
    let time1sec=utc+(3600000*offset);
    const time = new Date(time1sec).toLocaleString();
    return time;
}
function time1(){
    let time1=time(-5);
    document.getElementById("output").innerHTML="<h2>USA Time </h2> <br>"+time1;
}
function time2(){
    let time2=time(+3);
    document.getElementById("output").innerHTML="<h2>Saudia Time </h2> <br>"+time2;
}
function time3(){
    let time3=time(+8);
    document.getElementById("output").innerHTML="<h2>China Time </h2> <br>"+time3;
}
let taxprice;
let price;
function caltax(){
price=+prompt("Enter a Price")
if(isNaN(price))
    alert("input only digits")
else{


     let tax;
     if(price<=1000)
         tax=8;
     else if(price>1000 && price<=3000)
         tax=12
     else
     tax=16
  taxprice=Math.floor((tax/100)*price);
document.getElementById("output").innerHTML="Tax for "+price+" = "+tax+" % <br> Tax Price = "+taxprice;
}

}
function totalprice(){
    let totalprice=price+taxprice;
    document.getElementById("output").innerHTML="Total Price = "+totalprice;
}
function outputclear(){
    document.getElementById("output").innerHTML=""
}
function inputclear(){
    document.getElementById("input").value=""
}