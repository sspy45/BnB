export const asArray = ({pets}) => {
  return Object.keys(pets).map(key => pets[key]);
};
