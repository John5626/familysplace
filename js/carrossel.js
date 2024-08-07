document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image-container'); //Seleciona contêiner

    function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

    // Mudar imagem a cada 5 segundos
    setInterval(changeImage, 5000);

});
