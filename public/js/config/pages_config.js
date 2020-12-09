
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
/*
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
*/
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
