
function loadImages(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/Kaart_Rukiya.png'];

    const container = document.getElementById('image-container');
     
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.classList.add("card");
        const img = document.createElement('img');
        img.src = images[i];
        img.width = 250;
        img.height = 200;
        container.appendChild(div);
        div.appendChild(img);
    }
}