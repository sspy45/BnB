export const fetchPets = (user) => (
  $.ajax({
    method: "GET",
    url: `api/users/1/pets`,
    success: e => console.log(e)
  })
);

export const fetchBookings = (user) => (
  $.ajax({
    method: "GET",
    url: "api/bookings",
    success: e => console.log(e)
  })
);
