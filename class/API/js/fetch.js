function loadData() {
  const dataUrl = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(dataUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

// users data
function user() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

// display the data
function displayUser(data) {
  console.log(data);
}
