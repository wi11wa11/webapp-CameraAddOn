function mainmenu()
{
  var gui;
  var menu = [];
  var menuNames = ["Buttons", "Sliders", "Colour Control", "Camera"];
  var me = this;
  var backButton;
  var menuButton;

  this.setup = function()  
  {
    gui = createGui();

    showHeader(false);

    var buttonstyleMenu = {
        "font": 'gotham',
        "textSize": 12,
        "rounding": 0,
        "strokeWeight": 1,
        "fillBg": color('#4d4d4d'),
        "fillBgHover": color('#4d4d4d'),
        "fillLabel": color(255),
        "fillLabelHover" : color(255)
    }

    var xoffset = 30;
    var yoffset = 80;
    var offset = 120;
    var xwidth = width-60;

    for(var i = 0;i < menuNames.length;i++) {
      menu[i] = createButton(menuNames[i],xoffset,i*yoffset+offset);
      menu[i].index = i;
      menu[i].w = xwidth;
      menu[i].h = yoffset - 15;
      menu[i].setStyle(buttonstyleMenu);
  
      menu[i].onPress = function() 
      {
        if(this.index == 0) {
          me.sceneManager.showScene(buttonsettings);
        }
        if(this.index == 1) {
          me.sceneManager.showScene(slidersettings);
        }
        if(this.index == 2) {
          me.sceneManager.showScene(colourcontrol);
        } 
        if(this.index == 3) {
          me.sceneManager.showScene(newscene);
        }                   
      }      
    }
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
    showHeader(false);


    textAlign(LEFT);
    fill(0);
    textSize(22);
    text("SETTINGS",30,100);
    
    gui.draw();

    pop();

  }
 
}
