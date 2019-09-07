async function create(booking){
 checkDate(booking.startDate, booking.endDate);
    let res = [
        booking.clientName,
        booking.clientAddress,
        booking.phone,
    ];
    return {"message": "booking has been created"}
}


function checkDate(startDate, endDate)  {
    if(startDate && endDate) {
        return true;
    } else {
        return (new Error("has no time slot")) ;
    }
}

module.exports = {
    create
};
