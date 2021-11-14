console.log("D&D");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", () => {
  console.log("Drag start has been triggered");
});
imgBox.addEventListener("dragend", () => {
  console.log("Drag end has been triggered");
});
