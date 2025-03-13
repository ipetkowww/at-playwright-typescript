// get element by tag name
var x = document.getElementsByTagName("h1")[0];
x.textContent = "CHANGED";
//get h1 tag by css selector
document.querySelector("h1");
//create element in DOM
var paragraph = document.createElement("p");
paragraph.textContent = "Created paragraph via TypeScript";
// document.body.append(paragraph);
var addItemsContent = document.getElementsByClassName("add-items");
console.log(addItemsContent);
// append element in the html structure
addItemsContent[0].append(paragraph);
// add event listner on keyboard press
// document.addEventListener("keypress", (event: KeyboardEvent) => {
//   console.log(event.key);
// });
paragraph.remove();
// Add and remove list items:
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
addButton.addEventListener("click", function () {
    addListItem();
});
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
function addListItem() {
    if (itemInput.value !== "") {
        var liElement_1 = document.createElement("li");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.margin = "5px";
        deleteButton.addEventListener("click", function () {
            liElement_1.remove();
        });
        liElement_1.textContent = itemInput.value;
        list.append(liElement_1);
        liElement_1.append(deleteButton);
        itemInput.value = "";
        itemInput.focus();
    }
}
