
let pele;
let galaxia;
let azul;
let pupila;
let sapato;
let cabelo;
let boca;
let nariz;
let capa;

function preload()
{
  pele = loadImage('pele2.jpg');
  galaxia = loadImage('galaxia.jpg');
  azul = loadImage('azul.jpg');
  pupila = loadImage('lightBlue.jpg');
  sapato = loadImage('sapato.jpg');
  cabelo = loadImage('cabelo2.jpg');
  boca = loadImage('bocas.jpg');
  nariz = loadImage('nariz.jpg')
  capa = loadImage('capa.jpg');
}
function setup() 
{
  createCanvas(730, 780, WEBGL);
}
function draw() 
{
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  
  rotateY(frameCount * 0.01); 

  ambientLight(50);
  spotLight(0, 250, 0, locX, locY, 100, 0, 0, -1, Math.PI / 16);
  noStroke();

  push();
    //Cabeça do Steve:
    texture(pele);
    translate(0,-70,0); //Posicao x,y,z
    box(90, 85, 50);    //Dimencao horizontal, vertical e profundidade 
    //Tronco do Steve:
    texture(galaxia);
    translate(0,118,0);
    box(90,150,50);
    //Manga direita do Steve:
    translate(-70,-53,0);
    box(50,45,50);
    //Manga esquerda do Steve:
    translate(140,0,0);
    box(50,45,50);
    //Braco direito do Steve:
    texture(pele);
    translate(-140,87,0);
    box(50,130,50);
    //Braco esquerdo do Steve:
    translate(140,0,0);
    box(50,130,50);
    //Perna direita do Steve:
    texture(azul);
    translate(-92,141,0);
    box(45,200,50);
    //Perna esquerda do Steve:
    translate(45,0,0);
    box(45,200,50);
    //Sapato direito Steve:
    texture(sapato);
    translate(0,110,0);
    box(45,20,50);
    //Sapato esquerdo Steve:
    translate(-45,0,0);
    box(45,20,50);
    //Olhos do Steve:
    texture(false);
    translate(0,-410,28);
    box(26,15,3);
    translate(44,0,0);
    box(26,15,3);
    //Pupilas do Steve:
    texture(pupila);
    translate(-5,0,2);
    box(15,15,0);
    translate(-34,0,0); //posX = -17
    box(15,15,0);
    //Cabelo:
    texture(cabelo);
    noStroke();
    translate(17,-31,-4); //posX = 0 posY = - 108
    box(90,10,0);
    translate(-40,10,0); //posy -98
    box(10,10,0);
    translate(80,0,0); //posX = 40 posZ = 26 posY = -98
    box(10,10,0);
    translate(-40,10,-52); //posX = 0  posZ = -26 posY = -88;
    box(90,50,0);
    translate(0,-25,26); // posx = 0 posz = 0 posy = - 113
    box(90,0,50);
    translate(-46,5,0); //x = -46 y = -108
    box(0,10,50);
    translate(92, 0, 0); //x = 46 y = 120 z = 0
    box(0,10,50);
    translate(0,25,-10); //x = 46 y = 145 z = -10
    box(0,40,30);
    translate(-92,0,0); //x = -46 y = 145 z = -10
    box(0,40,30);
    translate(0,-5,30); // z 20 y 140 x -46
    box(0,30,10);
    translate(92,0,0); //x 46, y 140, z 20
    box(0,30,10);
    translate(0,-5,-10); //x 46, y 135, z 10
    box(0,20,10);
    translate(-92,0,0); //x -46 y135, z10
    box(0,20,10);
    //Boca
    texture(boca);
    translate(46,50,16); // z 40
    plane(70,30);
    //Nariz
    texture(nariz)
    translate(0,-20,0);
    plane(30,30);
    //Capa
    texture(capa);
    translate(0,135,-65);
    rotateX(25).rotateY(59.7).plane(90,200);
  pop(); 
}