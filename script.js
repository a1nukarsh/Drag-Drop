console.log("D&D");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", () => {
  console.log("Drag start has been triggered");
  
});
imgBox.addEventListener("dragend", () => {
  console.log("Drag end has been triggered");
}); 

for(whiteBox of whiteBoxes){
  whiteBox.addEventListener('dragover',()=>{
    
  })
  whiteBox.addEventListener('dragenter',()=>{

  })
  whiteBox.addEventListener('dragleave',()=>{

  })
  whiteBox.addEventListener('drop',()=>{

  })
}