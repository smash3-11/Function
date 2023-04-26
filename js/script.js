//---------#3-longestName---------

function max_name(firstName, secondName, thirdName) {

    let longestName = firstName;

    if(secondName.length > longestName.length){
        longestName = secondName
    }
    if(thirdName.length > longestName.length) {
        longestName = thirdName
    }
    console.log(longestName + ' longest name ' );
}

max_name('Alex', 'George', 'Michael')


//-----------------#4-minNumbers------------------

function min(...args) {

  let values = [];

  for (let arg of args) {

    if (Array.isArray(arg)) {
      values.push(...arg);
    } else if (typeof arg === 'object' && arg !== null) {
      values.push(...Object.values(arg));
    } else {
      values.push(arg);
    }
  }
  console.log(
   values.reduce((a, b ) => b < a ? b : a)
   );
}
min(3, 2, 5)
min([1, 2,7,4,5,67,0])
min({a: 1, b: 2})
min({a: 1, b: 2}, {a: 11, b: 12}) 

 //---- 
//-----------5-sortWithoutSort------

function sortWithoutSort(arr) {
  let sortedArr = [];
  for (let item of arr) {
    let i = 0;
    while (sortedArr[i] < item) i++;
    sortedArr.splice(i, 0, item);
  }
  // return sortedArr;
  console.log(sortedArr);
}

sortWithoutSort([1, 2,3,4,5,6,78,54,3,4,5,6])






























// function min_nam(...numbers) {
//   let minimum = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < minimum) {
//       minimum = numbers[i];
//     }
//   }
//   console.log(min);
// }
// let min = min_nam(1, 2, 4, 5);

// function min_nam(numbers) {
//   let minimum = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < minimum) {
//       minimum = numbers[i];
//     }
//   }
//   console.log(min);
// }

// let min = min_nam([1,2,5]);


// ---

// function min_nam(numbers) {
//     if (numbers.length === 1) {
//       return numbers[0];
//     } else {
//       let minimum = numbers[0];
//       for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < minimum) {
//           minimum = numbers[i];
//         }
//       }
//       return minimum;
//     }
//   }

//   let arr = [10, 5, 20, 3, 8];
// let min = min_nam(arr);
// console.log(min); // 3

// let singleNumber = (1,3,8);
// let minimumSingleNumber = min_nam(singleNumber);
// console.log(minimumSingleNumber); // 7
