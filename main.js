// Importa o arquivo de estilos CSS para o jogo
import './style.css'

// Importa a biblioteca Phaser
import Phaser from 'phaser';

// Define as dimensões do jogo
const sizes = {
    width: 1580, // Largura do jogo
    height: 680, // Altura do jogo
}

// definir fundo
document.body.style.backgroundColor = "black";

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
        /*this.imageList = [ "banana_de10a20centimos.png", 
        "chapeu_8a20euros.png", "chavena_2a4euros.png",
        "gelado_40a120centimos.png", "pera_10a20centimos.png", 
        "tshirt_5a18euros.png"];*/
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
        this.load.image("centimo1", "./assets/centimo1.png");
        this.load.image("euro1", "./assets/euro1.png");
        this.load.image("centimos2", "./assets/centimos2.png");
        this.load.image("euros2", "./assets/euros2.png");
        this.load.image("centimos5", "./assets/centimos5.png");
        this.load.image("euros5_completos", "./assets/euros5_completos.png");
        this.load.image("euros5", "./assets/euros5.png");
        this.load.image("centimos10", "./assets/centimos10.png");
        this.load.image("euros10_completos", "./assets/euros10_completos.png");
        this.load.image("euros10", "./assets/euros10.png");
        this.load.image("centimos20", "./assets/centimos20.png");
        this.load.image("euros20_completos", "./assets/euros20_completos.png");
        this.load.image("euros20", "./assets/euros20.png");
        this.load.image("centimos50", "./assets/centimos50.png");
        this.load.image("etiqueta", "./assets/etiqueta.png");
        this.load.image("imagemDinheiro", "./assets/imagemDinheiro.png");
        //this.loadRandomImage();
    }

    /*loadRandomImage() {
        //const porque só pode ser chamado o random dentro desta função
        const randomIndex = Phaser.Math.Between(0, this.imageList.length - 1);
        const randomImageName = this.imageList[randomIndex];
    
        // Carrega a imagem aleatória
        this.load.image(randomImageName, "./assets/" + randomImageName);
    
        // Define a função a ser chamada quando a imagem for carregada completamente
        this.load.once('complete', () => {
            // Adiciona a imagem carregada ao jogo
            this.randomImage = this.add.image(450, 250, randomImageName).setOrigin(0, 0);
            this.randomImage.setDisplaySize(150, 150);
        });

        // Inicia o carregamento das imagens
        this.load.start();
    }*/
    

    create() {
        // Define uma variável para controlar se o menu inicial está ativo
        this.menuInicial = true;

        // Layout 1: Configura o fundo e os personagens para o menu inicial
        this.background = this.add.image(0,0,"backgroundSQ").setOrigin(0,0); // Fundo
        this.background.setDisplaySize(sizes.width, sizes.height); // Define o tamanho do fundo

        // Personagem "meninocarrinho" e sua interação
        this.meninocarrinho = this.add.image(430, 285, "meninocarrinho").setOrigin(0,0); // Personagem
        this.meninocarrinho.setDisplaySize(sizes.width-1295, sizes.height-400); // Define o tamanho do personagem
        this.meninocarrinho.setScale(1); // Define a escala do personagem
        this.meninocarrinho.setInteractive(); // Torna o personagem interativo

        // Configuração do evento de clique para o personagem "meninocarrinho"
        this.meninocarrinho.on("pointerup", (pointer) => {
            // Atualiza o estado do menu inicial
            this.menuInicial = false;

            // Configura o layout para a tela de compra
            this.backgroundSQ2 = this.add.image(0,0, "backgroundSQ2").setOrigin(0,0);
            this.backgroundSQ2.setDisplaySize(sizes.width,sizes.height);
            this.meninocarrinho = this.add.image(30,15, "meninocarrinho").setOrigin(0,0);
            this.meninocarrinho.setDisplaySize(100,120);
            this.titulo = this.add.image(500,35, "titulo").setOrigin(0,0);
            this.titulo.setDisplaySize(sizes.width - 1000, sizes.height - 630);
            this.caixaregistadora = this.add.image(950,120, "caixaregistadora").setOrigin(0,0);//(+ vai para a direita, + vai para baixo)
            this.caixaregistadora.setDisplaySize(600,535);//(+ estica, + comprime)
            this.okbutton = this.add.image(1070,295, "okbutton").setOrigin(0,0);
            this.okbutton.setDisplaySize(130,70);//(+ estica, + comprime)
            this.seta = this.add.image(200,580, "seta").setOrigin(0,0);
            this.seta.setDisplaySize(90, 60);//(+ estica, + comprime)
            this.wallet = this.add.image(50,550, "wallet").setOrigin(0,0);
            this.wallet.setDisplaySize(120,100);//(+ estica, + comprime)
            this.setaparatras = this.add.image(1070,240, "setaparatras").setOrigin(0,0);
            this.setaparatras.setDisplaySize(130,50);//(+ estica, + comprime)
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
        });
        

        // Personagem "homemcaixa" e sua interação
        this.homemcaixa = this.add.image(800,240,"homemcaixa").setOrigin(0,0);
        this.homemcaixa.setDisplaySize(sizes.width-1295, sizes.height-350);
        this.homemcaixa.setInteractive();
        if(this.menuInicial == true) this.homemcaixa.setScale(1); // Define a escala do personagem

        // Configuração do evento de clique para o personagem "homemcaixa"
        this.homemcaixa.on("pointerup", (pointer) => {
            // Atualiza o estado do menu inicial
            this.menuInicial = false;

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
            this.okbutton = this.add.image(1070,295, "okbutton").setOrigin(0,0);
            this.okbutton.setDisplaySize(130,70);
            ////////////////////(+ estica, + comprime)
            this.seta = this.add.image(200,580, "seta").setOrigin(0,0);
            this.seta.setDisplaySize(90, 60);
            this.wallet = this.add.image(50,550, "wallet").setOrigin(0,0);
            this.wallet.setDisplaySize(120,100);
            this.setaparatras = this.add.image(1070,240, "setaparatras").setOrigin(0,0);
            this.setaparatras.setDisplaySize(130,50);
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
        });

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
    scene: [GameScene] // Array de cenas do jogo, neste caso, apenas uma cena (GameScene)
}

// Criação do objeto de jogo com base na configuração definida
const game = new Phaser.Game(config);