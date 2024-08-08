import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

// 
function TimeUtilCalc(data, bookingList) {

    var bookingMoves = [];

    for (let i = 0; i < bookingList.length; i++) {
        var booking = data.slice(0, bookingList[i])
        data = data.slice(bookingList[i], data[-1])
        bookingMoves.push(booking)
    }

    var enterCount = 0;
    var totalTime = 0;

    for (let i = 0; i < bookingMoves.length; i++) {
        var enterTime = 0;
        for (let j = 0; j < bookingMoves[i].length; j++) {

            if (enterCount === 0) {
                enterTime = new Date(bookingMoves[i][j].moveTime).getMinutes();
            }

            if (bookingMoves[i][j].entering) {
                enterCount += 1
            } else {
                enterCount -= 1
            }

            if (enterCount === 0) {
                var currentTime = new Date(bookingMoves[i][j].moveTime).getMinutes();
                totalTime += (currentTime - enterTime)
            }
        }
    }
    var timeScore = Math.floor((totalTime / (60 * bookingMoves.length))*100);

    return timeScore
}

export default TimeUtilCalc