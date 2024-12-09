// কোথায় এড করব
const placeList = document.getElementById("place-ul");

// কি এড করব
const newItem = document.createElement("li");
newItem.innerText = "hedar bon";

// ভিতরে ঢুকিয়ে
placeList.appendChild(newItem);

console.log(placeList);

const plaeList2 = document.getElementById("place-ul");
const newItem2 = document.createElement("li");
newItem2.innerText = "mc bon";

plaeList2.appendChild(newItem2);

// you can create a full section using js

const mainContainer = document.getElementById("main-section");

const section = document.createElement("section");
mainContainer.appendChild(section);

const h1 = document.createElement("h1");
h1.innerText = " my food list";
section.appendChild(h1);

const ul = document.createElement("ul");
section.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "burger";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "pizza";
ul.appendChild(li3);


// you can create a section with shortcurly

const dressContainer = document.createElement('section');

mainContainer.appendChild(dressContainer);

dressContainer.innerHTML = `
<h1>my dress collection</h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>sando genj</li>
    <li>t-shirt</li>
</ul>

`