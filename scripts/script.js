function music(){
    var beach = document.getElementById('beach-sound');
    var seagull = document.getElementById('seagull-sound');

    seagull.volume = 0.5;

    if (beach.paused) {
        beach.play();
        seagull.play();
        document.getElementById('speaker').textContent = '🔇';
    } else {
        beach.pause();
        seagull.pause();
        document.getElementById('speaker').textContent = '🔊';
    }
}

function loadImages(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/kaart_Rukiya.png', 'assets/kaarten/Kaart_Yassir.png'];

    const links = ['https://mossati.github.io/your-tribe-profile-card/', 'https://khdulkadir.github.io/your-tribe-profile-card/','https://rukiyatossou.github.io/your-tribe-profile-card/', 'https://yassirog.github.io/your-tribe-profile-card/'];

    const container = document.getElementById('image-container');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
     
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card1-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
        img.src = images[i];
        container.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
    }

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group1(){
    const images = ['assets/kaarten/Kaart_Mohammed.png', 'assets/kaarten/Kaart_Kaan.png', 'assets/kaarten/Kaart_Rukiya.png', 'assets/kaarten/Kaart_Yassir.png'];

    const links = ['https://mossati.github.io/your-tribe-profile-card/', 'https://khdulkadir.github.io/your-tribe-profile-card/','https://rukiyatossou.github.io/your-tribe-profile-card/', 'https://yassirog.github.io/your-tribe-profile-card/'];
    
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card1-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group2(){
    const images = ['assets/kaarten/Kaart_Zoe.png', 'assets/kaarten/Kaart_Seijno.png', 'assets/kaarten/Kaart_Larissa.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card2-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group3(){
    const images = ['assets/kaarten/Kaart_Belkacem.png', 'assets/kaarten/Kaart_Latoya.png', 'assets/kaarten/Kaart_Tessa.png'];

    const links = ['https://belkace1.github.io/your-tribe-profile-card/', 'https://latoyaln.github.io/your-tribe-profile-card/', 'https://tindyy.github.io/your-tribe-profile-card/'];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card3-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group4(){
    const images = ['assets/kaarten/Kaart_Alisa.png', 'assets/kaarten/Kaart_Rutger.png', 'assets/kaarten/Kaart_Primie.png'];

    const links = ['https://aliceafanasieva.github.io/your-tribe-profile-card/', 'https://rutgerkock.github.io/your-tribe-profile-card/', 'https://prz6.github.io/your-tribe-profile-card/index.html'];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card4-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group5(){
    const images = ['assets/kaarten/Kaart_Saif.png', 'assets/kaarten/Kaart_Jelte.png', 'assets/kaarten/Kaart_Shanna.png', 'assets/kaarten/Kaart_Mo.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card5-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function group6(){
    const images = ['assets/kaarten/Kaart_Tygo.png', 'assets/kaarten/Kaart_Tristan.png', 'assets/kaarten/Kaart_Ellenoor.png'];

    const links = [];
    const container = document.getElementById('image-container');
    const cards = document.getElementById('card-grid');
    const sea = document.getElementById('sea');
    const darksea = document.getElementById('dark-sea');
    container.textContent = '';

    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "card6-" + [i]);
        div.classList.add("card");
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.href = links[i];
        a.target = "_blank";
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

    if (sea.classList.contains('sea-animation')){
        sea.classList.remove("sea-animation");
        darksea.classList.remove("dark-sea-animation");
        sea.offsetWidth
        darksea.offsetWidth
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }else{
        sea.classList.add("sea-animation");
        darksea.classList.add("dark-sea-animation");
    }
}

function Shuffle() {
    const random = Math.floor(Math.random() * 6);
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
    }
}

