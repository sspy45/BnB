export const convertPets = ({pets}) => (
  Object.keys(pets).map(key => pets[key])
);

export const convertBookings = ({bookings}) => (
  Object.keys(bookings).map(key => bookings[key])
);

export const asArray  = (prop) => (
  Object.keys(prop).map(key =>prop[key])
);
