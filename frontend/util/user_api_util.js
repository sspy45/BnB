export const fetchPets = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/pets`,
    success: e => console.log("GET pets: " + e)
  })
);

export const fetchBookings = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/bookings`,
    success: e => console.log("GET bookings: " + e)
  })
);

export const fetchRentalLocations = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/locations`,
    success: e => console.log("GET locations: " + e)
  })
);
