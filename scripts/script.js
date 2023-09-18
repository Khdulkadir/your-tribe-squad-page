
function loadImages(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/Kaart_Rukiya.png'];

    const links = ['https://mossati.github.io/your-tribe-profile-card/', 'https://khdulkadir.github.io/your-tribe-profile-card/','https://rukiyatossou.github.io/your-tribe-profile-card/'];

    const container = document.getElementById('image-container');
     
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i]
        img.src = images[i];
        container.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
    }
}

function runAnimation() {
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];

    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const card1 = document.getElementById('card-0');
    const card2 = document.getElementById('card-1');
    const card3 = document.getElementById('card-2');
    card1.remove();
    card2.remove();
    card3.remove();

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i]
        img.src = images[i];
        img.width = 250;
        img.height = 200;
        container.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
    }

    if (cards.classList.contains('cards-animation')){
        cards.classList.remove("cards-animation");
        cards.offsetWidth
        cards.classList.add("cards-animation");
    }else{
        cards.classList.add("cards-animation");
    }
}

function Shuffle() {
    const random = Math.floor(Math.random() * 5);

    
}

