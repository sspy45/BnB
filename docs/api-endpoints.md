*HTML API*
#Root
  Get/ -loads React web app

*JSON API*
#Users
  POST /api/users
  PATCH /api/users

#Session
  POST /api/session
  DELETE /api/session

#Locations
  GET /api/location
  POST /api/locations
  GET api/locations/:id
  PATCH api/locations/:id
  DELETE api/locations/:id

#Bookings
  GET /api/bookings
  POST /api/locations/:id/bookings
  GET api/bookings/:id
  PATCH api/bookings/:id
  DELETE api/bookings/:id

#Reviews
  GET /api/reviews
  POST /api/reviews
  DELETE api/comment/:id
  PATCH api/reviews/:id
  DELETE api/reviews/:id
