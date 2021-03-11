var playerXvelocity = 0;
var playerYvelocity = 0;

localStorage.mapload = false;

var playermoveup = true;
var playermovedown = true;
var playermoveleft = true;
var playermoveright = true;
$(document.body).keydown(function (evt) {
  if(localStorage.mapload=="true") {
    if(evt.keyCode==87&&playermoveup==true){ //up
      player.y-=player.speed;
      playerYvelocity = -player.speed;
      camera_y+=player.speed;
    }
    if(evt.keyCode==83&&playermovedown==true){ //down
      player.y+=player.speed;
      playerYvelocity = player.speed;
      camera_y-=player.speed;
    }
    if(evt.keyCode==65&&playermoveleft==true){ //left
      player.x-=player.speed;
      playerXvelocity = -player.speed;
      camera_x+=player.speed;
    }
    if(evt.keyCode==68&&playermoveright==true){ //right
      player.x+=player.speed;
      playerXvelocity = player.speed;
      camera_x-=player.speed;
    }
    //player.update();
    localStorage.mapload = false;
    playermoveup = true;
    playermovedown = true;
    playermoveleft = true;
    playermoveright = true;
  }
});





/* var goleft=false;
var goright=false;
var goup=false;
var godown=false;
var coliding=false;

playerXvelocity = 0;
playerYvelocity = 0;
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var keyCode = evt.keyCode || evt.which;
  if (keyCode == 65) { //left
    goleft=true;
  }
  if (keyCode == 68) { //right
    goright=true;
  }
  if (keyCode == 87) { //up
    goup=true;
  }
  if (keyCode == 83) { //down
    godown=true;
  }
};
document.onkeyup = function(evt) {
  evt = evt || window.event;
  var keyCode = evt.keyCode || evt.which;
  if (keyCode == 65) { //left
    goleft=false;
  }
  if (keyCode == 68) { //right
    goright=false;
  }
  if (keyCode == 87) { //up
    goup=false;
  }
  if (keyCode == 83) { //down
    godown=false;
  }
};

setInterval(function(){
  if(player.x < 0){goleft=false;}
  if(player.x+player.size > canvas.width){goright=false;}
  if(player.y < 0){goup=false;}
  if(player.y+player.size > canvas.height){godown=false;}
  if(coliding==false) {
    if(goleft==true) {
      player.x -= player.speed;
      playerXvelocity = -player.speed;
      camera_x+=player.speed;
    } else if(goright==true) {
      player.x += player.speed;
      playerXvelocity = player.speed;
      camera_x-=player.speed;
    }
    if(goup==true) {
      player.y -= player.speed;
      playerYvelocity = -player.speed;
      camera_y+=player.speed;
    } else if(godown==true) {
      player.y += player.speed;
      playerYvelocity = player.speed;
      camera_y-=player.speed;
    }
  }
},10)
*/
