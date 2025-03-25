// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
const addBorderButton = document.querySelector(
  "#add-border-btn"
) as HTMLButtonElement;
const resetButton = document.querySelector("#reset-btn") as HTMLButtonElement;

const contentSection = document.querySelector(".content") as HTMLElement;

addBorderButton.addEventListener("click", (): void => {
  contentSection.style.border = "2px solid red";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
const changeTextButton = document.querySelector(
  "#change-text-btn"
) as HTMLButtonElement;
changeTextButton.addEventListener("click", (): void => {
  contentSection.style.color = "blue";
});

// Add event listener when button with id "toggle-bg-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
const toggleBackgroundButton = document.querySelector(
  "#toggle-bg-btn"
) as HTMLButtonElement;
toggleBackgroundButton.addEventListener("click", (): void => {
  contentSection.style.background = "gray";
});

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
contentSection.addEventListener("mouseover", (): void => {
  contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});

contentSection.addEventListener("mouseout", (): void => {
  contentSection.style.boxShadow = "";
});

resetButton.addEventListener("click", (): void => {
  contentSection.style.background = "";
  contentSection.style.color = "";
  contentSection.style.border = "";
});
