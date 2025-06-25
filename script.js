document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    // Add a click event listener to the button
    enterButton.addEventListener('click', () => {
        // Create a new h1 element
        const newH1 = document.createElement('h1');

        // Set its text content
        newH1.textContent = "Entered Metaverse";

        // Add a class for potential styling (optional)
        newH1.classList.add('entered-h1');

        // Replace the existing paragraph with the new h1 element
        // We need to get the parent of the statusParagraph to replace it
        statusParagraph.parentNode.replaceChild(newH1, statusParagraph);

        // Optional: Hide the button after it's clicked if it's a one-time action
        enterButton.style.display = 'none';
    });
});