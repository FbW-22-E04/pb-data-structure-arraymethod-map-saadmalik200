// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  //write your code here
  // console.log(str);
  let newStr = "";
  const strToArr = str.split("-");
  console.log(strToArr);
  // const first =
  //   strToArr[0] + strToArr[1][0].toUpperCase() + strToArr[1].slice(1);
  // console.log(first);
  const mapOutput = strToArr
    .map((item, i) => (i == 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join("");

  // console.log(mapOutput);
}

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

//write your code here

// let usersMapped = [];
// usersMapped.push(john);
// usersMapped.push(pete);
// usersMapped.push(mary);

let usersMapped = users.map((user) => ({
  // console.log(item);
  fullName: user.name + " " + user.surname,
  id: user.id,
  // delete item.name;
  // delete item.surname;
  // return item;
}));

// console.log(newUserMapped);
// console.log(usersMapped);
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 },
// ];

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
