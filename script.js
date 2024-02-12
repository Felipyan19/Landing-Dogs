const Dogs = [
    {
        "imagen": "../../assets/pexels-dominika-roseclay-2023384.jpg",
        "titulo": "Pepe",
        "contenido": "Pepe es un perro de raza Labrador Retriever. Tiene un pelaje dorado y es muy juguetón. Le encanta correr por el parque y jugar con su pelota.",
        "genero": "Macho"
    },
    {
        "imagen": "../../assets/pexels-kat-smith-551628.jpg",
        "titulo": "Luna",
        "contenido": "Luna es una perrita mestiza de tamaño mediano. Tiene un pelaje blanco y negro, con manchas en forma de corazón en su lomo. Es muy cariñosa y le encanta dar paseos por la playa.",
        "genero": "Hembra"
    },
    {
        "imagen": "../../assets/pexels-mindaugas-1294062.jpg",
        "titulo": "Rocky",
        "contenido": "Rocky es un perro de raza Bulldog Inglés. Tiene un aspecto robusto y una expresión facial adorable. Aunque parece serio, en realidad es muy amigable y le encanta recibir caricias en su barriga.",
        "genero": "Macho"
    },
    {
        "imagen": "../../assets/pexels-mithul-varshan-2318990.jpg",
        "titulo": "Bella",
        "contenido": "Bella es una perrita de raza Golden Retriever. Tiene un pelaje largo y dorado que brilla al sol. Es muy inteligente y aprende rápidamente nuevos trucos. Le encanta jugar con sus juguetes y dar largos paseos por el campo.",
        "genero": "Hembra"
    },
    {
        "imagen": "../../assets/pexels-pixabay-33287.jpg",
        "titulo": "Max",
        "contenido": "Max es un perro de raza Pastor Alemán. Tiene un pelaje negro y marrón, con una mirada inteligente y alerta. Es muy leal y protector con su familia. Le encanta jugar a atrapar la pelota y es muy activo.",
        "genero": "Macho"
    },
    {
        "imagen": "../../assets/pexels-sebastian-coman-travel-3448793.jpg",
        "titulo": "Coco",
        "contenido": "Coco es una perrita mestiza de pequeño tamaño. Tiene un pelaje blanco y suave, con orejas largas y caídas. Es muy traviesa y le encanta explorar su entorno. Aunque es pequeña, tiene un gran corazón y es muy valiente.",
        "genero": "Hembra"
    }
  ];
  

if (localStorage.getItem("Dogs") === null) {

  localStorage.setItem("Dogs", JSON.stringify(Dogs));
  
}


setTimeout(() => {
   window.location.href = "./src/home/home.html";
}, 3000)