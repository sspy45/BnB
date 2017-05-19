export const asArray = ({pets}) => {
  console.log(Object.keys(pets).map(key => pets[key]));
  return Object.keys(pets).map(key => pets[key]);
};
