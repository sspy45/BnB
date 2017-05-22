export const fetchLocations = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data: {type: data}
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
    url: `api/locations/${id}`,
    success: s => console.log("SUCCEESS"),
    fail: s => console.log(s)
  })
);
