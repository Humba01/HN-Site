const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);
