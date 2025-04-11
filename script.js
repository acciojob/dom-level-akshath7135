//your JS code here. If required.
// Function to determine the DOM level of the element with id 'level'
function getDOMLevel() {
    // Get the element with id 'level'
    const element = document.getElementById('level');

    // Initialize the level counter
    let level = 0;

    // Traverse up the DOM tree to count the number of parent elements
    let currentElement = element;
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    // Display the result using alert
    alert(`The level of the element is: ${level}`);
}

// Call the function to get and display the DOM level
getDOMLevel();