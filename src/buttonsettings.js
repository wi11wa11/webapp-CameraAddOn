function buttonsettings()
{
  var gui;
  var me = this;
  var menu = [];
  var menuNames = ["Button1",  "Button2", "Button3", "Button4", "Button5"]; 

  this.setup = function()
  {
    gui = createGui();

    setupHeaderButtons();    
    
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

    if(!menuLoaded) {      
 


        var buttonstyleEvent = {
            "font": 'gotham',
            "textSize": 12,
            "rounding": 0,
            "strokeWeight": 1,
            "fillBg": color('#4d4d4d'),
            "fillBgHover": color('#4d4d4d'),
            "fillLabelHover" : color(255),
            "fillLabel" : color(255)
        }

        var xoffset = 30;
        var yoffset = 100;
        var xwidth = width-60;
        var spacer = 70;

        for(var i = 0;i < menuNames.length;i++) {
            menu[i] = createButton(menuNames[i],xoffset,i*spacer +yoffset+20);
            menu[i].index = i;
            menu[i].w = xwidth;
            menu[i].h = 50;
            menu[i].setStyle(buttonstyleEvent);
            menu[i].onPress = function() 
            {        
 
            }     

            menu[i].y = menu[i].y + offsetY;    
          }         
        
        menuLoaded = true;
    }
    

    gui.draw();
    
    push();
    showHeader(true);

    textAlign(LEFT);
    fill(0);
    textSize(20);
    text("BUTTON SETTINGS",30,80);

    pop();
  }
  
 
}
