const { timeWord } = require('../../Github/springboard_38_assessment-node-express-2-master/timeWord');
const {
    checkTime,
    midnightOrNoon,
    translateHour,
    translateMinute,
    makeWord,
    concatenateTime
} = require('./timeWord');

describe('checkTime', function () {
    test('is a function', function () {
        expect(typeof checkTime).toBe('function');
    });
});

describe('midnightOrNoon', function () {
    test('return correct times', function(){
        expect(midnightOrNoon('00:00')).toBe('midnight');
        expect(midnightOrNoon('12:00')).toBe('noon');
    });
});

describe('translateHour', function() {
    test('returns correct hour + part of day', function (){
        expect(translateHour(0).toEqual('twelve', 'am'));
        expect(translateHour(6).toEqual('six', 'am'));
        expect(translateHour(12).toEqual('twelve', 'pm'));
    });
});

describe('translateMinute', function() {
    test('returns correct minute + message', function (){
        expect(translateHour(0).toEqual('o’ clock'));
        expect(translateHour(5).toEqual('o’ five'));
        expect(translateHour(15).toEqual('twelve', 'pm'));
    });
});

describe('makeWord', function() {
    test('returns correct word based on integer', function (){
        expect(makeWord(15).toEqual('fifteen'));

    });
});