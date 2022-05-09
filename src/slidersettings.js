function slidersettings()
{
  var gui;
  var me = this;
  var menu = [];
  var menuNames = ["Slider1",  "Slider2", "Slider3", "Slider4", "Slider5"]; 

  this.setup = function()
  {
    gui = createGui();

    setupHeaderButtons();          

    var xoffset = 30;
    var yoffset = 100;
    var xwidth = width-60;
    var spacer = 70;

    for(var i = 0;i < menuNames.length;i++) {
        menu[i] = createSlider(menuNames[i],xoffset,i*spacer +yoffset+20);
        menu[i].index = i;
        menu[i].w = xwidth;
        menu[i].h = 50;    
        menu[i].y = menu[i].y + offsetY;    
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
    

    gui.draw();
    
    push();
    showHeader(true);

    textAlign(LEFT);
    fill(0);
    textSize(20);
    text("BUTTON SETTINGS",30,80);

    pop();


    for(var i = 0;i < menuNames.length;i++) {
        if(menu[i].isChanged) {
            print("slider"+i+" = "+menu[i].val);
        }
    }
  }
  
 
}
