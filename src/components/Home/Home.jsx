import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="container-fluid fondo_azul">
      <Header>

      </Header>
      <h2 className="letra_titulo">Proximamente</h2>
      <main class="main">
        <div class="contenedor-video">
          <iframe
            src="https://www.youtube.com/embed/1O6Qstncpnc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4 class="letra_titulo">howarts legacy</h4>
          <p class="letra_titulo">
            Hogwarts Legacy es un juego de rol inmersivo en mundo abierto que se
            inspira de los libros de la saga Harry Potter. Disfruta del Hogwarts
            del siglo XIX. Tu personaje es un alumno o alumna del famoso colegio
            que tiene la clave de un antiguo secreto que amenaza con destruir el
            mundo mágico.
          </p>
        </div>
        <hr />

        <article class="contenedor-video">
          <h4 class="letra_titulo">gotham knight</h4>
          <iframe
            src="https://www.youtube.com/embed/LioYUfOuK5Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="letra_titulo">
            Gotham Knights es un próximo videojuego de rol de acción basado en
            el personaje de DC Comics Batman y su reparto secundario. El juego
            está siendo desarrollado por WB Games Montréal y será publicado por
            Warner Bros. Interactive Entertainment.
          </p>
          <hr />
        </article>
        <article class="contenedor-video">
          <h4 class="letra_titulo">god war ragnarok</h4>
          <iframe
            src="https://www.youtube.com/embed/vtFhDrMIZjE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="letra_titulo">
            God of War: Ragnarök es un próximo juego de acción y aventuras en
            desarrollo por Santa Monica Studio y que será publicado por Sony
            Interactive Entertainment. Está previsto que se lance en 2022 para
            PlayStation 4 y PlayStation 5.
          </p>
        </article>
        <hr />
      </main>
      <Footer />
    </div>
  )
}

export default Home;