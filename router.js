const express = require("express");
const bodyParser = require("body-parser");
const bookings = require("./src/booking");
const bookableDays = require("./src/bookabledays");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

app.post("/api/booking", async(req, res) => {
    res.json(await bookings.create(req.body));
});

app.get("/days:id", async(req, res) => {
    res.json(await bookableDays.get(req.params, req.body));
});

let PORT = 9090;
app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}!`),
);