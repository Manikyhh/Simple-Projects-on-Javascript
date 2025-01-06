// Array to hold people data
let people = [];

// Function to display the people list on the page
function displayPeople() {
  const listElement = document.getElementById("people-list");
  listElement.innerHTML = ''; // Clear the list

  people.forEach(person => {
    const li = document.createElement("li");
    li.textContent = `${person.name}, Age: ${person.age}`;
    listElement.appendChild(li);
  });
}

// Function to add a new person to the array
function addPerson() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  if (name && !isNaN(age)) {
    const newPerson = { name, age };
    people.push(newPerson);
    displayPeople();

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
  } else {
    alert("Please enter valid name and age.");
  }
}

// Function to sort people by name (alphabetical order)
function sortByName() {
  people.sort((a, b) => a.name.localeCompare(b.name));
  displayPeople();
}

// Function to sort people by age (ascending order)
function sortByAge() {
  people.sort((a, b) => a.age - b.age);
  displayPeople();
}
