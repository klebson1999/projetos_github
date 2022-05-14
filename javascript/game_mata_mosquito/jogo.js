var altura = 0;
var largura = 0;
var vidas = 1;
var time = 15;
var criaMosquitoTempo = 1500

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
    // 1500
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    // 1000
    criaMosquitoTempo = 1000;
} else if (nivel === 'chucknorris') {
    // 750
    criaMosquitoTempo = 700;
}

function ajustaTamanhoPalcoJogo () {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo ();

    var cronometro = setInterval(function() {
        time -= 1;
        if(time < 0) {
            clearInterval(cronometro);
            clearInterval(criaMosquito);
            window.location.href = 'congratulation.html';
        } else {
            document.getElementById('cronometro').innerHTML = time;
        }
    }, 1000)

    function positionRandom () {

    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'game_over.html';
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++
        }
    }
   

    var positionX = Math.floor(Math.random() * largura) - 90;
    var positionY = Math.floor(Math.random() * altura) - 90;
    
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    // Criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio()+ ' ' + ladoAleatorio();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio () {
    var classe = Math.floor(Math.random() * 3);
    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    } 
}

function ladoAleatorio () {
    var classe = Math.floor(Math.random() * 2);
    switch(classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}