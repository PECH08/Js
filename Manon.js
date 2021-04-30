

const img= document.getElementById("imagen1");

const div= document.getElementById("AA");

const p = document.createElement("p");
p.textContent= "Como añadir un efecto a una imagen";
p.id="texto0";

const cuerpo= document.getElementById("texto1");
cuerpo.textContent = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti.";

const boton= document.createElement("button");
boton.type="button";
boton.id="boton";
boton.textContent="Leer mas";
document.body.appendChild(boton);

console.log(p);
div.appendChild(p);
div.appendChild(cuerpo);
div.appendChild(boton);
