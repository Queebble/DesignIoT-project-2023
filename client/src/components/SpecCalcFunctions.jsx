function SpecCalc(data, number) {
    var count = 0;
    var countList = [];
    var specificity = 0;

        // the array is defined and has at least one element
    for (let i = 0; i < data.length; i++) {
        var role_id = data[i].role_id;
        if (role_id === number) {
            count += 1;
        }
        countList.push(role_id)
    }
    specificity = Math.floor((count / countList.length) * 100);
    return (
        specificity
    )
}
export default SpecCalc



