export const fetchLocations = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data
  });
};

export const fetchLocationReviews = (location) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data: location.id
  });
};
