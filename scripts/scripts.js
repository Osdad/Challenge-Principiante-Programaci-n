"use strict";

const textoParaProcesar = document.getElementById("texto__procesar");
const areaParaMostrar = document.getElementById("mostrarTextoProcesado");
const divImagen = document.querySelector(".imagen__inicio");
const divCopiar = document.querySelector(".funcion__copiar");

const encriptarTexto = () => {
  const textoDelInput = textoParaProcesar.value;
  let procesado = textoDelInput.split(" ").map(cambiarLetra).join(" ");
  areaParaMostrar.textContent = procesado;
  divImagen.style.display = "none";
  divCopiar.style.display = "flex";
};

const desencriptarTexto = () => {
  const textoDelInput = textoParaProcesar.value;
  let procesarTexto = textoDelInput.split(" ").map(recuperarLetra).join(" ");
  areaParaMostrar.textContent = procesarTexto;
};

const cambiarLetra = (palabra) => {
  const reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  return palabra
    .split("")
    .map((letra) => reemplazos[letra] || letra)
    .join("");
};

const recuperarLetra = (palabra) => {
  return palabra
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
};

const copiarTexto = () => {
  let copia = areaParaMostrar.textContent;
  navigator.clipboard
    .writeText(copia)
    .then(() => {
      console.log("Texto copiado al portapapeles!");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });

  areaParaMostrar.select();
};

/***
 * Las "llaves" de encriptación que utilizaremos son las siguientes:
 * 
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"



 */
