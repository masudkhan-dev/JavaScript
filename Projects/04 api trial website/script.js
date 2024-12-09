fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => post(data));

function post(data) {
  const postContainer = document.getElementById("post-container");

  for (const post of data) {
    const div = document.createElement("div");
    div.classList.add("bg-blue-200");

    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      `;

    postContainer.appendChild(div);
  }
}
