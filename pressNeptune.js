class pressNeptune{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nNep=createButton('INTERESTING FACTS =>')

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
    
    butNep.mousePressed(()=>{
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
        text("NEPTUNE",displayWidth/2-130,displayHeight/2-385)

        nepPlanet=createSprite(displayWidth/2-565,displayHeight/2-20,10,10);
        nepPlanet.addImage(nepPlaneti);
        nepPlanet.scale=3; 

        butback=createButton('BACK');
        butback.position(displayWidth-(displayWidth-50),displayHeight-(displayHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nNep.hide();
            background(sky1);
            appState=1;
            nepPlanet.velocityX=100000;
            displayNeptune1=new pressNeptune();
            displayMercury1=new pressVenus();
            displayVenus1=new pressEarth();
            displayEarth1=new pressMars();
            displayMars1=new pressJupiter();
            displayJupiter1=new pressSaturn();
            displaysaturn1=new pressUranus();
            displayUranus1=new pressNeptune();
            
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
        text("30 AU (4.5 billion km)",displayWidth/2+390,displayHeight/2-175);
        fill("purple");
        text("16 hours",displayWidth/2+160,displayHeight/2-125);
        fill("blue");
        text("165 years",displayWidth/2+160,displayHeight/2-75);
        fill("purple");
        text("Gas Giant",displayWidth/2+130,displayHeight/2-25);
        fill("blue");
        text("Fourteen (14)",displayWidth/2+210,displayHeight/2+25);
        fill("blue");
        text("-200° Celcius",displayWidth/2+270,displayHeight/2+75);
        fill("purple");
        text("23.5 km/s",displayWidth/2+180,displayHeight/2+125);
        fill("blue");
        text("Big Blue Planet",displayWidth/2+100,displayHeight/2+175);

        nNep.position(displayWidth-310,displayHeight-220)
        nNep.style('background','cream');
        nNep.size(280,50);

        nNep.mousePressed(()=>{
            background(sky1);

            nNep.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("NEPTUNE",displayWidth/2-130,displayHeight/2-385)

            fill("red");
            rectMode(CENTER);
            rect(displayWidth/2+100,displayHeight/2-30,1400,350);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACT",displayWidth/2+130,displayHeight/2-140);
            textSize(35)
            fill("yellow");
            text("Neptune is the coldest planet and the planet with ",displayWidth/2-130,displayHeight/2-70);
            text("the highest wind speed in the Solar System, with upto",displayWidth/2-130,displayHeight/2-20);
            text("2,100 km/hr.",displayWidth/2-130,displayHeight/2+30);
        })
    })
     
}
}