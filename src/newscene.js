function newscene () {

    var gui;
    var capture;
    var cameraWidth = windowHeight/1.3*0.5625;
    var cameraHeight = windowHeight/1.38;
    var cb;
    
 this.setup = function() {
    
    gui = createGui();

    setupHeaderButtons();

    createCanvas(cameraWidth, cameraHeight);
    capture = createCapture(VIDEO);
    capture.hide();

    var buttonstyleSet= {
        "font": 'gotham',
        "textSize": 12,
        "rounding": 20,
        "strokeWeight": 1,
        "fillBg": color(0, 0, 150),
        "fillBgHover": color(0, 0, 70),
        "fillLabelHover" : color(255),
        "fillLabel" : color(255),
        "strokeBg" : color(255),
        "strokeBgHover" : color(255),
        "fillBgActive" : color(0, 0, 230)
    }

    setButton = createButton("Capture image", 80, height - 70);
    setButton.w = width - 150;
    setButton.h = 50;
    setButton.setStyle(buttonstyleSet);      
    
    cb = createCheckbox("Checkbox", 20, height - 70, 50, 50);
    cb.setStyle({
        "fillBg": color(0, 0, 150),
        "rounding" : 20,
        "fillBgHover": color(0, 0, 70),
        "fillBgActive" : color(0, 0, 230)
    });
    }

    this.enter = function()
    {   
        gui.show();
    }

    this.exit = function()
    {
        gui.hide();
    }

    this.draw = function()
    {
    
        background('#aaaaaa');
       
        
        push();
        showHeader(true);
    
        textAlign(LEFT);
        fill(0);
        textSize(22);
        text("CAMERA",30,100);
        gui.draw();
        pop();
    
        if (capture.loadedmetadata) {
            var c = capture.get(200, 50, cameraWidth - 40, cameraHeight - 200);
            image(c, 20, 120);
        
            loadPixels();
            updatePixels();
        }

        if (cb.val){
            // fill(255, 0, 0);
            // ellipse(200, 300, 100);
            //background(0)

            for (var i = 0; i < cameraWidth; i += 8) {
                for(var j = 0; j < cameraHeight; j += 8) {
                  fill(c.get(i - 20, j - 120));
                  noStroke();
                  push();
                  rectMode(CENTER);
                  rect(i, j, 8, 8);
                  pop();
                }
              }
        }

    }   
}

