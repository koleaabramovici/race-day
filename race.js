let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 23;

if(runnersAge > 18 && registeredEarly){
  raceNumber += 1000;
  } 

if(runnersAge>18 && registeredEarly){
  console.log(`${raceNumber} : Your race starts at 9:30 am.`);
  }  else if(runnersAge>18 && !registeredEarly){
  console.log(`${raceNumber} : Your race starts at 11:00 am.`);
  }  else if(runnersAge<18){
    console.log(`${raceNumber} : Your race starts at 12:30 pm.`);
  }  else if(runnersAge === 18 ){
    console.log(`${raceNumber}: Your race starts at 9:30 am or 11:00 am, depends if you have registered early or late.`);
  }







