const users = [
  {
    name: "John Doe",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Jane Doe",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  }
];

let currentIndex = 0;

function renderUser(index) {
  const user = users[index];
  const nameEl = document.getElementById("user-name");
  const genderEl = document.getElementById("user-gender");
  const avatarEl = document.getElementById("user-avatar");

  if (nameEl) nameEl.textContent = user.name;
  if (genderEl) genderEl.textContent = user.gender;
  if (avatarEl) {
    avatarEl.src = user.avatar;
    avatarEl.alt = `${user.name} avatar`;
    avatarEl.onerror = () => {
      avatarEl.src = "https://via.placeholder.com/150?text=No+Image";
    };
  }
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

// Page load hote hi pehla user dikhane ke liye:
renderUser(currentIndex);