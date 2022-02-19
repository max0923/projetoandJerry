var bgImg
var cat
var mouse


function preload() {
    //carregue as imagens aqui
    bgImg = laodImage("images/garden.png")
    catimg1 = laodImage("image/cat1.png")
    mouseimg1 = laodImage("image/mouse1.png")
    catimg2 = laodImage("https://cdn.pixabay.com/photo/2020/11/15/18/51/cat-5746875_960_720.png")
    mouseimg2 = laodImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmDcItZ0oHBavtBqXI8Ud0BzB7gvw79SqcxiibeXQvQjzb5nzL61fpyYS5M0v7DbuLqM&usqp=CAU")
}   
function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    
    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", catimg1);
    cat.scate = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("gatoSentado", mouseimg1);
    mouse.scate = 0.15;

}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.AddAnimation("ultimaImagemGato",catimg3);
        cat.changeAnimetion("ultimaImagemGato");
        cat.x =300;
        cat.scale=0.2;
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keycode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando", mauseimg2);
    mouse.changeAnimetion("ratoProvocando")
    mouse.frameDelay = 25;

}
}
