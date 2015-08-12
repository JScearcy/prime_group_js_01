var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];
//add all employess into an array
var emplArray = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//function to iterate through the array of all employees and feed into the bonus function
function emplIterate(array){
  for(var i = 0; i < array.length; i++){
    console.log(emplBonus(array[i]));
  }
}
//calculate bonuses
function emplBonus(array) {
  //variables to hold sti, bonus, and salary data
  var sal = parseInt(array[2]);
  var sti = 0;
  var bonus = 0;
  //switch to determine sti from the employee rating
  switch(array[3]){
    case 3:
      sti += .04;
      break;
    case 4:
      sti += .06;
      break;
    case 5:
      sti += .1;
      break;
  }
  //determine whether employee qualifies for bigger bonus based on tenure
  if(array[1].length === 4){
    sti += .05;
  }
  //determine whether the employee is punished for making too much
  if(sal > 65000){
    sti -= .01;
  }
  //cap all bonuses to 13%
  if(sti > .13){
    sti = .13;
  }
  // calculate and round bonus to nearest dollar
  bonus = Math.round(sal * sti);
  //construct new array to return
  array = [array[0], ((sti * 100) + '%'), (sal + bonus), bonus];
  return array
}
//call function to run through array of employees
emplIterate(emplArray);
