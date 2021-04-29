"use strict";
exports.__esModule = true;
function convertHourToMinutes(time) {
    //8:00
    var _a = time.split(':').map(Number), hour = _a[0], minutes = _a[1];
    var timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}
exports["default"] = convertHourToMinutes;
