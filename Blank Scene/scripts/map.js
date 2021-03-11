var map = [
"1111111111111111111111",
"1111111111111111111111",
"1       1            1",
"1                    1",
"1       1            1",
"1                1   1",
"1        1   !       1",
"11111111111111111111111"
]

const objects = {
  1 : document.getElementById("img"),
}


function drawMap() {
var y=0;
map.forEach(createObject);
function createObject(value,index,array) {
  var i = 1;
  var height = canvas.height/map.length;
  if((y*height>camera_y)+height&&y*height<camera_y+canvas.height*zoomY) { //only draw bloxes that are in view on Y axis
    while(value.length+1>i) {
      var width = canvas.width/value.length;
      if(((i-1)*width>camera_x)+width&&(i-1)*width<camera_x+canvas.width*zoomX) { //only draw bloxes that are in view on X axis
        //if(value.slice(i-1,i) == 1) {
        var holder_key = value.slice(i-1,i);
          for (let [key, value] of Object.entries(objects)) {
          if(holder_key == key) {
          new Wall((i-1)*width,y*height,width,height,value);

          /*  ctx.drawImage(document.getElementById("img"),(i-1)*width,y*height,width,height);


          if(player.y-player.speed<(y*height)+height&&player.y+player.size>(y*height)&&player.x+player.size>((i-1)*width)&&player.x<((i-1)*width)+width) {
            playermoveup = false;
          }
          if((player.y+player.size)+player.speed>(y*height)&&player.y<(y*height)+height&&player.x+player.size>((i-1)*width)&&player.x<((i-1)*width)+width) {
            playermovedown = false;
          }
          if(player.x-player.speed<((i-1)*width)+width&&player.x+player.size>((i-1)*width)&&player.y+player.size>(y*height)&&player.y<(y*height)+height) {
            playermoveleft = false;
          }
          if((player.x+player.size)+player.speed>((i-1)*width)&&player.x<((i-1)*width)+width&&player.y+player.size>(y*height)&&player.y<(y*height)+height) {
            playermoveright = false;
          }

          localStorage.mapload = true; */

          }
          }
        }
        /*if(value.slice(i-1,i) == "!") {
          new Enemy((i-1)*width,y*height,width,height,document.getElementById("img"),1,3);
        }*/
        i+=1;
      }
  }
  y+= 1;
}
}


var Wall = function(x,y,width,height,img) {
  ctx.drawImage(img,x,y,width,height);


if(player.y-player.speed<y+height&&player.y+player.size>y&&player.x+player.size>x&&player.x<x+width) {
  playermoveup = false;
}
if((player.y+player.size)+player.speed>y&&player.y<y+height&&player.x+player.size>x&&player.x<x+width) {
  playermovedown = false;
}
if(player.x-player.speed<x+width&&player.x+player.size>x&&player.y+player.size>y&&player.y<y+height) {
  playermoveleft = false;
}
if((player.x+player.size)+player.speed>x&&player.x<x+width&&player.y+player.size>y&&player.y<y+height) {
  playermoveright = false;
}

localStorage.mapload = true;

}
