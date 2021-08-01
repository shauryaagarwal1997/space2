class pressSaturn{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nSat=createButton('INTERESTING FACTS =>')

    }
display(){
    butMer.position(displayWidth/2-250,displayHeight/2-400);
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
    
    butSat.mousePressed(()=>{
        butMer.hide();
        butVen.hide();
        butEar.hide();
        butMar.hide();
        butJup.hide();
        butSat.hide();
        butUra.hide();
        butNep.hide();
        venus.velocityY=-1000001;
        earth.velocityX=-1000010;
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
        text("SATURN",displayWidth/2-130,displayHeight/2-385)

        
        satPlanet=createSprite(displayWidth/2-565,displayHeight/2-20,10,10);
        satPlanet.addImage(satPlaneti);
        satPlanet.scale=3; 

        butback=createButton('BACK');
        butback.position(displayWidth-(displayWidth-50),displayHeight-(displayHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nSat.hide();
            background(sky1);
            appState=1;
            satPlanet.velocityX=100000;
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
        text("6. Average Temperature : ",displayWidth/2-90,displayHeight/2+75)
        text("7. Escape Velocity : ",displayWidth/2-90,displayHeight/2+125)
        text("8. Nickname : ",displayWidth/2-90,displayHeight/2+175)
        fill("blue");
        text("9.5 AU (1.4 billion km)",displayWidth/2+390,displayHeight/2-175);
        fill("purple");
        text("10.7 hours",displayWidth/2+160,displayHeight/2-125);
        fill("blue");
        text("29.4 years",displayWidth/2+160,displayHeight/2-75);
        fill("purple");
        text("Gas Giant",displayWidth/2+130,displayHeight/2-25);
        fill("blue");
        text("Eighty Two (82)",displayWidth/2+210,displayHeight/2+25);
        fill("blue");
        text("-178° Celcius",displayWidth/2+270,displayHeight/2+75);
        fill("purple");
        text("35.5 km/s",displayWidth/2+180,displayHeight/2+125);
        fill("blue");
        text("The Ringed Planet",displayWidth/2+100,displayHeight/2+175);

        nSat.position(displayWidth-310,displayHeight-220)
        nSat.style('background','cream');
        nSat.size(280,50);

        nSat.mousePressed(()=>{
            background(sky1);

            nSat.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("SATURN",displayWidth/2-130,displayHeight/2-385)

            fill("purple");
            rectMode(CENTER);
            rect(displayWidth/2+310,displayHeight/2-60,1100,400);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACTS",displayWidth/2+130,displayHeight/2-190);
            textSize(35)
            fill("yellow");
            text("1. Saturn's density is just 0.68 gram/cm cube. This means that ",displayWidth/2-130,displayHeight/2-120);
            text("it can float on water. ",displayWidth/2-130,displayHeight/2-70);
            text("2. Like Jupiter, Saturn does not have any solid surface ",displayWidth/2-130,displayHeight/2-20);
            text("to stand on.",displayWidth/2-130,displayHeight/2+30);
        })
     })
     
}
}