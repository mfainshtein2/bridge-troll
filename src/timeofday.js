const log = require('./log');
const SunCalc = require('suncalc');

var daytime = 1;

module.exports.setTime = (lat, lng) => {
    var date = new Date();
    var sunTimes = SunCalc.getTimes(date, lat, lng);
    if (date > sunTimes.sunriseEnd && date < sunTimes.sunset){
      daytime = 1;
    }else{
      daytime = 0;
    }
    return daytime;
}

module.exports.getTime = () => {
    return daytime;
}