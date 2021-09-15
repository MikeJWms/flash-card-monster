// creates a new array populated with the results of a callback
// function called on every map property
export const mapMap = (
  map: Map<any, any>,
  callbackFn: (value: any, key: any) => any
): Array<any> => {
  const array: Array<any> = [];
  map.forEach((value: any, key: any) => {
    array.push(callbackFn(value, key));
  });
  return array;
};
