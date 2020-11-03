//Write a function that takes in an array of integers and returns a sorted version of the array.
//Using the insertion sort algorithm

let array = [8, 5, 2, 9, 5, 6, 3];

//lets start with iterating our array

const insertionSort = (array) => {
  //foreach takes a callback that provides, current value and index
  array.forEach((cv, i) => {
    //element at current index
    let current = array[i];
    let previous;

    for (
      previous = i - 1; //initializer
      previous >= 0 && array[previous] > current; //condition
      previous-- // decrement
    ) {
      array[previous + 1] = array[previous];
    }

    array[previous + 1] = current;
  });

  return array;
};

console.log(insertionSort(array));
