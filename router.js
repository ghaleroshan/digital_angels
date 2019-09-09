const express = require("express");
const bodyParser = require("body-parser");
// const booking = require("./src/booking");
const mongoose = require("mongoose");
const Data = require("./src/schema");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://ghale:roshan@cluster0-azxcl.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true});
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/bookings', (req, res)=>{
Data.find((err, data) =>{
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
    })
});

app.post('/create-booking', (req, res) => {
    let data = new Data();

    const { id, startTime, endTime } = req.body;

    if ((!id && id !== 0) || startTime || endTime) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.id = id;
    data.startTime = startTime;
    data.endTime = endTime;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


const server = app.listen(3000, () =>
    console.log(`Listening on port ` + server.address().port + "...."),
);

module.exports = server;