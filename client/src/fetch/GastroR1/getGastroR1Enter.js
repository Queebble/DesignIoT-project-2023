export default function getGastroR1Enter() {
    // Local
    //const url = `http://localhost:9000/movements/gastroR1/enter`
    // Docker
    const url = `http://54.208.14.126:9000/movements/gastroR1/enter`

    return fetch(url)
        .then(res => res.json())
        .then(data =>
            data.gastroR1Moves.map(movement => {
                return {
                    move_id: movement.move_id,
                    role_id: movement.role_id,
                    room_id: movement.room_id,
                    moveTime: movement.time,
                    entering: movement.entering
                };
            })
        )
        .catch(err => alert(err))
}
