import TimeUtilCalc from "./TimeUtilCalc";

function TimeCalc(data) {

var bookingCount = 0;
var numBookings = [];
var currentBooking = data[0].booking_id;

for (let i = 0; i < data.length; i++) {
    var booking_id = data[i].booking_id;
    if (booking_id === currentBooking) {
        bookingCount += 1;
        if (i === data.length-1) {
            numBookings.push(bookingCount)
        }
    }
    else {
        numBookings.push(bookingCount)
        currentBooking = booking_id
        bookingCount = 1;
    }
}

var timeScore = TimeUtilCalc(data, numBookings)

return (
    timeScore
)
}
export default TimeCalc