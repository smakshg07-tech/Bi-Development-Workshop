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
  if (users.length <= 1) return;

  let nextIndex = Math.floor(Math.random() * users.length);
  if (nextIndex === currentIndex) {
    nextIndex = (currentIndex + 1) % users.length;
  }

  currentIndex = nextIndex;
  renderUser(currentIndex);
}