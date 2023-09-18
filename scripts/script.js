
function loadImages(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/Kaart_Rukiya.png'];

    const links = ['https://mossati.github.io/your-tribe-profile-card/', 'https://khdulkadir.github.io/your-tribe-profile-card/','https://rukiyatossou.github.io/your-tribe-profile-card/'];

    const container = document.getElementById('image-container');
     
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card1-" + [i]);
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
}

function group1(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/Kaart_Rukiya.png'];

    const links = ['https://mossati.github.io/your-tribe-profile-card/', 'https://khdulkadir.github.io/your-tribe-profile-card/','https://rukiyatossou.github.io/your-tribe-profile-card/'];
    
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card1-" + [i]);
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

function group2(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card2-" + [i]);
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

function group3(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card3-" + [i]);
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

function group4(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card4-" + [i]);
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

function group5(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card5-" + [i]);
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

function group6(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card6-" + [i]);
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

function group7(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card7-" + [i]);
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

function group8(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card8-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i]
        img.src = images[i];
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
    const random = Math.floor(Math.random() * 8);
    if (random === 1){
        group1();
    }else if (random === 2){
        group2();
    }else if (random === 3){
        group3();
    }else if (random === 4){
        group4();
    }else if (random === 5){
        group5();
    }else if (random === 6){
        group6();
    }else if (random === 7){
        group7();
    }else if (random === 8){
        group8();
    }
    
}

