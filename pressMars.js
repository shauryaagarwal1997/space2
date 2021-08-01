class pressMars{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    nMar=createButton('INTERESTING FACTS =>'); 
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
    
    butMar.mousePressed(()=>{
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
        text("MARS",displayWidth/2-130,displayHeight/2-385)

        marPlanet=createSprite(displayWidth/2-600,displayHeight/2-30,10,10);
        marPlanet.addImage(marPlaneti);
        marPlanet.scale=3.4; 

        butback=createButton('BACK');
        butback.position(displayWidth-(displayWidth-50),displayHeight-(displayHeight-50))
        butback.style('background','cream')
        butback.size(150,50);

        butback.mousePressed(()=>{
            butback.hide();
            nMar.hide();
            background(sky1);
            appState=1;
            nMar.hide();
            marPlanet.velocityX=100000;
            displayMercury1=new pressMars();
            displayVenus1=new pressMars();
            displayEarth1=new pressMars();
            displayJupiter1=new pressMars();
            displaysaturn1=new pressMars();
            displayUranus1=new pressMars();
            displayNeptune1=new pressMars();
            })

        fill("lightgreen");
        rectMode(CENTER);
        rect(displayWidth/2+70,displayHeight/2-30,1400,500);
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
        text("1.5 AU (228 million km)",displayWidth/2+390,displayHeight/2-175);
        fill("purple");
        text("1 day 0 hours 37 minutes",displayWidth/2+160,displayHeight/2-125);
        fill("blue");
        text("687 days",displayWidth/2+160,displayHeight/2-75);
        fill("purple");
        text("Rocky / terrestrial",displayWidth/2+130,displayHeight/2-25);
        fill("blue");
        text("2 (two)",displayWidth/2+210,displayHeight/2+25);
        fill("blue");
        text("22° Celcius              80° Celcius",displayWidth/2+210,displayHeight/2+75);
        fill("purple");
        text("5.03 km/s",displayWidth/2+180,displayHeight/2+125);
        fill("blue");
        text("The Red Planet",displayWidth/2+100,displayHeight/2+175);

        nMar.position(displayWidth-310,displayHeight-220)
        nMar.style('background','cream');
        nMar.size(280,50);

        nMar.mousePressed(()=>{
            background(sky1);

            nMar.hide();
            textSize(40);
            fill("red");
            stroke("black")
            strokeWeight(7)
            text("MARS",displayWidth/2-130,displayHeight/2-385)

            fill("blue");
            rectMode(CENTER);
            rect(displayWidth/2+350,displayHeight/2-60,1000,400);

            textSize(40);
            stroke("red");
            strokeWeight(2);
            fill("white");
            text("INTERESTING FACTS",displayWidth/2+130,displayHeight/2-190);
            textSize(35)
            fill("yellow");
            text("1. Sunset on Mars is BLUE in colour.  ",displayWidth/2-90,displayHeight/2-120);
            text("2. The highest volcanoes in the solar system are on Mars, ",displayWidth/2-90,displayHeight/2-70);
            text("named Mars Olympus Mons. Their height is 22 kms.. This is  ",displayWidth/2-90,displayHeight/2-20);
            text("three times higher than Mt. Everest !",displayWidth/2-90,displayHeight/2+30);
        })
     })
     
}
}