const value = "1";
const obj = {
  key1: 'value1',
  key2: 'value2'
}
const filterObj = (obj, value) => {
  const keys = Object.keys(obj).filter(key => key.includes(value));
  const filteredObj = Object.fromEntries(
    keys
      .sort((a, b) => value.indexOf(a) - value.indexOf(b))
      .map(key => [key, obj[key]])
  );
  return filteredObj;
}
console.log(filterObj(obj, value))