// function returnNumber(num, min, max){
//     let number = Math.random()*num;
//    if(num>=min && num<=max){
//        console.log('True');
//    }else {
//        console.log('False')
//    }
// }
// returnNumber(20, 10, 60);

//zadatak2

// let array = [3,1,'afs', 'vre', 4, -2, 5, 17];

// function findNumber(arr){
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             // console.log(arr[i])
//             newArray.push(arr[i]);
//         }
//     }
//     newArray.sort(function(a, b){return a-b});
//     let min = newArray[0];
//     return min;
// }
// let funkc = findNumber(array);
// console.log(funkc)

//zadatak 3

let minString ="Danas, 18tog Septembra, bice hladnije nego juce u 20h, 16og Septembra";

// function minIntegerFromString(str){
//     let regex = /\d+/g;
//     let matches = str.match(regex);
//     let sort = matches.sort();
//     let min =parseInt(sort)
//     console.log(min);
//     return min

// }
// let minimum = minIntegerFromString(minString)
// console.log(minimum)


//drugi nacin
function minIntegerFromString(str) {
  let newArray = [];
  let secondNewArray = [];
  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    let parse = parseInt(splitStr[i]);
    if (Number.isInteger(parse)) {
      newArray.push(parse.toString());

      let newItem = newArray[i] + newArray[i+1];
      secondNewArray.push(newItem);
      console.log(newItem);
        newArray[i] += newArray[i+1];
        console.log(newArray[i])
    }
  }
  newArray.sort(function (a, b) {
    return a - b;
  });
  let min = newArray[0];
  return min;
}
let minimum = minIntegerFromString(minString);
// console.log(minimum)



//4zadatak

// let array = ['abc', 'ac', 'bdca', 'edagas'];

// function  concatStringsByLength(arr, type){
//     let joined = '';
//     if(type === 0){
//        joined = arr.join('');
//     }else {
//         joined = arr.reverse().join('');
//     }
//     return joined;
// }

// let concat = concatStringsByLength(array, 1);
// console.log(concat)