


import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ onDetailClick }) => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=juego+ps5&limit=12")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.results);
        setItems(data.results);
      })


  }, []);


  // const productos = [
  //   { "id": 1, "nombre": "Godwar Ragnarok", "descripcion": "Tras convertirse en una de las grandes franquicias de la familia PlayStation, la saga God of War vuelve con el nuevo God of War Ragnarok para PS5 y, con ello, la épica continuación de la historia de Kratos y su hijo Atreus por parte de Sony Santa Monica.Con los dioses nórdicos a la cabeza y la presencia de su mitología con personajes como Thor, Kratos y su hijo Atreus seguirán avanzando en un prometedor periplo cargado de acción, monstruos y encarnizadas peleas. Esto es todo lo que sabemos de la nueva entrega de God of War Ragnarok para PS5.", "calorias": 243, "imagen": "./godwarragnarok.jpg", "precio": 18000 },
  //   { "id": 2, "nombre": "Gotham Knights", "descripcion": "Gotham Knights es un juego de rol de acción y mundo abierto que se desarrolla en la versión más dinámica e interactiva de Gotham City. Tanto si juegas en solitario como con otro héroe, patrulla los cinco distritos de Gotham y detén cualquier actividad criminal que encuentres en tu camino.", "imagen": "./gothamknights.jpg", "calorias": 289, "precio": 16500 },
  //   { "id": 3, "nombre": "Horizon Forbiden West", "descripcion": "Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas.", "calorias": 295, "imagen": "./horizonforbidenwest.jpg", "precio": 11000 },
  //   { "id": 4, "nombre": "Elden Ring", "descripcion": "Elden Ring es un juego de rol de acción en tercera persona desarrollado por FromSoftware y publicado por Bandai Namco Entertainment para Microsoft Windows, Xbox One​, Xbox Series X/S, PlayStation 4 y PlayStation 5.El nuevo Action RPG de FromSoftware ha generado un impacto mayúsculo y muy justificado: que los creadores de la saga de videojuegos Dark Souls den forma a un nuevo mundo abierto de fantasía épica junto con el exitoso novelista responsable del fenómeno de Juego de Tronos hace que las expectativas en torno al propio proyecto estén por las nubes. Un mundo abierto colmado de acción que se coronó como el juego más esperado en los Game Awards 2021 y que arrasó en MetaCritic y OpenCritic.", "calorias": 303, "imagen": "./eldenring.jpg", "precio": 12000 },
  //   { "id": 5, "nombre": "Tortugas Ninjas Shedder Revenge", "descripcion": "Teenage Mutant Ninja Turtles: Shredder's Revenge es un videojuego beat 'em up de desplazamiento lateral de 2022 principalmente para PC con Windows, mediante Steam, además también para consolas de la octava generación, creado por Tribute Games y DotEmu.", "calorias": 310, "imagen": "./tortugasninjas.jpg", "precio": 9000 },
  //   { "id": 6, "nombre": "Fifa 23", "descripcion": "EA SPORTS™ FIFA 23 lleva El Juego de Todos al campo con los torneos de la Copa Mundial de la FIFA™ masculina y femenina, la incorporación de clubes femeninos y nuevas formas de jugar tus modos favoritos. Los datos de captura de movimiento de dos partidos completos y cinco sesiones de entrenamiento con equipos profesionales, incluyendo la primera captura de movimiento de un partido femenino, nos llevan a las animaciones más realistas y de mayor calidad que jamás se hayan visto en un título de EA SPORTS™ FIFA.FIFA 23 dará continuidad a los avances y novedades introducidos en las dos últimas entregas y ofrecerá los mismos modos que han generado incalculables horas de juego: del FIFA Ultimate Team al modo Carrera, pasando por el VOLTA y los Clubes Pro.", "calorias": 505, "imagen": "./fifa23.jpg", "precio": 20000 }
  // ];


  //     const getProductos = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(productos);
  //       }, 2000);
  //     });

  //     getProductos.then((respuesta) => {
  //       setItems(respuesta);
  //     });
  //   }, []);

  return (
    <div className="container">
      <ItemList items={items} onDetailClick={onDetailClick} />
    </div>

  )
}

export default ItemListContainer;






