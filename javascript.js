class PeliculasCatalogo {
  constructor(imagen, titulo, genero, descripcion) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.genero = genero;
    this.descripcion = descripcion;
  }
}

const peliculas = [
  {
    imagen: "https://m.media-amazon.com/images/I/71V3V0FE1gS._AC_UF894,1000_QL80_.jpg",
    titulo: "Titanic",
    genero: "Romántico",
    descripcion: "Una pareja se conoce al abordar el Titanic, y su historia de amor se ve desenvuelta en medio del caos del hundimiento",
  },
  {
    imagen: "https://m.media-amazon.com/images/I/71mlgE7nUdL.jpg",
    titulo: "Pulp Fiction",
    genero: "Drama",
    descripcion: "Vincent y Jules trabajan para Marsellus Wallace, un gánster que controla los negocios oscuros de la ciudad, entre ellos, las apuestas.",
  },
  {
    imagen: "https://www.ecartelera.com.mx/carteles/6900/6962/003.jpg",
    titulo: "El Perfecto Asesino",
    genero: "Drama",
    descripcion: "Mathilda  no se lleva bien con su familia, un día matan a su familia y se refugia en casa de Léon, un vecino que resulta ser un asesino a sueldo",
  },
  {
    imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/67/06/38/20350558.jpg",
    titulo: "El Niño con el Pijama de Rayas",
    genero: "Drama",
    descripcion: "Bruno, de ocho años, es el hijo mimado de un oficial nazi. Al ascender a su padre, la familia se ve obligada a abandonar su confortable casa de Berlín y trasladarse a una zona aislada",
  },
  {
    imagen: "https://pics.filmaffinity.com/La_habitaciaon-451425297-large.jpg",
    titulo: "Room",
    genero: "Suspenso",
    descripcion: "Desde que nació hace cinco años, Jack vive junto a su cariñosa y entregada madre en una habitación, el único mundo que el niño conoce",
  },
  {
    imagen: "https://www.ecartelera.com/carteles/14300/14394/011.jpg",
    titulo: "Joker",
    genero: "Perturbadora",
    descripcion: "Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione",
  },
  // Puedes agregar más películas aquí
];

function mostrarCatalogo() {
  const catalogContainer = document.getElementById("catalog-container");

  peliculas.forEach((pelicula) => {
    const peliculaElement = document.createElement("div");
    peliculaElement.classList.add("pelicula");

    const imagenElement = document.createElement("img");
    imagenElement.src = pelicula.imagen;

    const tituloElement = document.createElement("h2");
    tituloElement.textContent = pelicula.titulo;

    const generoElement = document.createElement("p");
    generoElement.textContent = "Género: " + pelicula.genero;

    const descripcionElement = document.createElement("p");
    descripcionElement.textContent = pelicula.descripcion;

    peliculaElement.appendChild(imagenElement);
    peliculaElement.appendChild(tituloElement);
    peliculaElement.appendChild(generoElement);
    peliculaElement.appendChild(descripcionElement);

    catalogContainer.appendChild(peliculaElement);
  });
}

// Llamamos a la función para mostrar el catálogo al cargar la página
mostrarCatalogo();

