document.addEventListener("DOMContentLoaded", function() {

    const modalRegistro = () =>{
      $('#registroExitosoModal').modal('show');
    }
    const form = document.getElementById('form');
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      if (form.checkValidity() === false) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      } else {
        const fields = Object.fromEntries(new FormData(e.target));
        const dogsData = JSON.parse(localStorage.getItem("Dogs")) || [];
           
        const bodyModal = document.getElementById('modal-body')

        bodyModal.innerHTML = `<div>
        <p>Felicidades!<strong> ${fields.titulo}${' '}</strong>ha sido registrado correctamente</p>
        <img src=${fields.imagen} class="w-100" >
        <h3>${fields.titulo}</h3>
        <p>${fields.contenido}</p>
        `

        if (dogsData) {
          localStorage.removeItem("Dogs");
          localStorage.setItem("Dogs", JSON.stringify([...dogsData, fields]));
        } else {
          localStorage.setItem("Dogs", JSON.stringify([fields]));
        }
      }
      modalRegistro();
      form.classList.add('was-validated');
    });
  });
  