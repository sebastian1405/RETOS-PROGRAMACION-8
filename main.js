const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "flexbox",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  for (i = 0; i < cosasQueAprendimos.length; i++) {
    const nuevoitem = document.createElement("li");
    nuevoitem.className = cosasQueAprendimos[i].class;
    nuevoitem.innerText = cosasQueAprendimos[i].tema;
    const ubicado = document.querySelector("ul.lista");
    ubicado.appendChild(nuevoitem);
  }
}

main();
