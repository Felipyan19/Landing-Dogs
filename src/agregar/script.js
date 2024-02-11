document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      if (form.checkValidity() === false) {
        e.stopPropagation();
      } else {
        const fields = Object.fromEntries(new FormData(e.target));
        const dogsData = JSON.parse(localStorage.getItem("Dogs")) || [];
  
        if (dogsData) {
          localStorage.removeItem("Dogs");
          localStorage.setItem("Dogs", JSON.stringify([...dogsData, fields]));
        } else {
          localStorage.setItem("Dogs", JSON.stringify([fields]));
        }
      }
  
      form.classList.add('was-validated');
    });
  });
  