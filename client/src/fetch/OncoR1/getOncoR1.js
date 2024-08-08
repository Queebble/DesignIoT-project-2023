export default function getOncoData() {
    // Local
    //const url = `http://localhost:9000/movements/oncoR1`
    // Docker
    const url = `http://54.208.14.126:9000/movements/oncoR1`

    return fetch(url)
        .then(res => res.json())
        .then(data =>
            data.oncoR1Moves.map(movement => {
                return {
                    move_id: movement.move_id,
                    booking_id: movement.booking_id,
                    role_id: movement.role_id,
                    room_id: movement.room_id,
                    moveTime: movement.time,
                    entering: movement.entering
                };
            })
        )
        .catch(err => alert(err))
}
