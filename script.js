document.getElementById("enterBtn").addEventListener("click", function() {
      const p = document.getElementById("status");
      const h1 = document.createElement("h1");
      h1.id = p.id; 
      h1.textContent = "Entered Metaverse";
      p.replaceWith(h1);