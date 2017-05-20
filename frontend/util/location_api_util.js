export const fetchLocations = (filters) => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    data: filters
  });
};
