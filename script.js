document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements based on Acceptance Criteria
    const statusElement = document.getElementById('status'); // This will initially be the <p> tag
    const enterButton = document.getElementById('enterBtn');

    // Add an event listener to the button
    enterButton.addEventListener('click', () => {
        // Change the content and type of the status element
        const newHeading = document.createElement('h1'); // Create a new <h1> element
        newHeading.id = 'status'; // Assign the 'status' ID to the new <h1>
        newHeading.textContent = 'Entered Metaverse'; // Set the text content

        // Replace the old status element with the new one
        statusElement.parentNode.replaceChild(newHeading, statusElement);

        // Optional: Disable the button after clicking, as the action is done
        enterButton.disabled = true;
        enterButton.textContent = 'Entered'; // Change button text
        enterButton.style.backgroundColor = '#6c757d'; // Gray out the button
        enterButton.style.cursor = 'not-allowed';
    });
});