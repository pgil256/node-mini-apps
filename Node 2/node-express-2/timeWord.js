times = [
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
]

times.forEach((time) => checkTime(time));
let output;

function checkTime(time){
    const [hourString, minuteString] = time.split(':');
    if (Number(hourString) || Number(minuteString) == NaN) {
        return output = 'Invalid time input'
    } if (time = '00:00' || '12:00') {
        return (midnightOrNoon(time));
    } else if (Number(hourString) && Number(minuteString) != NaN) {
        return [hourString, minuteString]
    }
}

function midnightOrNoon(time) {
    if (time === '00:00') {
        return output = 'midnight'
    } else if (time === '12:00') {
        return output = 'noon'
    }
}

function translateHour(hourString) {
    let hourInteger = parseInt(hourString);
    let hour;
    let timeOfDay;

    if (hourInteger = 0) {
        hour = 'twelve';
        timeOfDay = 'am';
        return (hour, timeOfDay)
    } else if (hourInteger < 12) {
        hour = makeWord(hourInteger);
        timeOfDay = 'am';
        return (hour,time)
    } else if (hourInteger = 12) {
        hour = 'twelve';
        timeOfDay = 'pm';
        return (hour, timeOfDay)
    } else if (23 >= hourInteger > 12) {
        hour = makeWord(hourInteger - 12);
        timeOfDay = 'pm';
        return (hour,time)
    }  
}

function translateMinute(minuteString) {
    let minuteInteger = parseInt(minuteString);
    let minute;

    if (minuteInteger = 0) {
        minute = 'o’ clock';
        return minute
    } else if (minuteInteger < 10) {
        minute =(`o’ ${makeWord(minuteInteger)}`);
        return minute
    } else if (minuteInteger >= 10) {
        minute = (makeWord(minuteInteger));
        return minute
    }
}

function makeWord(minuteInteger, hourInteger) {
    let numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty-one',
        'twenty-two',
        'twenty-three',
        'twenty-four',
        'twenty-five',
        'twenty-six',
        'twenty-seven',
        'twenty-eight',
        'twenty-nine',
        'thirty',
        'thirty-one',
        'thirty-two',
        'thirty-three',
        'thirty-four',
        'thirty-five',
        'thirty-six',
        'thirty-seven',
        'thirty-eight',
        'thirty-nine',
        'forty',
        'forty-one',
        'forty-two',
        'forty-three',
        'forty-four',
        'forty-five',
        'forty-six',
        'forty-seven',
        'forty-eight',
        'forty-nine',
        'fifty',
        'fifty-one',
        'fifty-two',
        'fifty-three',
        'fifty-four',
        'fifty-five',
        'fifty-six',
        'fifty-seven',
        'fifty-eight',
        'fifty-nine',
        'sixty'
    ]
    if (minuteInteger) {
        return numbers[minuteInteger]
    }
    else if (hourInteger) {
        if (hourInteger >= 12){
            hourInteger = hourInteger - 12;
        }
        return numbers[hourInteger];
    }
}

function concatenateTime(hour, minute, timeOfDay){
    let output = hour.concat(' ', minute, ' ', timeOfDay);
    return output; 
}

