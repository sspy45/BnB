export const fetchPets = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/pets`,
  })
);

export const editPet = (pet) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${pet.owner_id}/pets/${pet.id}`,
    data: {pet}
  });
};

export const fetchBookings = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/bookings`,
    data: {type: 'user'}
  })
);

export const fetchBookingLocations = (id, data) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}/locations/`,
    data: {type: data}
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
