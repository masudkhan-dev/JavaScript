document.getElementById("btn-post").addEventListener("click", function () {
  const input = document.getElementById("comment");
  const inputText = input.value;

  const container = document.getElementById("container-main");
  const p = document.createElement("p");
  p.innerText = inputText;

  container.appendChild(p);
  input.value = ''
});
