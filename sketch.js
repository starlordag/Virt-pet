//Create variables here
var database = firebase.database();
var Dog, dog, happyDog;
var food, foodStock;
var foods;

function preload(){
  //load images here
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  dog.resize(150, 150);
  Dog = createSprite(250,300,20,20);
  Dog.addImage(dog);
  foodStock = database.ref("Food/Food");
  foodStock.on("value",readFood);
}


function draw() {  
  background("darkgreen");
  textSize(20);
  fill("white");
  text("Food Remaining: " + foods,170,200)
  textSize(15);
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",90,50);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    Dog.addImage(happyDog);
    changeFoodVal();
  }
}

function changeFoodVal(){
  foodStock.set(foods-1);
}

function readFood(data){
  foods = data.val();
}



