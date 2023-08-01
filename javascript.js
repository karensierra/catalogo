class Peliculas {
    constructor (imagen,titulo, genero, descripcion, calificacion,);
    this.imagen = imagen,
    this.titulo = titulo,
    this.genero = genero,
    this.descripcion = descripcion,
    this.calificacion = calificacion,
}



// Datos de ejemplo de las películas (puedes agregar más películas aquí)
const peliculas = [
    {
      titulo: "Titanic",
      genero: "Romántico",
      descripcion: "Una pareja se conoce al abordar el Titanic, y su historia de amor se ve desenvuelta en medio del caos del hundimiento",
      imagen: "href="https://www.lahiguera.net/cinemania/pelicula/9474/pinocho-cartel-9446.jpg",
    },
    {
      titulo: "Ghost: La sombra del amor",
      genero: "Romántico",
      descripcion: "Después de que Jack es asesinado, queda atrapado entre el mundo terrenal y espiritual intentando alertar a Molly de su ex mejor amigo quien fue quien lo mandó a matar.",
    },
    {
      titulo: "El perfecto asesino",
      genero: "Suspenso",
      descripcion: "León perdona la vida a Matilda una niña que llega a la puerta de su casa después de que sus padres son asesinados",
    },
    {
        titulo: "El Joker",
        genero: "Suspenso",
        descripcion: "Se muestra el origen de El Joker, y la historia detrás del icónico personaje.",
      },
      {
        titulo: "Soul",
        genero: "Animada",
        descripcion: "Una perspectiva de lo que es la vida y la muerte, donde el protagonista recobra su amor por la vida y cada momento.",
      },
  ];
  
  // Función para crear elementos HTML para cada película y agregarlos al catálogo
  function mostrarCatalogo() {
    const catalogoContainer = document.getElementById("catalogo-container");
  
    peliculas.forEach((pelicula) => {
      const peliculaElement = document.createElement("div");
      peliculaElement.classList.add("pelicula");
  
      const tituloElement = document.createElement("h2");
      tituloElement.textContent = pelicula.titulo;
  
      const generoElement = document.createElement("p");
      generoElement.textContent = "Género: " + pelicula.genero;
  
      const descripcionElement = document.createElement("p");
      descripcionElement.textContent = pelicula.descripcion;
  
      peliculaElement.appendChild(tituloElement);
      peliculaElement.appendChild(generoElement);
      peliculaElement.appendChild(descripcionElement);
  
      catalogoContainer.appendChild(peliculaElement);
    });
  }
  
  // Llamamos a la función para mostrar el catálogo al cargar la página
  mostrarCatalogo();
