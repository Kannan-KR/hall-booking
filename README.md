# Hall Booking


## Create a room [POST]

https://hallbooking-kr.herokuapp.com/create-room

{
    "RoomId": 6,
    "RoomName": "deLuxe",
    "NoSeats": 6,
    "Amenities": [
        "Television",
        "Towels",
        "Parking",
        "WiFi",
        "Water",
        "Breakfast"
    ],
    "PricePerHour": 80
}

## List all rooms [GET]

https://hallbooking-kr.herokuapp.com/list-rooms

## Booking a room [POST]

https://hallbooking-kr.herokuapp.com/book-room

{
    "CustomerName": "John",
    "Date": "06MAR2022",
    "RoomId": 6
}

* Checks if the entered room is valid
* Checks if the room is already booked

## List all bookings [GET]

https://hallbooking-kr.herokuapp.com/list-customers

## Heroku
[API](https://hallbooking-kr.herokuapp.com/)
