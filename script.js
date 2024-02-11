const Dogs = [
  {
      "imagen": "../../assets/pexels-dominika-roseclay-2023384.jpg",
      "titulo": "Título de la card 1",
      "contenido": "Contenido de la card 1",
      "genero": "Macho"
  },
  {
      "imagen": "../../assets/pexels-kat-smith-551628.jpg",
      "titulo": "Título de la card 2",
      "contenido": "Contenido de la card 2",
      "genero": "Macho"
  },
  {
      "imagen": "../../assets/pexels-mindaugas-1294062.jpg",
      "titulo": "Título de la card 3",
      "contenido": "Contenido de la card 3",
      "genero": "Macho"
  },
  {
      "imagen": "../../assets/pexels-mithul-varshan-2318990.jpg",
      "titulo": "Título de la card 4",
      "contenido": "Contenido de la card 4",
      "genero": "Macho"
  },
  {
      "imagen": "../../assets/pexels-pixabay-33287.jpg",
      "titulo": "Título de la card 5",
      "contenido": "Contenido de la card 5",
      "genero": "Hembra"
  },
  {
      "imagen": "../../assets/pexels-sebastian-coman-travel-3448793.jpg",
      "titulo": "Título de la card 6",
      "contenido": "Contenido de la card 6",
      "genero": "Hembra"
  }
];


if (localStorage.getItem("Dogs") === null) {

  localStorage.setItem("Dogs", JSON.stringify(Dogs));
  
}


setTimeout(() => {
   window.location.href = "./src/home/home.html";
}, 3000)