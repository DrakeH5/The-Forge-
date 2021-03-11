var Enemy = function(x,y,width,height,img,speed,health) {
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
 this.img = img;
 this.speed = speed;
 this.health = health;


 ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}
