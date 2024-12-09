function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(i) {
  const ul = document.getElementById("user-list");

  for (const user of i) {
    const li = document.createElement("li");
    li.innerText = user.username;

    ul.appendChild(li);
  }
}
