// const Booking = require("./schema");
//
//
//
// exports.createBooking = function (req, res) {
//     let duplicateBooking = checkDateTime(req.query.date, req.query.time);
//     duplicateBooking.then(function (res) {
//         if (res !== null) {
//             res.json({message:"Invalid Time slot"});
//         } else {
//             const newBooking = new Booking;
//             newBooking.save().then(function (newBooking) {
//                 res.json({message: "Booking Saved", newBooking})
//             })
//         }
//     }, function (err) {
//         console.log(err)
//     });
// };
//
//
// exports.getBookings = function(err, booking){
//     booking.find(function (booking,err) {
//         if(booking){
//             return booking;
//         }else{
//             return err;
//         }
//     })
// }
//
// function checkDateTime(date, time) {
//     return new Promise(function (resolve, reject) {
//         Booking.findOne({
//             'date':date,
//             'time':time
//         },'', function (err,booking) {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(booking)
//             }
//         });
//     })
// }
//
// let errHandler = function (err) {
//     console.log(err);
// };