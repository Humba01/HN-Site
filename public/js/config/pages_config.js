
const page1 = document.getElementById("pag_cont1");
const page2 = document.getElementById("pag_cont2");
const page3 = document.getElementById("pag_cont3");
const page4 = document.getElementById("pag_cont4");
const pageMain = document.getElementById("pag_main"); 
 
const menuButton1 = document.getElementById("menu_btn1");
const menuButton2 = document.getElementById("menu_btn2");
const menuButton3 = document.getElementById("menu_btn3");
const menuButton4 = document.getElementById("menu_btn4");
const menuButtonMain = document.getElementById("btn_main");

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
