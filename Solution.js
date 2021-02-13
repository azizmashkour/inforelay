  const solution =(arr)=> {
    // at the begening be initialize all
    // at the first position of the given array
    let k = 0;
    let min, max = arr[0];
    // we loop within the array
    // to retrieve respectively the max, the min and,
    // the index of the best position to split the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        k = i;
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    const maxDiff = Math.abs(max - min);
    console.log(`| ${max} - ${min} | = ${maxDiff} splitted at ${k}`);
    return maxDiff;
  }
