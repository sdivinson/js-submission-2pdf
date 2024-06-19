//1

let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}

console.log(groupByType(transactions));

// Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit", amount: 200 }],
// withdrawal: [{ type: "withdrawal", amount: 50 }, { type: "withdrawal", amount: 30 }] }

//2

let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];

let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}

console.log(filterEmployees(employees, ageLimit));

// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

//3

let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let classList of classes) {
        for (let name of classList) {
            if (nameSet.has(name)) {
                return true;
            }
            nameSet.add(name);
        }
    }
    return false;
}

console.log(checkDuplicates(classes));
// Output: true

//4

function returnTime() {
    let date = new Date();
    return date.toLocaleString();
  }
  
  console.log(returnTime());

  //show current date & time
 //5//
  
 function calculateAge(birthdate) {
    let date = new Date();
    let birthday = new Date(birthdate);
  
    let age = date.getFullYear() - birthday.getFullYear();
    // again a terenary here. handy feature.
    return typeof age === "number"
      ? age
      : "invalid input! follow this format (YYYY:MM:DD)";
  }
  console.log(calculateAge("2003-02-22"));
  
  //6//
  
  // using setDate() mehtod to add days.
  // using toLocaleDateString() to return date except time.
  function addDays(date, days) {
    let new_date = new Date(date);
    new_date.setDate(days);
    return new_date.toLocaleDateString();
  }
  
  console.log(addDays("2022-06-15", 10));
  
  //7//
  
  function dateDifference(date1, date2) {
    let a = new Date(date1);
    let b = new Date(date2);
    let in_milli_seconds = Math.abs(a - b);
    let one_day_in_milli_seconds = 86400000;
  
    if (date1 === date2) {
      return "same dates gieven!";
    } else {
      return in_milli_seconds / one_day_in_milli_seconds + " day/s";
    }
  }
  console.log(dateDifference("2022-06-16", "2022-06-16"));
  
  //8//
  
  // a typeof object.
  // A Map holds key-value pairs where the keys can be any datatype.
  // A Map remembers the original insertion order of the keys.
  
  let userPreferences = new Map();
  function setPreference(key, value) {
    userPreferences.set(key, value);
  }
  function getPreference(key) {
    return userPreferences.get(key);
  }
  
  setPreference("theme", "dark");
  setPreference("fontSize", "16px");
  console.log(getPreference("theme")); // Output: dark
  console.log(getPreference("fontSize")); // Output: 16px
  
  //9//
  
  let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
  
  function countOccurrences(arr) {
    let map = new Map();
    let arr_unique_items = new Set(arr);
  
    for (let item of arr_unique_items) {
      let count = 0; // initiating a count for every unique item
  
      for (let i of arr) {
        if (item === i) {
          count++;
        }
      }
      map.set(item, count);
    }
    return map;
  }
  console.log(countOccurrences(strings));
  
  //10//
  
  let employes = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  function mapEmployeeIdsToNames(employes) {
    let map = new Map();
    employes.forEach((emp) => {
      map.set(emp.id, emp.name);
    });
    return map;
  }
  let employeeMap = mapEmployeeIdsToNames(employes);
  console.log(employeeMap);
  //question 11
//Write a function to manage inventory for a store using a Map. The Map should store item
// names as keys and their quantities as values. Provide functions to add new items,
// update item quantities, and check the quantity of an item.
let inventory = new Map();
function addItem(itemName, quantity) {
    // use Map Object's set method to add the item to the inventory
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
// use Map Object's has, set, get methods to update the quantity

if(inventory.has(itemName)){
//if the item exists, update the quantity
let currentQuantity = inventory.get(itemName);
    inventory.set(itemName, currentQuantity + quantity);
}
else{
     // If not, console log the message "Item not found"
    console.log("Item not found");

}
}
function checkItemQuantity(itemName){
    // check item quantity in the inventory
    return inventory.get(itemName);
}
//adding items tot the inventory
addItem('apple', 100);
addItem('banana', 150);

//updating item quantity in the inventory
updateItemQuantity('apple', 50);

//checking item quantity in the inventory
console.log(checkItemQuantity('apple')); // Output: 150
console.log(checkItemQuantity('banana')); // Output: 150
console.log(checkItemQuantity('orange')); // Output: undefined




//question 12
// Write a function that takes an array of numbers and returns a new array with all duplicate
// items removed. (Use Set Object)
function removeDuplicates(arr){
    return [...new Set(arr)];
    //The spread operator (...) is used to expand the elements of the Set into a new array.
    //This operation takes the unique values from the Set and creates a new array with those values.
}
let numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers)); // Output: [ 1, 2, 3, 4, 5, 6 ]




//question 13
// Write a function that takes two arrays and returns a new array containing only the
// elements that are present in both arrays.
// (use Set object)
function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); // Output: [ 3, 4, 5 ]




//question 14
// Write a function that takes multiple arrays and returns a new array containing all unique
// elements from all arrays.
function union(...arrays){
    let resultSet = new Set();
    for(let arr of arrays){
        for(let item of arr){
            resultSet.add(item);
        }
    }
    return [...resultSet];
    // return resultSet;
// return [...resultSet]; returns an array.
// return resultSet; returns a Set.

}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3)); // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }







//question 15
// Write a function that takes an array of items and a set, and removes all items in the
// array from the set.

function removeItemsFromSet(items, set){
    for(let item of items){
        set.delete(item);
    }
}
let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];

removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]); // Output: [ 1, 4, 5 ]








//question 16
// Write a function that takes an array of student names representing attendance on a
// particular day and a Set representing the overall attendance. Update the Set with the
// new attendance and return the updated Set.

function updateAttendance(newAttendance, overallAttendance){
    for(let name of newAttendance){
        overallAttendance.add(name);
    }
    return overallAttendance;
}
let overallAttendance = new Set(['Alice', 'Bob', 'Charlie']);
let newAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(newAttendance, overallAttendance);
console.log([...overallAttendance]); // Output: [ 'Alice', 'Bob', 'Charlie' ]   //Charlie and Alice are added to the set