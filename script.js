let bodyElement = document.querySelector('body');
const setGridButton = document.createElement('button');
let gridContainer = document.createElement('div');

setGridButton.textContent = "Set Grid Size";
setGridButton.style.cssText = " display: block; margin: 0 auto; margin-bottom: 50px;"

setGridButton.addEventListener('click', () => {
  const gridsize = Number(prompt("How many Rows?"));
  createGrid(gridsize < 20 ? gridsize : 20);
})

bodyElement.appendChild(setGridButton);
bodyElement.appendChild(gridContainer);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getColor() {
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'brown', 'yellow'];

  let finalColor = colors[Math.floor(Math.random() * colors.length)];

  return finalColor;
}

function createGrid(rowNumber) {

  bodyElement.removeChild(gridContainer);
  gridContainer = document.createElement('div');
  bodyElement.appendChild(gridContainer);

  let currentRow = document.createElement('div');
  currentRow.style.cssText = 'display: flex; justify-content: center;';

  for (let i = 0; i < (rowNumber * 16); i++) {

    let gridItem = document.createElement('div');
    gridItem.style.cssText = "background-color: black; min-width: 25px; min-height: 25px; border: 1px solid white;";

    gridItem.addEventListener('mouseover', (e) => {
      if (gridItem.style.backgroundColor != 'black') {
        gridItem.style.backgroundColor = 'black';
      } else {
        gridItem.style.backgroundColor = getColor();
      }
      console.log(e.target.className);
    });
    currentRow.appendChild(gridItem);

    if (currentRow.childElementCount === 16) {
      gridContainer.appendChild(currentRow);
      currentRow = document.createElement('div');
      currentRow.style.cssText = 'display: flex; justify-content: center;';
    }
  }

}

