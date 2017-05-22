export const fetchLocationReviews = (location) => {
  return $.ajax({
    method: "GET",
    url: `api/locations/${location.id}/reviews`,
    data: {type:'location', location_id: location.id},
  });
};
