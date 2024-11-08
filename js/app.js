alert("Bienvenidos");

 // JavaScript para mostrar y ocultar la imagen
 function toggleImage() {
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "block"; // Muestra la imagen
    } else {
        imageContainer.style.display = "none"; // Oculta la imagen
    }
}