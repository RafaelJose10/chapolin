var vetor1 = new Array();

window.addEventListener('load', Inicio);

function Inicio() {

    var scrol = requestAnimationFrame(scrolll);

    function scrolll() {
        if (window.scrollX > 10) {
            window.scroll(0, 0);
            // window.document.querySelector('img#chapolin').scrollIntoView();
        } else {
            cancelAnimationFrame(scrol);
            // alert("arrumado")
        }
    }


    for (let C = 0; C < 10; C++) {
        var vetor2 = new Array();
        for (let c = 0; c < 10; c++) {
            // vetor2.push(Math.round(Math.random() * 100));

            let laxy = 200;
            let z_ind = 2;
            let n;
            let spri;
            n = Math.round(Math.random() * 100);
            if (n < 70) {
                if (n < 7) {
                    spri = 'arvore1(1).png'
                } else spri = 'grama verde.jpg';
            } else spri = 'chao3.png';

            C == 0 && c == 0 ? spri = 'grama verde.jpg' : '';
            C == 3 && c == 3 ? spri = 'casa2.png' : '';
            C == 1 && c == 5 ? spri = 'casa_2.png' : '';
            C == 5 && c == 7 ? spri = "casa_3.png" : '';
            C == 0 && c == 1 ? spri = 'casa_4.png' : '';

            vetor2.push({
                num: n,
                sprite: spri,
                larg: laxy,
                alt: laxy,
                px: c * laxy,
                py: C * laxy,
                z_index: z_ind,
                img: window.document.createElement('img'),
                atb: window.document.createAttribute('style')
            });
        }
        vetor1.push(vetor2);
    };

    for (let C in vetor1) {
        for (let c in vetor1[C]) {
            let aqui = vetor1[C][c];

            // alert(aqui.px)
            aqui.atb.value = `z-index: ${aqui.z_index}; width: ${aqui.larg}px; height: ${aqui.alt}px; position: absolute; left: ${aqui.px}px; top: ${aqui.py}px;`;
            aqui.img.setAttributeNode(aqui.atb);
            aqui.img.src = aqui.sprite;
            window.document.body.appendChild(aqui.img);
        }
    }

    for (let C in vetor1) {
        for (let c in vetor1[C]) {
            vetor1[C][c].img.onclick = () => {
                let aqui = vetor1[C][c].sprite;
                // if (aqui == 'arvore1(1).png') alert("Arvore Nao da Para seguir em frente");
                // else aqui == 'grama verde.jpg' ? window.alert("que chao macio grama verdinha") : aqui == 'casa2.png' ? alert("que Casa Misteriosa porem bonita") : alert('barro');
            }
        }
    }
    console.log(vetor1);

    var tela, t_left, t_top, t_width, t_height;

    var largura_tela, altura_tela;
    var tecla;
    var avatar, a_px, a_py, a_x, a_y, vel, movendo, sele, cena, coração, sprites;
    a_px = 7, a_py = 7, a_x = 0, a_y = 0, vel = 2, cena = 1, movendo = false, sele = false;

    var esqu, up, dire, down;
    esqu = false, up = false, dire = false, down = false;


    tela = window.document.querySelector('div#tela');
    avatar = window.document.querySelector('img#chapolin');

    var nada = window.document.querySelector('div#div');

    largura_tela = window.innerWidth, altura_tela = window.innerHeight;
    t_width = largura_tela - 200, t_height = altura_tela - 200;
    t_left = (t_width - t_width) + 100, t_top = (t_height - t_height) + 100;



    window.addEventListener('keydown', andar);
    window.addEventListener('keyup', parar);
    coração = setInterval(motor, 25);




    function andar(Event) {
        tecla = Event.keyCode;
        if (tecla == 37 && a_px - 10) a_x = -vel, esqu = true, avatar.style.transform = 'scaleX(-1)';
        if (tecla == 38) a_y = -vel, up = true;
        if (tecla == 39) a_x = vel, dire = true, avatar.style.transform = "scaleX(1)";;
        if (tecla == 40) a_y = vel, down = true;

        // if (tecla == 37 && a_px - 100 < 0) a_x = 0, esqu = false;
        // tecla == 38 ? a_y = -vel : tecla == 40 ? a_y = vel : '';
        // let tecla = Event.key;

        if (movendo == false) movendo = true;
    }

    function parar(Event) {
        tecla = Event.keyCode;
        if (tecla == 37) a_x = 0, esqu = false;
        if (tecla == 38) a_y = 0, up = false;
        if (tecla == 39) a_x = 0, dire = false;
        if (tecla == 40) a_y = 0, down = false;

        // tecla == 37 || tecla == 39 ? a_x = 0 : tecla == 38 || tecla == 40 ? a_y = 0 : '';
        // let tecla = Event.key;

        movendo = false, sele = false;

    };

    // if (movendo == true) cena = setInterval(Avatar, 200)
    // if (movendo == false) clearInterval(cena);

    function Avatar() {
        avatar.src = 'chapolin_' + (cena++) + '.png';
        if (cena == 9) cena = 1;

    }

    function motor() {

        if (movendo == true && sele == false) sele = true, sprites = setInterval(Avatar, 200);
        else if (movendo == false && sele == false) clearInterval(sprites), avatar.src = 'chapolin_0.png';

        // for (let C in vetor1) {
        //     for (let c in vetor1[C]) {
        //         let terra = vetor1[C][c]
        //         if ((a_py + 50 >= terra.py && a_py <= terra.py + terra.alt) && (a_px + 50 >= terra.px && a_px <= terra.px + terra.larg)) {
        //             nada.innerHTML = terra.sprite
        //             if (terra.sprite == 'casa_4.png') {
        //                 if (tecla == 37) esqu = false, a_px += 0.1
        //                 if (tecla == 39) dire = false, a_px += -0.1;
        //             }
        //         }
        //     }
        // }


        tela.style.width = t_width + 'px', tela.style.height = `${t_height}px`;
        tela.style.left = `${t_left}px`, tela.style.top = `${t_top}px`;

        if (esqu == true && a_px < t_left && a_px - 100 > 0) t_left += a_x, window.scrollBy(a_x, 0);
        if (up == true && a_py < t_top && a_py - 100 > 0) t_top += a_y, window.scrollBy(0, a_y);
        if (dire == true && a_px + 50 > t_width + t_left && (a_px + 200 < vetor1.length * 200)) t_left += a_x, window.scrollBy(a_x, 0);
        if (down == true && a_py + 70 > t_height + t_top && (a_py + 200 < vetor1.length * 200)) t_top += a_y, window.scrollBy(0, a_y);

        if (dire == true && (a_px + 100) < vetor1.length * 200 || esqu == true && a_px - 10 > 0) a_px += a_x;
        if ((down == true && a_py + 100 < vetor1.length * 200) || up == true && a_py - 10 > 0) a_py += a_y;

        // if (tecla == 39 && (a_px + 100) < vetor1.length * 200 || tecla == 37 && a_px - 10 > 0) a_px += a_x;
        // if ((tecla == 40 && a_py + 100 < vetor1.length * 200) || tecla == 38 && a_py - 10 > 0) a_py += a_y;


        // a_px += a_x, a_py += a_y;
        avatar.style.left = a_px + 'px';
        avatar.style.top = a_py + 'px';
    }
}