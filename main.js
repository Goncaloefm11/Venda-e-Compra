// Importa a biblioteca Phaser
import Phaser from 'phaser';

// Define as dimensões do jogo
const sizes = {
    width: 1580, // Largura do jogo
    height: 680, // Altura do jogo
} 

// definir fundo
document.body.style.backgroundColor = "white";

//
//let width;
//let height;

// Define uma classe para a cena do jogo
class GameScene extends Phaser.Scene {
    constructor() {
        super("scene-game"); // Chama o construtor da classe pai com o nome da cena
        this.background; // Fundo do jogo
        this.backgroundSQ2; // Segundo fundo do jogo
        this.meninocarrinho; // Personagem do jogo (menino no carrinho)
        this.homemcaixa; // Personagem do jogo (homem com caixa)
        this.btinfo; // Botão de informação
        this.btcreditos; // Botão de créditos
        this.titulo; // Título do jogo
        this.bthome; // Botão de início
        this.caixaregistadora;
        this.okbutton;
        this.seta;
        this.setaparatras;
        this.wallet;
        this.centimo1;
        this.centimos2;
        this.centimos5;
        this.centimos10;
        this.centimos20;
        this.centimos50;
        this.chapeu_8a20euros;
        this.chavena_2a4euros;
        this.banana_de10a20centimos;
        this.etiqueta;
        this.euro1;
        this.euros2;
        this.euros5_completos;
        this.euros5;
        this.euros10_completos;
        this.euros10;
        this.euros20_completos;
        this.euros20;
        this.gelado_40a120centimos;
        this.imagemDinheiro;
        this.pera_10a20centimos;
        this.tshirt_5a18euros;

        this.imageList = [ "banana_de10a20centimos", 
        "chapeu_8a20euros", "chavena_2a4euros",
        "gelado_40a120centimos", "pera_10a20centimos", 
        "tshirt_5a18euros"];
    }

    preload() {
        this.load.image("backgroundSQ", "./assets/backgroundSQ.png");
        this.load.image("backgroundSQ2", "./assets/backgroundSQ2.png");
        this.load.image("meninocarrinho", "./assets/meninocarrinho.png");
        this.load.image("homemcaixa", "./assets/homemcaixa.png");
        this.load.image("btcreditos", "./assets/btcreditos.png");
        this.load.image("btinfo", "./assets/btinfo.png");
        this.load.image("titulo", "./assets/titulo.png");
        this.load.image("bthome", "./assets/bthome.png");
        this.load.image("caixaregistadora", "./assets/caixaregistadora.png");
        this.load.image("okbutton", "./assets/okbutton.png");
        this.load.image("seta", "./assets/seta.png");
        this.load.image("setaparatras", "./assets/setaparatras.png");
        this.load.image("wallet", "./assets/wallet.png");
        this.load.image("centimo1", "./assets/1centimo.png");
        this.load.image("euro1", "./assets/1euro.png");
        this.load.image("centimos2", "./assets/2centimos.png");
        this.load.image("euros2", "./assets/2euros.png");
        this.load.image("centimos5", "./assets/5centimos.png");
        this.load.image("euros5_completos", "./assets/5euros-completos.png");
        this.load.image("euros5", "./assets/5euros.png");
        this.load.image("centimos10", "./assets/10centimos.png");
        this.load.image("euros10_completos", "./assets/10euros-completos.png");
        this.load.image("euros10", "./assets/10euros.png");
        this.load.image("centimos20", "./assets/20centimos.png");
        this.load.image("euros20_completos", "./assets/20euros-completos.png");
        this.load.image("euros20", "./assets/20euros.png");
        this.load.image("centimos50", "./assets/50centimos.png");
        this.load.image("etiqueta", "./assets/etiqueta.png");
        this.load.image("imagemDinheiro", "./assets/imagemDinheiro.png");

        this.load.image("banana_de10a20centimos", "./assets/banana-de10a20centimos.png");
        this.load.image("chapeu_8a20euros", "./assets/chapeu-8a20euros.png");
        this.load.image("chavena_2a4euros", "./assets/chavena-2a4euros.png");
        this.load.image("gelado_40a120centimos", "./assets/gelado-40a120centimos.png");
        this.load.image("pera_10a20centimos", "./assets/pera-10a20centimos.png");
        this.load.image("tshirt_5a18euros", "./assets/tshirt-5a18euros.png");

    }
    

    create() {
        // Define uma variável para controlar se o menu inicial está ativo
        this.menuInicial = true;

        //width = game.config.width;
        //height = game.config.height;
        // Layout 1: Configura o fundo e os personagens para o menu inicial
        this.background = this.add.image(0,0,"backgroundSQ").setOrigin(0,0); // Fundo
        this.background.setDisplaySize(sizes.width, sizes.height); // Define o tamanho do fundo
        //this.backgroundSQ = this.add.sprite(0.5*width,0.5*height,'backgroundSQ');
        //this.backgroundSQ.setScale(1.5);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // Personagem "meninocarrinho" e sua interação
        this.meninocarrinho = this.add.image(430, 285, "meninocarrinho").setOrigin(0,0); // Personagem
        this.meninocarrinho.setDisplaySize(sizes.width-1295, sizes.height-400); // Define o tamanho do personagem
        this.meninocarrinho.setScale(1); // Define a escala do personagem
        this.meninocarrinho.setInteractive(); // Torna o personagem interativo

        // Configuração do evento de clique para o personagem "meninocarrinho"
        this.meninocarrinho.on("pointerup", (pointer) => {
            // Atualiza o estado do menu inicial
            this.menuInicial = false;
            this.homemcaixa.destroy();
            this.meninocarrinho.setVisible(false);

            // Configura o layout para a tela de compra
            this.backgroundSQ2 = this.add.image(0,0, "backgroundSQ2").setOrigin(0,0);
            this.backgroundSQ2.setDisplaySize(sizes.width,sizes.height);
            this.meninocarrinho = this.add.image(30,15, "meninocarrinho").setOrigin(0,0);
            this.meninocarrinho.setDisplaySize(100,120);
            this.titulo = this.add.image(500,35, "titulo").setOrigin(0,0);
            this.titulo.setDisplaySize(sizes.width - 1000, sizes.height - 630);
            this.caixaregistadora = this.add.image(950,120, "caixaregistadora").setOrigin(0,0);//(+ vai para a direita, + vai para baixo)
            this.caixaregistadora.setDisplaySize(600,535);//(+ estica, + comprime)

            // botao ok iterativo
            var originalX = 1070;
            var originalY = 295;

            this.okbutton = this.add.image(originalX, originalY, "okbutton").setOrigin(0, 0);
            this.okbutton.setDisplaySize(130, 70); // (+ estica, + comprime)
            this.okbutton.setScale(1.1, 0.9);

            // Define as interações do mouse
            this.okbutton.setInteractive();
                        
            // Evento quando o botão é pressionado
            this.okbutton.on('pointerdown', function () {
                this.setScale(1, 0.8); // Diminui o tamanho horizontal do botão ao ser pressionado
            });

            // Evento quando o botão é solto
            this.okbutton.on('pointerup', function () {
                this.setScale(1.1, 0.9); // Retorna o tamanho do botão ao normal ao soltar
            });

            this.seta = this.add.image(200,580, "seta").setOrigin(0,0);
            this.seta.setDisplaySize(90, 60);//(+ estica, + comprime)
            this.wallet = this.add.image(50,550, "wallet").setOrigin(0,0);
            this.wallet.setDisplaySize(120,100);//(+ estica, + comprime)

            //
            var originalXseta = 1070;
            var originalYseta = 240;
            this.setaparatras = this.add.image(originalXseta,originalYseta, "setaparatras").setOrigin(0,0);
            this.setaparatras.setDisplaySize(130, 50);//(+ estica, + comprime)
            this.setaparatras.setScale(1.1,0.9);

            this.setaparatras.setInteractive();

            this.setaparatras.on('pointerdown', function(){
                this.setScale(1, 0.8); // Diminui o tamanho horizontal do botão ao ser pressionado
            });

            // Evento quando o botão é solto
            this.setaparatras.on('pointerup', function () {
                this.setScale(1.1, 0.9); // Retorna o tamanho do botão ao normal ao soltar
            });

            this.textocarrinho = this.add.text(150,500, "Paga com o mínimo possível.", {fontFamily: 'Arial', fontSize: '30px'}).setOrigin(0,0);

            // Configura o botão "bthome" na tela de compra
            this.bthome = this.add.image(20,410, "bthome").setOrigin(0,0);
            this.bthome.setDisplaySize(80,80);
            this.bthome.setInteractive();
            this.bthome.setScale(0.5);
            this.bthome.setInteractive();

            // Configura os eventos de interação para o botão "bthome" na tela de compra
            this.bthome.on('pointerover', () => {
                if (this.menuInicial == false) {
                    this.tweens.add({
                        targets: this.bthome,
                        scale: { value: 0.6, duration: 100 }, // Aumenta para 5% em 200ms
                        ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                    });
                }
            });
            
            this.bthome.on('pointerout', () => {
                if (this.menuInicial == false) {
                    this.tweens.add({
                        targets: this.bthome,
                        scale: { value: 0.5, duration: 100 }, // Retorna ao tamanho original em 200ms
                        ease: 'Linear'
                    });
                }
            });

            // Configura o evento de clique para o botão "bthome" na tela de compra
            this.bthome.on("pointerup", (pointer) =>{
                this.scene.start("scene-game"); // Inicia a cena do jogo
                this.menuInicial = true; // Atualiza o estado do menu inicial
            });

            // imagem do produto:
            //const porque só pode ser chamado o random dentro desta função
            

            const randomIndex = Phaser.Math.Between(0, this.imageList.length - 1);
            const randomImageName1 = this.imageList[randomIndex];


            const randomImageName =   "gelado_40a120centimos";
            // Adiciona a imagem carregada ao jogo
            var etiqueta;
            var randomImage;
            var valor;
            var preco_produto;
            var coords;


            // Definição das coordenadas e preços
            if (randomImageName === "banana_de10a20centimos") {
                coords = { x: 570, y: 290 };//preço
                preco_produto = Phaser.Math.RND.realInRange(0.10, 0.20).toFixed(2);
                etiqueta = this.add.image(580, 300, "etiqueta").setOrigin(0,0);
                randomImage = this.add.image(400, 150, randomImageName).setOrigin(0, 0);
                //// Feita
            } else if (randomImageName === "chapeu_8a20euros") {
                coords = { x: 440, y: 350 };
                preco_produto = Phaser.Math.RND.realInRange(8.00, 20.00).toFixed(2);
                etiqueta = this.add.image(430, 350, "etiqueta").setOrigin(0,0);
                randomImage = this.add.image(370, 190, randomImageName).setOrigin(0, 0);
                randomImage.setDisplaySize(300,300);
            } else if (randomImageName === "chavena_2a4euros") {
                coords = { x: 410, y: 295 };
                preco_produto = Phaser.Math.RND.realInRange(2.00, 4.00).toFixed(2);
                etiqueta = this.add.image(415, 300, "etiqueta").setOrigin(0,0);
                //esquerda/direita, cima/baixo
                randomImage = this.add.image(400, 210, randomImageName).setOrigin(0, 0);
            } else if (randomImageName === "gelado_40a120centimos") {
                coords = { x: 435, y: 275 };
                preco_produto = Phaser.Math.RND.realInRange(0.40, 1.20).toFixed(2);
                etiqueta = this.add.image(440, 280, "etiqueta").setOrigin(0,0);
                randomImage = this.add.image(420, 160, randomImageName).setOrigin(0, 0);
                randomImage.setDisplaySize(170,280);
            } else if (randomImageName === "pera_10a20centimos") {
                coords = { x: 440, y: 325 };
                preco_produto = Phaser.Math.RND.realInRange(0.10, 0.20).toFixed(2);
                etiqueta = this.add.image(450, 330, "etiqueta").setOrigin(0,0);
                randomImage = this.add.image(400, 150, randomImageName).setOrigin(0, 0);
                randomImage.setDisplaySize(230,280);
            } else if (randomImageName === "tshirt_5a18euros") {
                coords = { x: 415, y: 255 };
                preco_produto = Phaser.Math.RND.realInRange(5.00, 18.00).toFixed(2);
                etiqueta = this.add.image(430, 260, "etiqueta").setOrigin(0,0);
                randomImage = this.add.image(400, 180, randomImageName).setOrigin(0, 0);
            }

            // Adiciona a etiqueta e o texto com base nas coordenadas e preço definidos
            etiqueta.setDisplaySize(280,150);
            etiqueta.angle += 180;
            
            this.etiqueta = etiqueta;
            var textoX = coords.x;
            var textoY = coords.y;
            valor = this.add.text(textoX, textoY, "Valor: " + preco_produto + "€", {
                fontFamily: 'Arial',
                fontSize: '30px'
            }).setOrigin(1.6, 1.2);
            valor.angle += 18;
            

            ///////////////////////////////////////////////////////////////
            var imagensValoresDinheiro = {
                "centimo1": { valor: 0.01 },
                "centimos2": { valor: 0.02 },
                "centimos5": { valor: 0.05 },
                "centimos10": { valor: 0.10 },
                "centimos20": { valor: 0.20 },
                "centimos50": { valor: 0.50 },
                "euro1": { valor: 1.00 },
                "euros2": { valor: 2.00 },
                "euros5_completos": { valor: 5.00 },
                "euros10_completos": { valor: 10.00 },
                "euros20_completos": { valor: 20.00 }
            };  
            
            // Lista de moedas disponíveis
            var moedasDisponiveis = Object.keys(imagensValoresDinheiro);

            // Inicializar variáveis
            var valorInicial = parseFloat(preco_produto); 
            var moedasEscolhidas = [];
            var valorTotalEscolhido = 0;

            //escolhe 5 moedas
            while (moedasEscolhidas.length < 5) {
                // Escolher uma moeda aleatória
                var moedaAleatoria = moedasDisponiveis[Math.floor(Math.random() * moedasDisponiveis.length)];
                // Verificar se a moeda é uma nota e se o preço do produto é menor que 10€
                if ((moedaAleatoria === "euros20_completos" || 
                    moedaAleatoria === "euros10_completos" || 
                    moedaAleatoria === "euros5_completos") && preco_produto < 10) {
                    continue; // Se for uma nota e o preço do produto for menor que 10€, continue para a próxima iteração
                    //fica muito facil se for notas e o preço do produto for inferior a 10 caso as moedas pequenas nao cheguem
                }
                // Adicionar a moeda escolhida à lista de moedas escolhidas
                moedasEscolhidas.push(moedaAleatoria);
                // Atualiza o valor total escolhido
                valorTotalEscolhido += imagensValoresDinheiro[moedaAleatoria].valor;
            }
            
            // Verificar se o valor total escolhido é menor que o preço do produto
            if (valorTotalEscolhido < preco_produto) {
                // Adiciona moedas/notas até que o valor total seja igual ou superior que o preço do produto
                while (valorTotalEscolhido < preco_produto) {
                    var moedaAleatoria = moedasDisponiveis[Math.floor(Math.random() * moedasDisponiveis.length)];
                    moedasEscolhidas.push(moedaAleatoria);
                    valorTotalEscolhido += imagensValoresDinheiro[moedaAleatoria].valor;
                }
            }
            

            console.log("Valor: " + valorTotalEscolhido);
            console.log("Moedas: " + moedasEscolhidas.join(", "));


            var count_cent1 = 0;
            var count_cent2 = 0;
            var count_cent5 = 0;
            var count_cent10 = 0;
            var count_cent20 = 0;
            var count_cent50 = 0;
            var count_euro1 = 0;
            var count_euros2 = 0;
            var count_euros5_completos = 0;
            var count_euros10_completos = 0;
            var count_euros20_completos = 0;
            var posicoesMoedas = {}; // Usando um objeto vazio

            // Configurar moedas para serem arrastáveis e adicionar eventos de drag para cada moeda
            moedasEscolhidas.forEach(function(moeda) {
                let novaMoeda;
                switch (moeda) {
                    case "centimo1":
                        novaMoeda = this.add.image(750 + 5 * count_cent1, 620 - 5 * count_cent1, "centimo1").setOrigin(0, 0);
                        count_cent1++;
                        break;
                    case "centimos2":
                        novaMoeda = this.add.image(680 + 5 * count_cent2, 620 - 5 * count_cent2, "centimos2").setOrigin(0, 0);
                        count_cent2++;
                        break;
                    case "centimos5":
                        novaMoeda = this.add.image(610 + 5 * count_cent5, 620 - 5 * count_cent5, "centimos5").setOrigin(0, 0);
                        count_cent5++;
                        break;
                    case "centimos10":
                        novaMoeda = this.add.image(540 + 5 * count_cent10, 620 - 5 * count_cent10, "centimos10").setOrigin(0, 0);
                        count_cent10++;
                        break;
                    case "centimos20":
                        novaMoeda = this.add.image(750 + 5 * count_cent20, 550 - 5 * count_cent20, "centimos20").setOrigin(0, 0);
                        count_cent20++;
                        break;
                    case "centimos50":
                        novaMoeda = this.add.image(680 + 5 * count_cent50, 550 - 5 * count_cent50, "centimos50").setOrigin(0, 0);
                        count_cent50++;
                        break;
                    case "euro1":
                        novaMoeda = this.add.image(610 + 5 * count_euro1, 550 - 5 * count_euro1, "euro1").setOrigin(0, 0);
                        count_euro1++;
                        break;
                    case "euros2":
                        novaMoeda = this.add.image(540 + 5 * count_euros2, 550 - 5 * count_euros2, "euros2").setOrigin(0, 0);
                        count_euros2++;
                        break;
                    case "euros5_completos":
                        novaMoeda = this.add.image(300 + 5 * count_euros5_completos, 575 - 5 * count_euros5_completos, "euros5_completos").setOrigin(0, 0);
                        count_euros5_completos++;
                        break;
                    case "euros10_completos":
                        novaMoeda = this.add.image(380 + 5 * count_euros10_completos, 580 - 5 * count_euros10_completos, "euros10_completos").setOrigin(0, 0);
                        count_euros10_completos++;
                        break;
                    case "euros20_completos":
                        novaMoeda = this.add.image(450 + 5 * count_euros20_completos, 575 - 5 * count_euros20_completos, "euros20_completos").setOrigin(0, 0);
                        count_euros20_completos++;
                        break;
                    // Adicione os outros casos para as outras moedas da mesma maneira
                }

                if (novaMoeda) {
                    novaMoeda.setDisplaySize(50, 50);
                    novaMoeda.setInteractive({ draggable: true });
                    //ao arrastar muda de cor
                    novaMoeda.on('dragstart', function(pointer) {
                        novaMoeda.setTint(0xff0000);
                    });
                    //volta a mesma cor
                    novaMoeda.on('dragend', function(pointer) {
                        novaMoeda.clearTint();
                    });
                    //atualiza a posição
                    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
                        gameObject.x = dragX;
                        gameObject.y = dragY;
                    });
                }
            }, this);
            


            

    });

        
            
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Personagem "homemcaixa" e sua interação
        this.homemcaixa = this.add.image(800,240,"homemcaixa").setOrigin(0,0);
        this.homemcaixa.setDisplaySize(sizes.width-1295, sizes.height-350);
        this.homemcaixa.setInteractive();
        if(this.menuInicial == true) this.homemcaixa.setScale(1); // Define a escala do personagem

        // Configuração do evento de clique para o personagem "homemcaixa"
        this.homemcaixa.on("pointerup", (pointer) => {
            // Atualiza o estado do menu inicial
            this.menuInicial = false;
            this.meninocarrinho.destroy();
            this.homemcaixa.destroy();

            // Configura o layout para a tela de venda
            this.backgroundSQ2 = this.add.image(0,0, "backgroundSQ2").setOrigin(0,0);
            this.backgroundSQ2.setDisplaySize(sizes.width,sizes.height);
            this.homemcaixa = this.add.image(15,15, "homemcaixa").setOrigin(0,0);
            this.homemcaixa.setDisplaySize(100,120);
            this.titulo = this.add.image(500,35, "titulo").setOrigin(0,0);
            this.titulo.setDisplaySize(sizes.width - 1000, sizes.height - 630);
            this.caixaregistadora = this.add.image(950,120, "caixaregistadora").setOrigin(0,0);
            /////////////////////////////////(+ vai para a direita, + vai para baixo)
            this.caixaregistadora.setDisplaySize(600,535);

            ///
            // botao ok iterativo
            var originalX = 1070;
            var originalY = 295;
            
            this.okbutton = this.add.image(originalX, originalY, "okbutton").setOrigin(0, 0);
            this.okbutton.setDisplaySize(130, 70); // (+ estica, + comprime)
            this.okbutton.setScale(1.1, 0.9);

            // Define as interações do mouse
            this.okbutton.setInteractive();
                        
            // Evento quando o botão é pressionado
            this.okbutton.on('pointerdown', function () {
                this.setScale(1, 0.8); // Diminui o tamanho horizontal do botão ao ser pressionado
            });

            // Evento quando o botão é solto
            this.okbutton.on('pointerup', function () {
                this.setScale(1.1, 0.9); // Retorna o tamanho do botão ao normal ao soltar
            });
            
            ////////////////////(+ estica, + comprime)
            this.seta = this.add.image(200,580, "seta").setOrigin(0,0);
            this.seta.setDisplaySize(90, 60);
            
            this.wallet = this.add.image(50,550, "wallet").setOrigin(0,0);
            this.wallet.setDisplaySize(120,100);
            ////
            var originalXseta = 1070;
            var originalYseta = 240;
            this.setaparatras = this.add.image(originalXseta,originalYseta, "setaparatras").setOrigin(0,0);
            this.setaparatras.setDisplaySize(130, 50);//(+ estica, + comprime)
            this.setaparatras.setScale(1.1,0.9);

            this.setaparatras.setInteractive();

            this.setaparatras.on('pointerdown', function(){
                this.setScale(1, 0.8); // Diminui o tamanho horizontal do botão ao ser pressionado
            });

            // Evento quando o botão é solto
            this.setaparatras.on('pointerup', function () {
                this.setScale(1.1, 0.9); // Retorna o tamanho do botão ao normal ao soltar
            });
            ///
            this.textocaixa = this.add.text(1170,445, "Dá o troco.", {fontFamily: 'Arial', fontSize: '30px'}).setOrigin(0,0);
            
            

            // Configura o botão "bthome" na tela de venda
            this.bthome = this.add.image(20,410, "bthome").setOrigin(0,0);
            this.bthome.setDisplaySize(80,80);
            this.bthome.setScale(0.5);
            this.bthome.setInteractive();

            // Configura os eventos de interação para o botão "bthome" na tela de venda
            this.bthome.on('pointerover', () => {
                if (this.menuInicial == false) {
                    this.tweens.add({
                        targets: this.bthome,
                        scale: { value: 0.6, duration: 200 }, // Aumenta para 5% em 200ms
                        ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                    });
                }
            });
            
            this.bthome.on('pointerout', () => {
                if (this.menuInicial == false) {
                    this.tweens.add({
                        targets: this.bthome,
                        scale: { value: 0.5, duration: 200 }, // Retorna ao tamanho original em 200ms
                        ease: 'Linear'
                    });
                }
            });
            
            // Configura o evento de clique para o botão "bthome" na tela de venda
            this.bthome.on("pointerup", (pointer) =>{
                this.scene.start("scene-game"); // Inicia a cena do jogo
                this.menuInicial = true; // Atualiza o estado do menu inicial
            });

            // imagem do produto:
            //const porque só pode ser chamado o random dentro desta função
            const randomIndex = Phaser.Math.Between(0, this.imageList.length - 1);
            const randomImageName = this.imageList[randomIndex];
            var etiquetaCoords = {
                //x para esquerda/direita
                //y para cima/baixo
                "banana_de10a20centimos": { x: 560, y: 350 },
                "chapeu_8a20euros": { x: 450, y: 350 },
                "chavena_2a4euros": { x: 410, y: 300 },
                "gelado_40a120centimos": { x: 450, y: 300 },
                "pera_10a20centimos": { x: 470, y: 350 },
                "tshirt_5a18euros": { x: 450, y: 250 }
            };
            // Adiciona a imagem carregada ao jogo
            this.etiqueta = this.add.image(400, 210, "etiqueta").setOrigin(0,0);
            this.etiqueta.setDisplaySize(280,150);
            this.etiqueta.angle += 180;
            this.randomImage = this.add.image(400, 210, randomImageName).setOrigin(0, 0);
            this.randomImage.setDisplaySize(200, 200);
            
            // Verifica se o nome da imagem está na lista de coordenadas e define as coordenadas correspondentes
            if (randomImageName in etiquetaCoords) {
                var coords = etiquetaCoords[randomImageName];
                this.etiqueta.setPosition(coords.x, coords.y);
                //Calcula as coordenadas para o texto com base no centro da etiqueta
                var textoX = coords.x;
                var textoY = coords.y;
                //valor base do valor aleatorio
                var preco_produto = 0;
            
                if (randomImageName === "banana_de10a20centimos") {
                    preco_produto = Phaser.Math.RND.realInRange(0.10, 0.20).toFixed(2);
                } else if (randomImageName === "chapeu_8a20euros") {
                    preco_produto = Phaser.Math.RND.realInRange(8.00, 20.00).toFixed(2);
                } else if (randomImageName === "chavena_2a4euros") {
                    preco_produto = Phaser.Math.RND.realInRange(2.00, 4.00).toFixed(2);
                } else if (randomImageName === "gelado_40a120centimos") {
                    preco_produto = Phaser.Math.RND.realInRange(0.40, 1.20).toFixed(2);
                } else if (randomImageName === "pera_10a20centimos") {
                    preco_produto = Phaser.Math.RND.realInRange(0.10, 0.20).toFixed(2);
                } else if (randomImageName === "tshirt_5a18euros") {
                    preco_produto = Phaser.Math.RND.realInRange(5.00, 18.00).toFixed(2);
                }
            
                // Adiciona o texto com o valor aleatório dentro da etiqueta
                this.valor = this.add.text(textoX, textoY, "Valor: " + preco_produto + "€", {
                    fontFamily: 'Arial',
                    fontSize: '30px'
                }).setOrigin(1.6, 1.2);
                this.valor.angle += 19; 
                
            }
        });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Configura os eventos de interação para os botões "homemcaixa" e "meninocarrinho"
        // para aumentar de tamanho quando o cursor estiver sobre eles
        this.homemcaixa.setInteractive();
        this.meninocarrinho.setInteractive();

        this.homemcaixa.on('pointerover', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.homemcaixa,
                    scale: { value: 1.05, duration: 100 }, // Aumenta para 5% em 200ms
                    ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                });
            }
        });
        
        this.homemcaixa.on('pointerout', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.homemcaixa,
                    scale: { value: 1, duration: 100 }, // Retorna ao tamanho original em 200ms
                    ease: 'Linear'
                });
            }
        });

        this.meninocarrinho.on('pointerover', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.meninocarrinho,
                    scale: { value: 1.05, duration: 200 }, // Aumenta para 5% em 200ms
                    ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                });
            }
        });
        
        this.meninocarrinho.on('pointerout', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.meninocarrinho,
                    scale: { value: 1, duration: 200 }, // Retorna ao tamanho original em 200ms
                    ease: 'Linear'
                });
            }
        });
        
        // Configura os botões "btinfo" e "btcreditos" e o título do jogo
        this.btinfo = this.add.image(1450,490,"btinfo").setOrigin(0,0);
        this.btinfo.setDisplaySize(0,0);
        this.btinfo.setScale(0.5);
        this.btinfo.setInteractive();
        
        this.btinfo.on('pointerover', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.btinfo,
                    scale: { value: 0.6, duration: 200 }, // Aumenta para 5% em 200ms
                    ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                });
            }
        });
        
        this.btinfo.on('pointerout', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.btinfo,
                    scale: { value: 0.5, duration: 200 }, // Retorna ao tamanho original em 200ms
                    ease: 'Linear'
                });
            }
        });

        this.btcreditos = this.add.image(1450,580,"btcreditos").setOrigin(0,0);
        this.btcreditos.setDisplaySize(0,0);
        this.btcreditos.setScale(0.5);
        this.btcreditos.setInteractive();

        this.btcreditos.on('pointerover', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.btcreditos,
                    scale: { value: 0.6, duration: 200 }, // Aumenta para 5% em 200ms
                    ease: 'Linear' // Utiliza uma função de easing linear para uma transição suave
                });
            }
        });
        
        this.btcreditos.on('pointerout', () => {
            if (this.menuInicial == true) {
                this.tweens.add({
                    targets: this.btcreditos,
                    scale: { value: 0.5, duration: 200 }, // Retorna ao tamanho original em 200ms
                    ease: 'Linear'
                });
            }
        });
        
        this.titulo = this.add.image(500,100, "titulo").setOrigin(0,0);
        this.titulo.setDisplaySize(sizes.width - 1000, sizes.height - 630);

    }

    update() {} // Função de atualização do jogo, chamada automaticamente pelo Phaser em cada frame

} 

// Configuração do jogo
const config = {
    type: Phaser.AUTO, // Tipo de renderização WebGL
    width: sizes.width, // Largura do jogo
    height: sizes.height, // Altura do jogo
    scene: [GameScene], // Array de cenas do jogo, neste caso, apenas uma cena (GameScene)
    scale: {
        mode: Phaser.Scale.FIT, // Ajusta o jogo para caber na janela do navegador
        autoCenter: Phaser.Scale.CENTER_BOTH // Centraliza o jogo na janela do navegador
    },
    backgroundColor: "#ffffff",
    parent: 'divId',
    fullscreenTarget: 'divId',
    scene: [GameScene],
}

// Criação do objeto de jogo com base na configuração definida
const game = new Phaser.Game(config);
