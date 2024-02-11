
const renderCards = (Dogs) => {
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
      card.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
      const colImg = document.createElement("div");
      colImg.className = "col-md-4 border";
      colImg.style.maxHeight = "340px";
      const img = document.createElement("img");
      img.className = "rounded-start";
      img.style.width = "100%";
      img.style.height = "339px";
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
  }
  const carousel = document.getElementById('carouselExampleCaptions');
  const cardsContainer = document.getElementById('cardsContainer');

  // Ocultar los elementos que no deben mostrarse inicialmente
  cardsContainer.style.display = 'none';

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const carouselBottom = carousel.getBoundingClientRect().bottom;
    const body = document.getElementById('body');

    // Mostrar los elementos al hacer scroll
    if (scrollPosition > 10) {
      cardsContainer.style.display = 'block';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    } else {
      cardsContainer.style.display = 'none';
      body.style.backgroundColor = 'beige';
    }
  });
  
  // fetch('../../mocks.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.Dogs); 
  //     renderCards(data.Dogs);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching the JSON file', error);
  //   });
  

  const dogData = JSON.parse(localStorage.getItem("Dogs"))
  renderCards(dogData);
  