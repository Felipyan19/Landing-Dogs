
const renderCards = (Dogs) => {

  const cardsContainer = document.getElementById("cardsContainer");

  // Iterar sobre cada objeto en el array Dogs y crear una tarjeta para cada uno
  Dogs.forEach(function (OneDog) {
    // Crear elementos HTML para la tarjeta y establecer las clases de Bootstrap
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.display = "flex";
    cardDiv.style.alignItems = "center";
    cardDiv.style.justifyContent = "center";
    cardDiv.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
    cardDiv.style.background = "rgba(0, 0, 0, 0.5)";

    // Crear la imagen de la tarjeta
    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = OneDog.imagen;
    img.alt = "Imagen de la card";
    img.style.width = "339px";
    img.style.height = "339px";
    img.style.objectFit = "cover";

    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Crear el título de la tarjeta
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = OneDog.titulo;

    // Crear el texto de la tarjeta
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = OneDog.contenido;

    // Agregar la imagen, el título y el texto al cuerpo de la tarjeta
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    // Agregar la imagen y el cuerpo de la tarjeta a la tarjeta
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // Agregar la tarjeta a la columna
    colDiv.appendChild(cardDiv);

    // Agregar la columna al contenedor de las tarjetas
    cardsContainer.appendChild(colDiv);
  });

}


// fetch('../../mocks.json')
//   .then(response => response.json())
//   .then(data => { 
//     const dogsHembras = data.Dogs.filter((dog) => dog.genero === "Hembra");
//     renderCards(dogsHembras);
//   })
//   .catch(error => {
//     console.error('Error fetching the JSON file', error);
//   });


const dogData = JSON.parse(localStorage.getItem("Dogs"))
const dogsHembras = dogData.filter((dog) => dog.genero === "Hembra");
renderCards(dogsHembras);
