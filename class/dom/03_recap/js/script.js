// className()
const allClass = document.getElementsByClassName("section-title");
console.log(allClass);

// TagName()
const allLi = document.getElementsByTagName("li");
console.log(allLi);

// Id()
const section = document.getElementById("second-item");
console.log(section);

// styles

const secondItem = document.getElementById("second-item");

secondItem.style.backgroundColor = "lightblue";
secondItem.style.padding = "15px 20px";
secondItem.style.borderRadius = "10px";

const secondTitle = document.getElementById("section-title");

secondTitle.style.fontSize = "40px";
secondTitle.style.textTransform = "uppercase";
secondTitle.style.fontFamily = "arial";

// add

const thirdList = document.getElementById("third-list");

const li = document.createElement("li");
li.innerText = "List item 6666666";

thirdList.appendChild(li);

// dynamic section add

const mainContainer = document.getElementById("main-container");

const newsection = document.createElement("section");

newsection.innerHTML = `
<h1>new dynacmic section with javaScript</h1>
<ul>
    <li>new list item</li>
    <li>new list item</li>
    <li>new list item</li>
</ul>
`;

mainContainer.appendChild(newsection);

// dynamic class

const dynamicClass = document.getElementsByClassName("section-title");

for (const i of dynamicClass) {
  i.style.color = "red";
}
