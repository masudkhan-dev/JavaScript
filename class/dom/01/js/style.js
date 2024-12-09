const containers = document.querySelectorAll("section");

for (const container of containers) {
  container.style.border = "3px solid green";
  container.style.marginBottom = "10px";
  container.style.padding = "10px";
  container.style.borderRadius = "10px";
  container.style.backgroundColor = "lightgray";
}

const lastContainer = (document.getElementById(
  "last-container"
).style.backgroundColor = "red");

