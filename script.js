const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];


// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter the name:");
  const age = parseInt(prompt("Enter the age:"));
  const profession = prompt("Enter the profession:");
  let newPerson = { name, age, profession };
  data.push(newPerson);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter(person => person.profession !== "admin");
  data.length = 0; // Clear the original array
  Array.prototype.push.apply(data, filteredData); 
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "dummy1", age: 50, profession: "dummy" },
    { name: "dummy2", age: 21, profession: "dummy" }
  ];
  const result = data.concat(dummyArray);
  console.log(result);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((acc, person) => acc + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  let above25 = data.some(person => person.age > 25);
  console.log("At least one person is above 25:", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = [];
  
  for (let person of data) {
    if (!uniqueProfessions.includes(person.profession)) {
      uniqueProfessions.push(person.profession);
    }
  }
  
  console.log("Unique Professions:", uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  let john = data.find(person => person.name === "john");
  if (john) {
    john.profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCounts = {
    developer: 0,
    admin: 0
  };

  data.forEach(person => {
    if (person.profession === "developer") {
      professionCounts.developer++;
    } else if (person.profession === "admin") {
      professionCounts.admin++;
    }
  });

  console.log("Profession Count:", professionCounts);
}

