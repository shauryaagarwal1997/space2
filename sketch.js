var buttonPlanets, buttonConstel;
var butMer,butVen,butEar,butMar,butJup,butSat,butUra,butNep;
var butOrion,butTaurus,butLeo,butCassiopeia,butUrsaMajor,butCanisMajor,butDraco,butHydra;
var bg1,bg2,bg3,empsky,sky1;
var appState=0;
var mer,ven,ear,mar,jup,sat,ura,nep;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var orion,cassiopeia,taurus,hydra,draco,ursamajor,canismajor,leo;
var displayMercury,displayVenus,displayEarth,displayMars,displayJupiter,displaySaturn,displayUranus,displayNeptune;
var displayMercury1,displayVenus1,displayEarth1,displayMars1,displayJupiter1,displaySaturn1,displayUranus1,displayNeptune1;
var displayOrion1,displayLeo1,displayTaurus1,displayHydra1,displayDraco1,displayCassiopeia1,displayUrsaMajor1,displayCanisMajor1;
var orioni,cassiopeiai,taurusi,hydrai,dracoi,ursamajori,canismajori,leoi;
var nextMer,nextVen,nextEar,nextMar,nextJup,nextSat,nextUra,nextNep;
var merPlanet,venPlanet,earPlanet,marPlanet,jupPlanet,satPlanet,uraPlanet,nepPlanet;
var merPlaneti,venPlaneti,earPlaneti,marPlaneti,jupPlaneti,satPlaneti,uraPlaneti,nepPlaneti;
var orion1,leo1,taurus1,cassiopeia1,hydra1,ursamajor1,canismajor1,draco1;
var orion1i,leo1i,taurus1i,cassiopeia1i,hydra1i,ursamajor1i,canismajor1i,draco1i;
var nMer,nVen,nEar,nMar,nJup,nSat,nUra,nNep;
var pJup;
var pMer;
var score=0;
var butback;
var butiss;
var iss,issImage;
var dataInfoA,dataInfoB,dataInfo;
var hello1,hello2;
var continent1;

function preload(){
bg2=loadImage("background/sky.jpeg");
bg1=loadImage("background/sky2.jpg");
bg3=loadImage("background/const.jpg");
sky1=loadImage("background/sky3.jpg");
mer=loadImage("planets/mercury.jpg");
ven=loadImage("planets/venus.jpg");
ear=loadImage("planets/earth.jpg");
mar=loadImage("planets/mars.jpg");
jup=loadImage("planets/jupiter.jpg");
sat=loadImage("planets/saturn.jpg");
ura=loadImage("planets/uranus.jpg");
nep=loadImage("planets/neptune.jpg");
empsky=loadImage("background/sky4.jpg");
merPlaneti=loadImage("planets/mercury.jpg");
venPlaneti=loadImage("planets/venus.jpg");
earPlaneti=loadImage("planets/earth.jpg");
marPlaneti=loadImage("planets/mars.jpg");
jupPlaneti=loadImage("planets/jupiter.jpg");
satPlaneti=loadImage("planets/saturn.jpg");
uraPlaneti=loadImage("planets/uranus.jpg");
nepPlaneti=loadImage("planets/neptune.jpg");
orioni=loadImage("constellations/orion.jpg");
cassiopeiai=loadImage("constellations/cassiopeia.jpg");
hydrai=loadImage("constellations/hydra.jpg");
taurusi=loadImage("constellations/taurus.jpg");
ursamajori=loadImage("constellations/ursa.jpg");
canismajori=loadImage("constellations/canis.jpg");
leoi=loadImage("constellations/leo.jpg");
orion1i=loadImage("constellations/orion1.jpg");
cassiopeia1i=loadImage("constellations/cassiopeia1.jpg");
hydra1i=loadImage("constellations/hydra1.jpg");
taurus1i=loadImage("constellations/taurus1.jpg");
ursamajor1i=loadImage("constellations/ursamajor1.jpg");
canismajor1i=loadImage("constellations/canismajor1.jpg");
leo1i=loadImage("constellations/leo1.jpg");
draco1i=loadImage("constellations/draco1.jpg");
dracoi=loadImage("constellations/draco.jpg");
issImg=loadImage("background/iss.jpg");

}

function setup(){
    createCanvas(displayWidth,displayHeight-120);
    buttonPlanets=createButton('PLANETS')
    buttonPlanets.position(displayWidth/2-220,displayHeight/2-110)
    buttonPlanets.style('background','orange')
    buttonPlanets.size(350,50);

    buttonConstel=createButton('CONSTELLATIONS')
    buttonConstel.position(displayWidth/2-220,displayHeight/2-60)
    buttonConstel.style('background','yellow')
    buttonConstel.size(350,50);

    butiss=createButton('ISS LIVE')
    butiss.position(displayWidth/2-220,displayHeight/2-10)
    butiss.style('background','lightgreen')
    butiss.size(350,50);

    displayMercury=new pressMercury(); 
    displayVenus=new pressVenus();
    displayEarth=new pressEarth(); 
    displayMars=new pressMars(); 
    displayJupiter=new pressJupiter(); 
    displaySaturn=new pressSaturn();  
    displayUranus=new pressUranus(); 
   displayNeptune=new pressNeptune(); 

    displayOrion=new pressOrion();
    displayLeo=new pressLeo();
    displayCanisMajor=new pressCanisMajor();
    displayUrsaMajor=new pressUrsaMajor();
    displayTaurus=new pressTaurus();
    displayDraco=new pressDraco();
    displayHydra=new pressHydra();
    displayCassiopeia=new pressCassiopeia();
}

function draw(){
if(appState===0){
background(bg1);
textSize(50);
fill("yellow");
stroke("black")
strokeWeight(7)
text("What will you like to check out today ?",displayWidth/2-430,displayHeight/2-150)
}
buttonPlanets.mousePressed(()=>{
appState=1;
})
buttonConstel.mousePressed(()=>{
    appState=3;
})
butiss.mousePressed(()=>{
    appState=5;
})

if(appState===1){
background(empsky);
butiss.hide();
buttonPlanets.hide();
buttonConstel.hide();
background(empsky);

appState=2;
drawSprites();
if(score===1){
    mercury.x=1000;
}
    venus=createSprite(displayWidth/2+760,displayHeight/2+230,10,10);
    mars=createSprite(displayWidth/2+70,displayHeight/2+230,10,10);
    neptune=createSprite(displayWidth/2+375,displayHeight/2-10,10,10);
    earth=createSprite(displayWidth/2+720,displayHeight/2-300,10,10);
    jupiter=createSprite(displayWidth/2-720,displayHeight/2+180,10,10);
    saturn=createSprite(displayWidth/2-760,displayHeight/2-290,10,10); 
    uranus=createSprite(displayWidth/2-400,displayHeight/2-220,10,10);
    mercury=createSprite(displayWidth/2-300,displayHeight/2+150,10,10);
    
    mercury.scale=0.75;
    earth.scale=0.9;
    neptune.scale=1.51;
    uranus.scale=1.6;
    jupiter.scale=2.3
    saturn.scale=2.2;
    mars.scale=1.8
    venus.scale=1.65

    mercury.addImage(mer);
    venus.addImage(ven);
    earth.addImage(ear);
    mars.addImage(mar);
    jupiter.addImage(jup);
    saturn.addImage(sat);
    uranus.addImage(ura);
    neptune.addImage(nep);
  
}

if(appState===2){
    textSize(50);
    fill("orange");
    stroke("black")
    strokeWeight(7)
    text("Which planet would you like to explore ?",displayWidth/2-440,displayHeight/2-450)

    displayMercury.display();
    displayVenus.display();
    displayEarth.display();
    displayMars.display();
    displayJupiter.display();
    displaySaturn.display();
    displayUranus.display();
    displayNeptune.display();

}
if(appState===3){
    background(empsky);
    buttonPlanets.hide();
    buttonConstel.hide();
    butiss.hide();
    background(empsky);
    appState=4;
    orion=createSprite(displayWidth/2-650,displayHeight/2,10,10);
    cassiopeia=createSprite(displayWidth/2-50,displayHeight/2+130,10,10);
    leo=createSprite(displayWidth/2+560,displayHeight/2-130,10,10);
    canismajor=createSprite(displayWidth/2+560,displayHeight/2+200,10,10);
   
    canismajor.scale=2.2
    cassiopeia.scale=1.6;
    leo.scale=1.5;
    orion.scale=1.4;

    orion.addImage(orioni);
    cassiopeia.addImage(cassiopeiai);
    canismajor.addImage(canismajori);
    leo.addImage(leoi)
}

if(appState===4){
    textSize(50);
    fill("orange");
    stroke("black")
    strokeWeight(7);
    text("Constellations are a group of stars that form a recognizable pattern.",displayWidth/2-680,displayHeight/2-460)
    text("Which constellation would you like to explore ?",displayWidth/2-520,displayHeight/2-400)

    displayOrion.display();
    displayLeo.display();
    displayTaurus.display();
    displayDraco.display();
    displayHydra.display();
    displayCassiopeia.display();
    displayUrsaMajor.display();
    displayCanisMajor.display();

}
if(appState===5){    
    background(sky1);
    getIss();
    iss=createSprite(displayWidth/2-450,displayHeight/2-100,500,500);
    iss.addImage(issImg);
    iss.scale=0.8;
    drawSprites();
    buttonPlanets.hide();
    buttonConstel.hide();
    butiss.hide();
    textSize(60);
    fill("red");
    text("ISS LIVE",displayWidth/2+340,displayHeight/2-400);
    textSize(50);
    fill("yellow");
    text("LONGITUDE :",displayWidth/2+110,displayHeight/2-200);
    text("LATITUDE :",displayWidth/2+110,displayHeight/2-120);
    text("HEMISPHERE (E/W) :",displayWidth/2+110,displayHeight/2-40);
    text("HEMISPHERE (N/S) :",displayWidth/2+110,displayHeight/2+40);
    text("CONTINENT :",displayWidth/2+110,displayHeight/2+120);

    textSize(50);
    fill("red");
    text(dataInfoA,displayWidth/2+470,displayHeight/2-200);
    text(dataInfoB,displayWidth/2+420,displayHeight/2-120);

    if(hello1==="-"){
        text("WESTERN",displayWidth/2+650,displayHeight/2-30);
    }else{
        text("EASTERN",displayWidth/2+650,displayHeight/2-40);
    }
    if(hello2==="-"){
        text("SOUTHERN",displayWidth/2+620,displayHeight/2+40);
    }else{
        text("NORTHERN",displayWidth/2+620,displayHeight/2+40);
    }

    if(dataInfoA>25 && dataInfoA<180 && dataInfoB>-10 && dataInfoB<80){
        text("ASIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }
    
    if(dataInfoA>-15 && dataInfoA<50 && dataInfoB>-35 && dataInfoB<35){
        text("AFRICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }


    if(dataInfoA>113 && dataInfoA<153 && dataInfoB<-10 && dataInfoB>-43){
        text("AUSTRALIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }


    if(dataInfoA>-15 && dataInfoA<50 && dataInfoB>-35 && dataInfoB<35){
        text("AFRICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

    if(dataInfoA>-160 && dataInfoA<-30 && dataInfoB<70 && dataInfoB>15){
        text("NORTH AMERICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

    if(dataInfoA>-80 && dataInfoA<-35 && dataInfoB<10 && dataInfoB>-55){
        text("SOUTH AMERICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

}
}
async function getIss(){
    var response=await fetch("http://api.open-notify.org/iss-now.json");
    var responseJSON=await response.json();
    dataInfo=responseJSON.iss_position;
    dataInfoA=dataInfo.longitude;
    dataInfoB=dataInfo.latitude;
    hello1=dataInfoA.slice(0,1);
    hello2=dataInfoB.slice(0,1)
}