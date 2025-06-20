const button = document.getElementById('enterBtn');
    const statusElement = document.getElementById('status');

    button.addEventListener('click', () => {
      // Replace the <p> element with an <h1> element
      const h1 = document.createElement('h1');
      h1.id = 'status';
      h1.textContent = 'Entered Metaverse';
      statusElement.replaceWith(h1);
    });
