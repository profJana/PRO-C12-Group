//Variáveis
var trex, trexCorrendo;
var chao, chaoImg, chaoInvisivel; //1
var canvas;
var velocidadeChao = -4;
var gravidade = 0.9;
var forcaPulo = -10;

//carregar animações
function preload(){ 
  trexCorrendo = loadAnimation("t1.png","t3.png", "t4.png");
  chaoImg = loadImage('ground2.png') //2
}

function setup() {
  canvas = createCanvas(600, 200); //larg, alt
  canvas.center();

  //crie um sprite de trex
  trex = createSprite(50,150,20,50);
  trex.addAnimation("correndo", trexCorrendo);
  //adicione dimensão ao trex
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  chao = createSprite(300,170,600,20); //4 mudar o y
  chao.addImage("chao", chaoImg); //3
  chao.velocityX = velocidadeChao; //9 

  //5 crie um chao invisivel para ver o colisor
  chaoInvisivel = createSprite(300,195,600,20)
  chaoInvisivel.visible = false; //8
}

function draw() {// desenhar
  background(220); //fundo
  drawSprites(); //desenha os sprite
  frameRate(50)
  // Verifica se o trex está no chão
  var noChao = trex.collide(chaoInvisivel); //6 alterar para chaoInvisivel

  // Se estiver no chão e a tecla de espaço for pressionada, aplique a força de pulo
  if (noChao && keyDown("space")) {
    trex.velocityY = forcaPulo;
    console.log(trex.y)
  }

  // Aplica a gravidade apenas se não estiver no chão
  if (!noChao) {
    trex.velocityY += gravidade;
    console.log(trex.y)
  }

  console.log(chao.x)
  //10
  if (chao.x < 0){
    chao.x = chao.width/2; 
    console.log("x do chao" + chao.x)
  }
  
  //impedir que o trex caia (por conta da gravidade)
  trex.collide(chaoInvisivel); //7 alterar para chaoInvisivel
  
  //console.count("o draw é executado")
}
