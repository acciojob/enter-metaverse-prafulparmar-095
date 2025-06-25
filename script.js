document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements based on Acceptance Criteria
    // Make sure these IDs EXACTLY match your HTML
    const statusElement = document.getElementById('status'); // This will initially be the <p> tag
    const enterButton = document.getElementById('enterBtn');

    // Check if elements were found (good for debugging)
    if (!statusElement) {
        console.error("Error: Element with ID 'status' not found!");
        return; // Stop execution if critical element is missing
    }
    if (!enterButton) {
        console.error("Error: Element with ID 'enterBtn' not found!");
        return; // Stop execution if critical element is missing
    }


    // Add an event listener to the button
    enterButton.addEventListener('click', () => {
        // Create a new <h1> element
        const newHeading = document.createElement('h1');

        // Assign the 'status' ID to the NEW <h1> element
        // This is crucial for CSS styling and for tests that might check for this ID
        newHeading.id = 'status';

        // Set the text content - MUST be exactly "Entered Metaverse"
        newHeading.textContent = 'Entered Metaverse';

        // Replace the old status element (the <p>) with the new one (the <h1>)
        // statusElement.parentNode refers to the parent container of the <p> tag
        statusElement.parentNode.replaceChild(newHeading, statusElement);

        // Optional: Disable the button after clicking, as the action is done
        enterButton.disabled = true;
        enterButton.textContent = 'Entered'; // Change button text
        enterButton.style.backgroundColor = '#6c757d'; // Gray out the button
        enterButton.style.cursor = 'not-allowed';
    });
});
