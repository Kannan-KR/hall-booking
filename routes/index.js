var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hall Booking" });
});

let roomData = [];
let bookingData = [];

// create room
router.post("/create-room", function (req, res, next) {
  roomData.push(req.body);
  res.send("Successfully created a new room");
});

// book room
router.post("/book-room", function (req, res, next) {
  let roomIds = [];
  roomData.forEach((each) => {
    roomIds.push(each.RoomId);
  });

  if (roomIds.includes(req.body.RoomId)) {
    if (bookingData.length === 0) {
      bookingData.push(req.body);
      res.send("Successfully booked a room");
    } else {
      bookingData.forEach((booking) => {
        if (
          booking.RoomId === req.body.RoomId &&
          booking.Date == req.body.Date
        ) {
          res.send("Room is already booked for the selected date. Try with a different date/room");
        } else {
          bookingData.push(req.body);
          res.send("Successfully booked a room");
        }
      });
    }
  } else {
    res.send("Please enter a valid Room ID");
  }
});

// list rooms
router.get("/list-rooms", function (req, res, next) {
  res.send(roomData);
});

// list customers with booking data
router.get("/list-customers", function (req, res, next) {
  res.send(bookingData);
});

module.exports = router;
