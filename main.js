answ=Math.floor(Math.random()*100);
count=0;
value=0;
attempt=0;
function test(){
  value=document.getElementById('ans').value;
  count++;
  if(count<10){
    if(value!=answ){
      document.getElementById('Status').innerHTML="Wrong";
      document.getElementById('Status').style.backgroundColor="red";
      if(value<answ){
        document.getElementById('Level').innerHTML="Last guess was low";
      }
      else{
        document.getElementById('Level').innerHTML="Last guess was high";
      }

    }
    else{
      document.getElementById('Status').innerHTML="Correct!";
      document.getElementById('Status').style.backgroundColor="green";
      document.getElementById('Level').innerHTML="";
      document.getElementById('Attempts').innerHTML= "";


    }
    attempt=10-count;
    document.getElementById('Pguesses').innerHTML+=" "+value;
    document.getElementById('Attempts').innerHTML= attempt +" "+"attempts left";
  }
  else{
    document.getElementById('Status').innerHTML="You have exceeded the limit";
    document.getElementById('Status').style.backgroundColor="orange";
    document.getElementById('Level').innerHTML="";
    document.getElementById('Attempts').innerHTML= "0 attempts left";




  }


}
console.log(answ);
console.log(value);
