const projects = [
  {
    title: "Página de Viajes",
    description: "Landing page para una agencia de viajes.",
    image: "https://picsum.photos/400/200?random=1",
    link: "#"
  },
  {
    title: "App de Notas",
    description: "Aplicación para organizar notas con localStorage.",
    image: "https://picsum.photos/400/200?random=2",
    link: "#"
  },
  {
    title: "E-commerce Demo",
    description: "Sitio de prueba para venta de productos.",
    image: "https://picsum.photos/400/200?random=3",
    link: "#"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.classList.add("project");

  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}">
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">Ver proyecto</a>
  `;

  container.appendChild(card);
});