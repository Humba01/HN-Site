const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);

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
