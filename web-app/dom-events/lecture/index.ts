// get element by tag name
const x = document.getElementsByTagName("h1")[0];
x.textContent = "CHANGED";

//get h1 tag by css selector
document.querySelector("h1");

//create element in DOM
const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "Created paragraph via TypeScript";

// document.body.append(paragraph);

const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log(addItemsContent);

// append element in the html structure
addItemsContent[0].append(paragraph);

// add event listner on keyboard press
// document.addEventListener("keypress", (event: KeyboardEvent) => {
//   console.log(event.key);
// });
paragraph.remove();

// Add and remove list items:

const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

addButton.addEventListener("click", () => {
  addListItem();
});

itemInput.addEventListener("keypress", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addListItem();
  }
});

function addListItem(): void {
  if (itemInput.value !== "") {
    const liElement: HTMLLIElement = document.createElement("li");
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.margin = "5px";

    deleteButton.addEventListener("click", () => {
      liElement.remove();
    });

    liElement.textContent = itemInput.value;
    list.append(liElement);
    liElement.append(deleteButton);

    itemInput.value = "";
    itemInput.focus();
  }
}
