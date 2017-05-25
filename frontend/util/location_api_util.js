export const fetchLocations = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data: {type: data}
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    method: "POST",
    url: "api/bookings",
    data: {booking}
  });
};
export const fetchBookingLocations = (id) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data: {
      id,
      type: 'bookings'
    }
  });
};

export const fetchLocationReviews = (location) => {
  return $.ajax({
    method: "GET",
    url: `api/locations/${location.id}/reviews`,
    data: {type:'location', location_id: location.id},
  });
};

export const fetchSingleLocation = (id)=> (
  $.ajax({
    method: "GET",
    url: `api/locations/${id}`
  })
);

export const fetchLocationBookings = ({location}) => {
  return $.ajax({
    method: "GET",
    url: `api/locations/${location.id}/bookings`,
    data: 'location'
  });
};
