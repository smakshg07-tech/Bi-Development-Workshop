const users = [
  {
    name: "John Doe",
    gender: "Male",
    avatar: "john-doe.png"
  },
  {
    name: "Jane Doe",
    gender: "Female",
    avatar: "jane-doe.png"
  }
];

let currentIndex = 0;

function renderUser(index) {
  const user = users[index];
  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-gender").textContent = user.gender;
  document.getElementById("user-avatar").src = user.avatar;
  document.getElementById("user-avatar").alt = `${user.name} avatar`;
}

function toggleUser() {
  currentIndex = (currentIndex + 1) % users.length;
  renderUser(currentIndex);
}

function randomUser() {
  fetch("https://randomuser.me/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const person = data.results[0];
      const fullName = `${person.name.first} ${person.name.last}`;
      const gender = person.gender;

      document.getElementById("user-name").textContent = fullName;
      document.getElementById("user-gender").textContent = gender;
      document.getElementById("user-avatar").src = person.picture.large;
      document.getElementById("user-avatar").alt = `${fullName} avatar`;
    })
    .catch((error) => {
      console.error("Could not load random user:", error);
      alert("Could not load a random user. Please try again.");
    });
}