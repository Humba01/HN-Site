const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);

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

const btnSubmit = document.getElementById('submit_email');
const textSlogan = document.getElementById('check01');

const complementos = [
    'Development.', 
    'Playlists.', 
    'Environment.', 
    'Organization.', 
    'Concepts.', 
    'Blueprints.',
    'Assistance.',
    'Calculations.',
    'Notes.',
    'Renovation.',
    'World.'
];

function animacaoTexto() {
    setTimeout(function() {
        textSlogan.textContent = complementos[0]; 
        textSlogan.style.color = '#ff2200';
        setTimeout(function() {
            textSlogan.textContent = complementos[1]; 
            textSlogan.style.color = '#00ffdd';
            setTimeout(function() {
                textSlogan.textContent = complementos[2]; 
                textSlogan.style.color = '#114400';
                setTimeout(function() {
                    textSlogan.textContent = complementos[3]; 
                    textSlogan.style.color = '#7f7f7f';
                    setTimeout(function() {
                        textSlogan.textContent = complementos[4]; 
                        textSlogan.style.color = '#00ff00';
                        setTimeout(function() {
                            textSlogan.textContent = complementos[5]; 
                            textSlogan.style.color = '#4e85ff';
                            setTimeout(function() {
                                textSlogan.textContent = complementos[6]; 
                                textSlogan.style.color = '#995500';
                                setTimeout(function() {
                                    textSlogan.textContent = complementos[7]; 
                                    textSlogan.style.color = '#551155';
                                    setTimeout(function() {
                                        textSlogan.textContent = complementos[8]; 
                                        textSlogan.style.color = '#ffee66';
                                        setTimeout(function() {
                                            textSlogan.textContent = complementos[9]; 
                                            textSlogan.style.color = '#ff8800';
                                            setTimeout(function() {
                                                textSlogan.textContent = complementos[10]; 
                                                textSlogan.style.color = '#008899';
                                            }, 2010);
                                        }, 2010);
                                    }, 2010);
                                }, 2010);
                            }, 2010);
                        }, 2010);
                    }, 2010);
                }, 2010);
            }, 2010);
        }, 2010);
    }, 2010);
}

setInterval(function() {
    animacaoTexto();
}, 22110);

setTimeout(function() {
    animacaoTexto();
}, 300);

var page1 = document.getElementById("pag_cont1");
var page2 = document.getElementById("pag_cont2");
var page3 = document.getElementById("pag_cont3");
var page4 = document.getElementById("pag_cont4");
var pageMain = document.getElementById("pag_main"); 
 
var menuButton1 = document.getElementById("menu_btn1");
var menuButton2 = document.getElementById("menu_btn2");
var menuButton3 = document.getElementById("menu_btn3");
var menuButton4 = document.getElementById("menu_btn4");
var menuButtonMain = document.getElementById("btn_main");

var btnVer1 = document.getElementById("btn_ver1");
var btnVer2 = document.getElementById("btn_ver2");

btnVer1.addEventListener("click", function() {
    page1.style.display = 'inline-block';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

btnVer2.addEventListener("click", function() {
    page1.style.display = 'inline-block';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

menuButton1.addEventListener("click", function() {
    page1.style.display = 'inline-block';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

menuButton2.addEventListener("click", function() {
    page1.style.display = 'none';
    page2.style.display = 'inline-block';
    page3.style.display = 'none';
    page4.style.display = 'none';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

menuButton3.addEventListener("click", function() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'inline-block';
    page4.style.display = 'none';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

menuButton4.addEventListener("click", function() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'inline-block';
    pageMain.style.display = 'none';
    scrollTo(scrollX, 0);
});

menuButtonMain.addEventListener("click", function() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    pageMain.style.display = 'inline-block';
    scrollTo(scrollX, 0);
});
