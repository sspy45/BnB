export const asArray = ({ pets }) => (
  Object.keys(pets).map(key => pets[key])
);
