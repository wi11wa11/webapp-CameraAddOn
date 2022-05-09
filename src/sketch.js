
var offsetY = 0;
var mgr;
var buttonstyleMenu;
var input;
var dataLoaded = false;
var menuLoaded = false;
var storyData = {}; 
var stories = []; 
var data;
var timer = {secs:0,minutes:0,raw:0};
var colorWheel;
var fontGotham;
var fontApercu;
var menuimg;
var backimg;

function touchMoved() {
  return false;
}

function mouseWheel(event) {
  offsetY -= event.delta*3;
  if(offsetY > 0) offsetY = 0;
}

function mouseDragged() {
  offsetY -= (-mouseY +pmouseY);
  if(offsetY > 0) offsetY = 0;
}

function windowResized() {
    // keep a 16:9 portrait format
    if(windowWidth<windowHeight){
        resizeCanvas(windowWidth,windowHeight);
    } else {
        resizeCanvas( (windowHeight/1.3)*0.5625, windowHeight/1.38);
    }

}

  // Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {  
  colorWheel = loadImage("./assets/palette.png");
  fontGotham = loadFont("./assets/gotham.otf");
  fontApercu = loadFont("./assets/Apercu.otf");
  backimg = loadImage("./assets/back.jpg");
  menuimg = loadImage("./assets/menu.jpg");
}

function setupHeaderButtons() {
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
      mgr.showScene(mainmenu);
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
}

function showHeader(showbuttons) {

  translate(0,offsetY);

  textFont(fontGotham);
  textAlign(CENTER);

  // header menu

  fill(255);
  noStroke();
  rect(0,0,width,50);    
  if(showbuttons) {
  image(backimg,0,0);
  }

  textSize(14);
  fill(0);
  text("MYAPP",width/2, 30);

  if(showbuttons) {
  fill(255);
  image(menuimg,width-50,0);
  }
  // end header menu

  

}

function setup() {

	// keep a 16:9 portrait format
	if(windowWidth<windowHeight){
		createCanvas(windowWidth,windowHeight,P2D);
	} else {
		createCanvas( (windowHeight/1.3)*0.5625, windowHeight/1.38,P2D);
  }

  mgr = new SceneManager();
  mgr.wire();
  mgr.addScene(mainmenu);
  mgr.addScene(slidersettings);
  mgr.addScene(buttonsettings);
  mgr.addScene(colourcontrol);
  mgr.addScene(newscene);
  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}





