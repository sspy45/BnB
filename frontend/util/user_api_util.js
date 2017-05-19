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
    url: 'api/pet_types/'
  })
);

export const createPet = (pet) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${pet.owner_id}/pets`,
    data: {pet}
  });
};

export const removePet = (pet) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${pet.owner_id}/pets/${pet.id}`
  });
};
