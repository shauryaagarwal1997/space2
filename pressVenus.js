class pressVenus{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nVen=createButton('INTERESTING FACTS =>'); 
    }
display(){
    butMer.position(displayWidth/2-2580,displayHeight/2-400);
    butMer.size(200,50);
    butMer.style('background','cream');

    butVen.position(displayWidth/2-250,displayHeight/2-340);
    butEar.position(displayWidth/2-250,displayHeight/2-280);
    butMar.position(displayWidth/2-250,displayHeight/2-220);
    butJup.position(displayWidth/2+30,displayHeight/2-400);
    butSat.position(displayWidth/2+30,displayHeight/2-340);
    butUra.position(displayWidth/2+30,displayHeight/2-280);
    butNep.position(displayWidth/2+30,displayHeight/2-220);
    drawSprites();
    butVen.size(200,50);
    butEar.size(200,50);
    butMar.size(200,50);
    butJup.size(200,50);
    butSat.size(200,50);
    butUra.size(200,50);
    butNep.size(200,50);
    butVen.style('background','lightgreen');
    butEar.style('background','cream');
    butMar.style('background','lightgreen');
    butJup.style('background','cream');
    butSat.style('background','lightgreen');
    butUra.style('background','cream');
    butNep.style('background','lightgreen');
    
    butVen.mousePressed(()=>{
        butMer.hide();
        butVen.hide();
        butEar.hide();
        butMar.hide();
        butJup.hide();
        butSat.hide();
        butUra.hide();
        butNep.hide();
        textSize(30);
        venus.velocityY=-1000001;
        earth.velocityX=-10000000000;
        mars.velocityY=1100000;
        jupiter.velocityX=-11000000;
        saturn.velocityX=11000000;
        uranus.velocityX=1100000;
        neptune.velocityX=1000001;
        mercury.velocityX=1000010;
        background(sky1);
        textSize(40);
        fill("lightgreen");
        stroke("black")
        strokeWeight(7)
        text("VENUS",displayWidth/2-130,displayHeight/2-385)

        venPlanet=createSprite(displayWidth/2-550,displayHeight/2-30,10,10);
        venPlanet.addImage(venPlaneti);
        venPlanet.scale=3;

        butback=createButton('BACK');
        butback.position(displayWidth-(displayWidth-50),displayHeight-(displayHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nVen.hide();
            background(sky1);
            appState=1;
            venPlanet.velocityX=100000;
            displayMercury1=new pressVenus();
            displayVenus1=new pressEarth();
            displayEarth1=new pressMars();
            displayMars1=new pressJupiter();
            displayJupiter1=new pressSaturn();
            displaysaturn1=new pressUranus();
            displayUranus1=new pressNeptune();
            displayNeptune1=new pressMercury();
            })

        fill("lightgreen");
        rectMode(CENTER);
        rect(displayWidth/2+100,displayHeight/2-30,1400,500);
        textSize(35);
        stroke("red");
        strokeWeight(2);
        fill("red");
        text("INTERESTING INFORMATION",displayWidth/2+50,displayHeight/2-220);
        textSize(30);
        fill("black");
        stroke(0);
        strokeWeight(2);
        text("1. Average Distance from the Sun : ",displayWidth/2-90,displayHeight/2-175);
        text("2. Length of Day : ",displayWidth/2-90,displayHeight/2-125);
        text("3. Length of Year : ",displayWidth/2-90,displayHeight/2-75);
        text("4. Planet Type : ",displayWidth/2-90,displayHeight/2-25);
        text("5. Number of Moons : ",displayWidth/2-90,displayHeight/2+25);
        text("6. Temperature : Day :                      Night : ",displayWidth/2-90,displayHeight/2+75)
        text("7. Escape Velocity : ",displayWidth/2-90,displayHeight/2+125)
        text("8. Nickname : ",displayWidth/2-90,displayHeight/2+175)
        fill("blue");
        text("0.7 AU (108 million km)",displayWidth/2+390,displayHeight/2-175);
        fill("purple");
        text("116 Earth days 18 hours",displayWidth/2+160,displayHeight/2-125);
        fill("blue");
        text("225 days",displayWidth/2+160,displayHeight/2-75);
        fill("purple");
        text("Rocky / terrestrial",displayWidth/2+130,displayHeight/2-25);
        fill("blue");
        text("Zero (0)",displayWidth/2+210,displayHeight/2+25);
        fill("blue");
        text("470° Celcius            470° Celcius",displayWidth/2+210,displayHeight/2+75);
        fill("purple");
        text("10.36 km/s",displayWidth/2+180,displayHeight/2+125);
        fill("blue");
        text("The Morning Star",displayWidth/2+100,displayHeight/2+175);

        nVen.position(displayWidth-310,displayHeight-220)
        nVen.style('background','cream');
        nVen.size(280,50);

        nVen.mousePressed(()=>{
            background(sky1);
            venPlanet.x-=80;
            nVen.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("VENUS",displayWidth/2-130,displayHeight/2-385)

            fill("blue");
            rectMode(CENTER);
            rect(displayWidth/2+100,displayHeight/2-30,1400,450);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACTS",displayWidth/2+130,displayHeight/2-190);
            textSize(35)
            fill("yellow")
            text("1. Venus is the hottest planet in the Solar System. This ",displayWidth/2-130,displayHeight/2-120);
            text("is because Venus has very thick clouds of sulphuric acid ",displayWidth/2-130,displayHeight/2-70);
            text("which trap the Sun's heat.",displayWidth/2-130,displayHeight/2-20);
            text("2. As already mentioned, Venus has sulphuric acid clouds,",displayWidth/2-130,displayHeight/2+30);
            text("which rain Sulphuric Acid on the planet ! ",displayWidth/2-130,displayHeight/2+80);

        })
     })
         
}
}