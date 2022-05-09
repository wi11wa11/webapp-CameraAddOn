//const { LINE_LOOP } = require("./libraries/p5");

function colourcontrol()
{
  var gui;
  var me = this;
  var backButton;
  var menuButton;
  var setButton;
  var allButton;
  var toggles = [];
  var rowSize = 3;
  var curColour = color(0);
  var greyColour = color(0);
  var guiVisible = 0; 
  var paletteX = 20;
  var paletteY = 150;
  var paletteOffset = 287;
  var cpx = paletteX;
  var cpy = paletteY; 
  var cpx2 = paletteX+paletteOffset;
  var cpy2 = paletteY +158;

  this.setup = function()
  {
    gui = createGui();

    // header menu
    var buttonstyleBack = {
        "rounding": 0,
        "strokeWeight": 0,
        "fillBg": color(255,255,255,0),
        "fillBgHover": color(255,255,255,0),
        "fillLabelHover" : color(255,255,255,0)
    }
    backButton = createButton("", 0, 0);
    backButton.w = 50;
    backButton.h = 50;
    backButton.setStyle(buttonstyleBack);
    backButton.onPress = function() {
        me.sceneManager.showScene(mainmenu);
    }  
    
    menuButton = createButton("", width-50, 0);
    menuButton.w = 50;
    menuButton.h = 50;
    menuButton.setStyle(buttonstyleBack);
    menuButton.onPress = function() {
        var url = "../app/index.html";
        window.location.replace(url)
    }
    // end header menu

    var buttonstyleSet= {
        "font": 'gotham',
        "textSize": 12,
        "rounding": 0,
        "strokeWeight": 1,
        "fillBg": color(0),
        "fillBgHover": color(0),
        "fillLabelHover" : color(255),
        "fillLabel" : color(255),
        "strokeBg" : color(255),
        "strokeBgHover" : color(255)
    }

    setButton = createButton("Set Colour",  20, height-110);
    setButton.w = width-50;
    setButton.h = 50;
    setButton.setStyle(buttonstyleSet);      
         
  }

  function checkColour() 
  {
    var cx = paletteX;
    var cy = paletteY;
    var cw = 276;
    var ch = 158;
    if((mouseX >= cx) && (mouseX <= cx+cw)) {
      if((mouseY >= cy) && (mouseY <= cy+ch)) {
        curColour = colorWheel.get(mouseX-cx, mouseY-cy);
        cpx = mouseX;
        cpy = mouseY;          
      }
    }    
  }

  function checkGreyscale() 
  {
    var cx = paletteX+paletteOffset;
    var cy = paletteY;
    var cw = 33;
    var ch = 158;
    if((mouseX >= cx) && (mouseX <= cx+cw)) {
      if((mouseY >= cy) && (mouseY <= cy+ch)) {
        greyColour = colorWheel.get(mouseX-cx+paletteOffset, mouseY-cy);
        cpx2 = mouseX;
        cpy2 = mouseY;          
      }
    }    
  }

  function drawColourPalette()
  {

    fill(255);
    image(colorWheel, paletteX, paletteY);

    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(cpx,cpy,20,20);

    fill(255);
    stroke(0);
    strokeWeight(3);
    line(paletteX+paletteOffset, cpy2, paletteX+paletteOffset+33, cpy2);
    ellipse(paletteX+paletteOffset,cpy2,10,10);


    fill(255);
  }
  
  
  this.enter = function()
  {  
    gui.show();
    guiVisible = true;
    curColour = color(0,0,0);
  }

  this.exit = function()
  {
    gui.hide();
    guiVisible = false;
  }

  this.draw = function()
  {
    background('#bfbfbf');

    textFont(fontGotham);
    textAlign(CENTER);

    // header menu
    fill(255);
    noStroke();
    rect(0,0,width,50);    
    image(backimg,0,0);

    textSize(14);
    fill(0);
    text("ADMIN",width/2, 30);

    fill(255);
    image(menuimg,width-50,0);
    // end header menu

    textAlign(LEFT);
    fill(0);


    drawColourPalette();

    gui.draw();



    if(setButton.isPressed) {
 
    }

    // colour square for visual feedback
    noStroke();
    fill(curColour);
    rect(paletteX,paletteY+165,50,50);
    fill(greyColour);
    rect(paletteX + 60,paletteY+165,50,50);


  }

  this.touchEnded = function() 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale();
    }
  }

  this.touchMoved = function() 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }
  }

  this.mouseDragged = function(args) 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }  
  }

  this.mousePressed = function()
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }  
  }
 
}
