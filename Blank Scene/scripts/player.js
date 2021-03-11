var player_img = document.getElementById("player_img");

var Player = function(x,y,size,speed,weight){
  this.x = x;
  this.y = y;
  //player_x = x;
  //player_y = y;
  this.size = size;
  this.speed = speed;
  this.weight = weight;
  this.update = function() {

    if(playermovedown==true) { //dont move player down when theres a block beneath
      this.y+=gravity*this.weight; //moves player down acording to gravity and player weight
      camera_y-=gravity*this.weight;
    }

    //draw player
    ctx.drawImage(player_img,this.x,this.y,this.size,this.size);

  };
}
