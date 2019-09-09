const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const BookingSchema=new Schema({
    client_id: String,
    startTime: String,
    endTime: String,
});

module.exports = mongoose.model("Data", BookingSchema);