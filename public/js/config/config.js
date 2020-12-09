const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);
/*
const cardsProjects= [
    document.getElementById('calc_card1'),
    document.getElementById('calc_card2'),
    document.getElementById('calc_card3'),
    document.getElementById('calc_card4'),
    document.getElementById('unote_card1'),
    document.getElementById('unote_card2'),
    document.getElementById('unote_card3'),
    document.getElementById('unote_card4'),
    document.getElementById('styrim_card1'),
    document.getElementById('styrim_card2'),
    document.getElementById('styrim_card3'),
    document.getElementById('styrim_card4')
]; 

const spam = document.getElementById('warn1');

cardsProjects[0].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[0].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[1].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[1].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[2].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[2].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[3].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[3].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[4].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[4].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[5].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[5].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[6].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[6].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[7].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[7].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[8].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[8].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[9].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[9].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[10].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[10].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});

cardsProjects[11].addEventListener("mouseover", function() {
    spam.textContent = 'Ainda Indisponível. Em desenvolvimento...';
    spam.style.backgroundColor = '#ff0000cc';
});

cardsProjects[11].addEventListener("mouseout", function() {
    spam.textContent = '';
    spam.style.backgroundColor = '#ffffff00';
});
*/
const btnSubmit = document.getElementById('submit_email');