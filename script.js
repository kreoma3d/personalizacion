// --- EFECTO INICIAL Y FOOTER DINÁMICO ---
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  const footer = document.querySelector('footer');
  if (footer)
    footer.innerHTML = `© ${new Date().getFullYear()} Kreoma3D · Medellín, Colombia · kreoma3d@gmail.com`;
});

// --- SCROLL SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- HEADER Y NAV ACTIVO ---
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 150;
  const header = document.querySelector("header");
  if (header) header.classList.toggle("scrolled", window.scrollY > 50);

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// --- BOTÓN VOLVER ARRIBA ---
const volverArriba = document.getElementById("volverArriba");
if (volverArriba) {
  window.addEventListener("scroll", () => {
    volverArriba.style.display = window.scrollY > 400 ? "flex" : "none";
  });
  volverArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- SLIDER AUTOMÁTICO ---
const slides = document.querySelectorAll("#slider .slide");
const puntos = document.querySelectorAll("#slider .punto");
let index = 0;

function cambiarSlide() {
  index = (index + 1) % slides.length;
  document.querySelector(".slider-container").style.transform = `translateX(-${index * 100}%)`;
  puntos.forEach(p => p.classList.remove("active"));
  puntos[index].classList.add("active");
}

if (slides.length > 0) {
  
  setInterval(cambiarSlide, 8000);


  puntos.forEach((p, i) => p.addEventListener("click", () => {
    index = i;
    document.querySelector(".slider-container").style.transform = `translateX(-${i * 100}%)`;
    puntos.forEach(pt => pt.classList.remove("active"));
    p.classList.add("active");
  }));
}
