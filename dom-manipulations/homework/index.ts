// Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
const heading1Element: Element | null = document.querySelector("#title");
if (heading1Element) {
  heading1Element.textContent = "Text of h1 tag has been changed";
}

// 2.Change the color of the paragraph inside div.content.
const paragraphElement: HTMLParagraphElement =
  document.getElementsByTagName("p")[0];
paragraphElement.style.color = "red";

// 3.Change the list items textContent for example to be list of fruits.
const fruitsList: string[] = ["Apple", "Orange", "Mango"];

const listItems: NodeListOf<Element> = document.querySelectorAll("#list > li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].textContent = fruitsList[i];
}

// 4.Add a button and apply border style "1px solid red" to it.
const button: HTMLButtonElement = document.getElementsByTagName("button")[0];
button.style.border = "1px solid red";
