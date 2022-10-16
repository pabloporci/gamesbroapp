import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Proximamente = () => {
  return (
    <div className="container-fluid fondo_azul">
      <Header>

      </Header>

      <div class="contenedor-video">
        <iframe
          src="https://www.youtube.com/embed/1O6Qstncpnc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h4 class="letra-color productos-parrafo">howarts legacy</h4>
        <p class="letra-color productos-parrafo">
          Hogwarts Legacy es un juego de rol inmersivo en mundo abierto que se
          inspira de los libros de la saga Harry Potter. Disfruta del Hogwarts
          del siglo XIX. Tu personaje es un alumno o alumna del famoso colegio
          que tiene la clave de un antiguo secreto que amenaza con destruir el
          mundo mágico.
        </p>
      </div>

      <hr />

      <article class="contenedor-video">
        <h4 class="letra-color productos-parrafo">gotham knight</h4>
        <iframe
          src="https://www.youtube.com/embed/LioYUfOuK5Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="letra-color productos-parrafo">
          Gotham Knights es un próximo videojuego de rol de acción basado en
          el personaje de DC Comics Batman y su reparto secundario. El juego
          está siendo desarrollado por WB Games Montréal y será publicado por
          Warner Bros. Interactive Entertainment.
        </p>
        <hr />
      </article>

      <article class="contenedor-video">
        <h4 class="letra-color productos-parrafo">god war ragnarok</h4>
        <iframe
          src="https://www.youtube.com/embed/vtFhDrMIZjE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="letra-color productos-parrafo">
          God of War: Ragnarök es un próximo juego de acción y aventuras en
          desarrollo por Santa Monica Studio y que será publicado por Sony
          Interactive Entertainment. Está previsto que se lance en 2022 para
          PlayStation 4 y PlayStation 5.
        </p>
      </article>
      <hr />



      <Footer />
    </div>
  )
}

export default Proximamente