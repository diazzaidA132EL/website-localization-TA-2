var delay = 1000;
var i =0;
var j=0;
var act_now;
let tracker_1 = document.querySelector('.tracker');

setInterval(function(){
  tracker_1.classList.remove("tracker-"+i);
  i++;
  if (i>4){
    i=0;
  };
  tracker_1.classList.add("tracker-"+i);
},1000)


const active =["walking", "falling", "sleeping"];

var act_1 = document.querySelector(".logo-act-1");
var act_2 = document.querySelector(".logo-act-2");
var act_3 = document.querySelector(".logo-act-3");

setInterval(function(){
  if (active[j] == "walking"){
    act_1.style.border = "4px solid rgb(0, 255, 94)";
    act_2.style.border = "4px solid rgb(0, 229, 255)";
    act_3.style.border = "4px solid rgb(0, 229, 255)";
  }
  else if (active[j] == "falling"){
    act_1.style.border = "4px solid rgb(0, 229, 255)";
    act_2.style.border = "8px solid rgb(255, 0, 0)";
    act_3.style.border = "4px solid rgb(0, 229, 255)";
  }
  else if (active[j] == "sleeping"){
    act_1.style.border = "4px solid rgb(0, 229, 255)";
    act_2.style.border = "4px solid rgb(0, 229, 255)";
    act_3.style.border = "4px solid rgb(0, 255, 94)";
  };
  j++;
  if (j>3){
    j=0;
  };
},1000)
