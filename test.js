const input = [
	["key1", 1, 2, 3, 4],
	["key2", 4, 5, 6, 7]
]

// this one is not optimal because each key-value pair in-place results in a negligible amount of memory growth
// and then new array for each key-value pair results in doubling the amount of memory required
const transform = (input) => {
  const object = {};
  input.forEach((element) => {
    object[element[0]] = element[1].slice(1, element.length);
  });
  return object;
};


// in many cases it may not be possible to control the format of the input
// so this algorithm is the efficient one
// here we take in consideration that the input is not empty before calling this func
const transform =(input) => {
  const result = input.reduce((elem, val) => {
    // where k represent k and, v the values(here our whole initial array: ["key1", 1, 2, 3, 4])
    // then we need tp remove the "key1" from the begening so we use slice() function
    // then we associate it to each key in the initial array
    elem[val[0]] = val[1];
    return elem;
  }, {});
  // and the result will convert our array of objects into an object of objects
  return result;
}
