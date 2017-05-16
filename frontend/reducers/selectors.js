export const asArray = ({ locations }) => (
  Object.keys(locations).map(key => locations[key])
);
