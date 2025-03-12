const bodyElement: HTMLElement = document.body;

bodyElement.style.backgroundColor = "#000";
bodyElement.style.color = "#fff";
bodyElement.style.border = "2px solid red";

console.log("body background", bodyElement.style.backgroundColor);

const divElement: HTMLCollectionOf<HTMLElement> =
  document.getElementsByTagName("div");

console.log("divs", divElement);

const buttonElement: HTMLButtonElement =
  document.getElementsByTagName("button")[0];

buttonElement.style.backgroundColor = "green";

const headingTwoElements: HTMLCollectionOf<HTMLHeadingElement> =
  document.getElementsByTagName("h2");

console.log("h2 elements", headingTwoElements);

const shops: HTMLElement | null = document.getElementById("shops");
console.log("shops id", shops);

const items: HTMLCollectionOf<Element> =
  document.getElementsByClassName("list-item");
console.log("items", items);

const secondItem: Element = items[1];
secondItem.textContent = "Second Element";
console.log("second item", secondItem);

const selectedH2 = document.querySelector("h2") as HTMLHeadingElement;
console.log("selected h2", selectedH2);
