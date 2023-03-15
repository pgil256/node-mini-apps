let times = [
    '00:00',
    '00:12',	
    '01:00',	
    '06:01',	
    '06:10',	
    '06:18',	
    '06:30',	
    '10:34',	
    '12:00',	
    '12:09',	
    '23:23'	
];

times.forEach((time) => {checkTime(time)});


function checkTime(time){
     if (time === "00:00") {
      return "midnight"}
     else if (time === "12:00"){
       return "noon"}
     else {
      let [hourString, minuteString] = time.split(':');
      let [ hourWord, timeOfDay ] = translateHour(hourString);
      let minuteWord = translateMinute(minuteString) 
      return `${hourWord} ${minuteWord} ${timeOfDay}`}
};



function translateHour(hourString) {
  let hour = parseInt(hourString);

  switch(true) {
    case (hour == 0):
      return ["twelve","am"]
    case (hour < 12):
      return [makeWord(hour), "am"]
    case (hour == 12):
      return [makeWord(hour), "pm"]
    default: 
      return [makeWord(hour-12), "pm"]
  }
}

  
function translateMinute(minuteString) {
  let minute = parseInt(minuteString);
  
  switch(true){
    case (minute == 0):
      return "o’clock";
    case (minute < 10):
      return `o ${makeWord(minute)}`
    case (minute < 20):
      return makeWord(minute)
    default:
      const ones = minute % 10;
      const tens = minute - ones;
      minuteWord = minute % 10 === 0 ? makeWord(tens) : `${makeWord(tens)} ${makeWord(ones)}`;
      return minuteWord;
  }
}
  
  function makeWord(number){
    const numberList = {
      0:"",
      1:"one",
      2:"two",
      3:"three",
      4:"four",
      5:"five",
      6:"six",
      7:"seven",
      8:"eight",
      9:"nine",
      10:"ten",
      11:"eleven",
      12:"twelve",
      13:"thirteen",
      14:"fourteen",
      15:"fifteen",
      16:"sixteen",
      17:"seventeen",
      18:"eighteen",
      19:"nineteen",
      20:"twenty",
      30:"thirty",
      40:"fourty",
      50:"fifty"
    }
    return numberList[number]
  }
  
  module.exports = { checkTime, translateHour, translateMinute, makeWord };