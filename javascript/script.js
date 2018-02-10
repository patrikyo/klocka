function tid(){
  var datum = new Date();
  var timmar = datum.getHours();
  var minuter = datum.getMinutes();
  var sekunder = datum.getSeconds();
  
  var tid = document.getElementsByClassName("tid");
  
  if(timmar < 10){
    timmar="0"+timmar;
  }
  if(minuter < 10){
      minuter="0"+minuter;
  }
   if(sekunder < 10){
     sekunder="0"+sekunder;
  }
  tid[0].innerHTML=timmar+" :";
  tid[1].innerHTML = minuter + " :";
  tid[2].innerHTML = sekunder;
}  
setInterval(tid,100);