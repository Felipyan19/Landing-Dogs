
const renderCards = (Dogs) => {
    const ImgCarrusel = document.getElementById("ImgCarrusel");
    const tituloImg = document.getElementById('tituloCard')
    const textoImg = document.getElementById('textCard')
    let index = 0;
    let TimeImg = 10000;
   
    ImgCarrusel.onclick = function() {
      Dogs.forEach((dog, index) => {
        document.getElementById(`dog-${index}`).style = "scale(1)"
      })

      const dogSection = document.getElementById(`dog-${index}`);
      dogSection.style.transition = "transform 0.3s ease";
      dogSection.style.transform = "scale(1.07)"
      const windowHeight = window.innerHeight;
      const cardHeight = dogSection.offsetHeight;
      const scrollToPosition = dogSection.offsetTop - (windowHeight - cardHeight) / 2;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };
  
    setInterval(() => {
      ImgCarrusel.src = Dogs[index].imagen;
      tituloImg.textContent = Dogs[index].titulo;
      textoImg.textContent = Dogs[index].contenido
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
      tituloImg.textContent = Dogs[index].titulo;
      textoImg.textContent = Dogs[index].contenido
    });
    
    nextImg.addEventListener("click", () => {
      TimeImg = 10000;
      index++;
      if (index === Dogs.length) index = 0;
      ImgCarrusel.src = Dogs[index].imagen;
      tituloImg.textContent = Dogs[index].titulo;
      textoImg.textContent = Dogs[index].contenido
    });

    
    const cardsContainer = document.getElementById("cardsContainer");
    
    Dogs.forEach(function (OneDog, dogIndex) {
      const card = document.createElement("div");
      card.className = "card mb-3";
      card.id = `dog-${dogIndex}`;
      card.onclick = function() {
        Dogs.forEach((dog, index) => {
          document.getElementById(`dog-${index}`).style = "scale(1)"
        })
        const dogSection = document.getElementById(`dog-${dogIndex}`);
        dogSection.style.transition = "transform 0.3s ease";
        dogSection.style.transform = "scale(1.07)"

      }
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
      cardContent.style.margin = "8%"
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.style.marginBottom = "5%";
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

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const body = document.getElementById('body');
  
    // Mostrar los elementos al hacer scroll
    if (scrollPosition > 200) {
      cardsContainer.classList.add('visible');
      cardsContainer.classList.remove('hidden');
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    } else {
      cardsContainer.classList.add('hidden');
      cardsContainer.classList.remove('visible');
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
  