// 1️⃣ Create a new <div> and append it to <body>, then build a <ul> with 3 <li> items
const newDiv = document.createElement("div");
document.body.append(newDiv);

const ul = document.createElement("ul");
newDiv.append(ul);

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = i.toString();
  ul.append(li);
}

// 2️⃣ Use innerHTML to add a heading and subheading inside the <div>
newDiv.innerHTML += `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
  <p><em>By: Your Name, BA.</em></p>
`;

// 3️⃣ Modify the style of the <main id="main"> element
const main = document.getElementById("main");
main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

// 4️⃣ Update class names on main to add/remove visual classes
main.classList.add("pet-listing", "dog");
main.classList.replace("dog", "sale");

// 5️⃣ Remove the second <li> from the first <ul> on the page
const firstUl = document.getElementsByTagName("ul")[0];
const secondLi = firstUl.querySelector("li:nth-child(2)");
firstUl.removeChild(secondLi);

// 6️⃣ Remove an entire <ul> element from the DOM
const allUls = document.getElementsByTagName("ul");
if (allUls.length > 1) {
  allUls[1].remove();
}

// 7️⃣ Create a new node with your name and ‘is the champion’ text
const champDiv = document.createElement("div");
champDiv.textContent = "YourName is the champion";
document.body.append(champDiv);
