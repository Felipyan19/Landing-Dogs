const Dogs = [
   {
     imagen: "./assets/pexels-dominika-roseclay-2023384.jpg",
     titulo: "Título de la card 1",
     contenido: "Contenido de la card 1"
   },
   {
     imagen: "./assets/pexels-kat-smith-551628.jpg",
     titulo: "Título de la card 2",
     contenido: "Contenido de la card 2"
   },
   {
     imagen: "./assets/pexels-mindaugas-1294062.jpg",
     titulo: "Título de la card 3",
     contenido: "Contenido de la card 3"
   },
   {
     imagen: "./assets/pexels-mithul-varshan-2318990.jpg",
     titulo: "Título de la card 4",
     contenido: "Contenido de la card 4"
   },
   {
     imagen: "./assets/pexels-pixabay-33287.jpg",
     titulo: "Título de la card 5",
     contenido: "Contenido de la card 5"
   },
   {
     imagen: "./assets/pexels-sebastian-coman-travel-3448793.jpg",
     titulo: "Título de la card 6",
     contenido: "Contenido de la card 6"
   }
 ]
 
 const ImgCarrusel = document.getElementById("ImgCarrusel");
 let index = 0;
 let TimeImg = 10000;
 
 setInterval(() => {
   ImgCarrusel.src = Dogs[index].imagen;
   index++;
   if (index === Dogs.length) index = 0;
 }, TimeImg);
 
 const prevImg = document.getElementById("prevImg");
 const nextImg = document.getElementById("nextImg");
 
 prevImg.addEventListener("click", () => {
   TimeImg = 10000;
   index--;
   if (index < 0) index = Dogs.length - 1;
   ImgCarrusel.src = Dogs[index].imagen;
 });
 
 nextImg.addEventListener("click", () => {
   TimeImg = 10000;
   index++;
   if (index === Dogs.length) index = 0;
   ImgCarrusel.src = Dogs[index].imagen;
 });
 
 const cardsContainer = document.getElementById("cardsContainer");
 
 Dogs.forEach(function (OneDog) {
   const card = document.createElement("div");
   card.className = "card mb-3";
   const cardBody = document.createElement("div");
   cardBody.className = "row g-0";
   const colImg = document.createElement("div");
   colImg.className = "col-md-4 border";
   colImg.style.maxHeight = "340px";
   const img = document.createElement("img");
   img.className = "rounded-start";
   img.style.width = "100%";
   img.style.height = "100%";
   img.style.objectFit = "cover";
   img.src = OneDog.imagen;
   img.alt = "Imagen de la card";
   const colContent = document.createElement("div");
   colContent.className = "col-md-8";
   const cardContent = document.createElement("div");
   cardContent.className = "card-body";
   const cardTitle = document.createElement("h5");
   cardTitle.className = "card-title";
   cardTitle.textContent = OneDog.titulo;
   const cardText = document.createElement("p");
   cardText.className = "card-text";
   cardText.textContent = OneDog.contenido;
 
   colImg.appendChild(img);
   colContent.appendChild(cardContent);
   cardContent.appendChild(cardTitle);
   cardContent.appendChild(cardText);
   cardBody.appendChild(colImg);
   cardBody.appendChild(colContent);
   card.appendChild(cardBody);
 
   cardsContainer.appendChild(card);
 });
 