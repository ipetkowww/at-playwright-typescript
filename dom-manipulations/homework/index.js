// Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
var heading1Element = document.querySelector("#title");
if (heading1Element) {
    heading1Element.textContent = "Text of h1 tag has been changed";
}
// 2.Change the color of the paragraph inside div.content.
var paragraphElement = document.getElementsByTagName("p")[0];
paragraphElement.style.color = "red";
// 3.Change the list items textContent for example to be list of fruits.
var fruitsList = ["Apple", "Orange", "Mango"];
var listItems = document.querySelectorAll("#list > li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].textContent = fruitsList[i];
}
// 4.Add a button and apply border style "1px solid red" to it.
var button = document.getElementsByTagName("button")[0];
button.style.border = "1px solid red";
