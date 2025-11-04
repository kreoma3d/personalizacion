const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
const colorInput = document.getElementById("colorPicker");
const textoInput = document.getElementById("texto");
const botonGuardar = document.getElementById("guardar");

const base = new Image();
base.src = "producto_base.png"; // Imagen base de tu producto

base.onload = () => {
  dibujar();
};

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(base, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colorInput.value + "55"; // semitransparente
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText(textoInput.value, canvas.width / 2, canvas.height - 20);
}

colorInput.addEventListener("input", dibujar);
textoInput.addEventListener("input", dibujar);

botonGuardar.onclick = () => {
  const link = document.createElement("a");
  link.download = "personalizacion.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};
