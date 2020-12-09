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