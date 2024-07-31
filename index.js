// Write your code here!
// Find element by ID
const mainElement = document.getElementById('main');
// Check if 'main' element exists
if(mainElement) {
    // Remove 'main' element from DOM
    mainElement.remove();
}
// Create new h1 element
const newHeader = document.createElement('h1');
// Set text id to 'vicory' for the <h1> element
newHeader.id = 'victory'
// Append the <h1> element to the body
document.body.appendChild(newHeader);
//  The 'newHeader' variable that points to the <h1> node has the text "YOUR-NAME is the champion"
newHeader.textContent = 'Priscila is the champion'