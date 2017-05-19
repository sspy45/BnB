export const fetchPets = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/pets`,
  })
);

export const editPet = (pet) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${id}/pets`,
    success: e => console.log("GET pets: " + e)
  });
};

export const fetchBookings = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/bookings`,
  })
);

export const fetchLocations = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/locations`,
  })
);

export const fetchPetTypes = () => (
  $.ajax({
    method: "GET",
    url: 'api/pet_types/',
    success: e => console.log("GET petTypes: " + e)
  })
);

export const createPet = (pet) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${pet.owner_id}/pets`,
    data: {pet},
    success: e => console.log(e),
    fail: e => console.log("FAILED: " + e)
  });
};
