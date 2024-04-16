window.onload = function() {
    const form = document.getElementById("contactForm");
    const errorBox = document.getElementById("errorBox");
    const successBox = document.getElementById("successBox");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
  
      if (nombre === "" || email === "" || mensaje === "") {
        errorBox.style.display = "block";
        setTimeout(function() {
          errorBox.style.display = "none";
        }, 3000); 
      } else {
        errorBox.style.display = "none";
        successBox.style.display = "block";
        setTimeout(function() {
          successBox.style.display = "none";
        }, 3000); 
      }
    });

  }
