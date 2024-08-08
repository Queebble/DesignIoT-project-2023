import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

// 
function CapUtilCalc(data, bookingList, roomCap) {

    var bookingMoves = [];

    for (let i = 0; i < bookingList.length; i++) {
        var booking = data.slice(0, bookingList[i])
        data = data.slice(bookingList[i], data[-1])
        bookingMoves.push(booking)
    }

    var peakCaps = [];

    for (let i = 0; i < bookingMoves.length; i++) {
        var peakCap = 0;
        var bookingCapCount = 0;
        for (let j = 0; j < bookingMoves[i].length; j++) {

            if (bookingMoves[i][j].entering) {
                bookingCapCount += 1
                if (peakCap < bookingCapCount) {
                    peakCap = bookingCapCount
                }
            } else {
                bookingCapCount -= 1
            }
        }
        peakCaps.push(peakCap);
    }
    var averageCap = (peakCaps.reduce((partialSum, a) => partialSum + a, 0)) / peakCaps.length;
    var capScore = Math.floor((averageCap / roomCap)*100);

    return capScore
}

export default CapUtilCalc