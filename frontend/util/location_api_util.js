export const fetchLocations = () => {
  return $.ajax({
    method: "GET",
    url: "api/locations",
    error: (err) => console.log(err)
  });
};
