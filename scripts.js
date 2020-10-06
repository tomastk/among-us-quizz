let fuentes = {
    amarillo: "personajes/amarillo.svg",
    azul: "personajes/azul.png",
    blanco: "personajes/blanco.png",
    bordo: "personajes/bordo.svg",
    negro: "personajes/negro.svg",
    verde: "personajes/verde.svg",
    violeta: "personajes/violeta.svg"
}

let image = document.getElementById("image");

let colors = document.querySelector(".colors");
let color;

colors.addEventListener("click", (e) => {
    // Removiendo la clase selected a los elementos que lo tengan,
    if(e.target.className != "colors") {
    for(let i = 0; i < colors.children.length; i++) {
        const color = colors.children[i];
        color.classList.remove("selected");
    }
    color = e.target.className;

    // Añadiendo la imagen correspondiente

    image.src = `personajes/${color}.svg`

    // Añadiendo la clase selected al elemento seleccionado

    e.target.classList.add("selected")
    }
})



console.dir(document.querySelector(".bordo").attributes.color.nodeValue)