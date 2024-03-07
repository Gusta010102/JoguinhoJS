//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 16;
let raio = diametro / 2;

//Variáveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete1
let xRaquete = 5;
let yRaquete = 150;
let comprimento_Rect = 8;
let altura_Rect = 80;

//Variáveis da raquete inimiga
let xRaquete2 = 585;
let yRaquete2 = 150;
let comprimento_Rect2 = 8;
let altura_Rect2 = 80;
let velocidadeYOponente;


//Variáveis da Colisão 
let colidiu = false;

//Variáveis do placar
let meusPontos = 0;
let pontosOponente = 0;

//Sons
let raquetada;
let coin;
let tecno;

function preload(){
  coin = loadSound("Coin.mp3");
  tecno = loadSound("Techno.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  tecno.loop();
}

function draw() {
  
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificadorDeColisoes();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentarRaquete();
  //verificadorDeColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaquete2, yRaquete2);
  movimentaRaqueteOponente();
  placar();
  marcaPonto();
}

function mostraBolinha() { 
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha +=  velocidadeXBolinha;
  yBolinha +=  velocidadeYBolinha;
}

function verificadorDeColisoes(){
   if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
   rect(x, y, comprimento_Rect, altura_Rect);
}

function movimentarRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
   yRaquete = constrain(yRaquete, 10, 310);
}

function verificadorDeColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimento_Rect && 
    yBolinha - raio < yRaquete + altura_Rect &&
    yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function colisaoMinhaRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, comprimento_Rect, altura_Rect, xBolinha, yBolinha, raio)
  if (colidiu){ 
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

  function movimentaRaqueteOponente(){
    if(keyIsDown(87)){
    yRaquete2 -= 10;
  }
  if(keyIsDown(83)){
    yRaquete2 += 10;
  }
  
    
     yRaqueteOponente = constrain(yRaquete2, 10, 310);
  }
function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill (255);
  text(pontosOponente, 470, 26);
}
  
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    coin.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    coin.play();
  }
} 
  
