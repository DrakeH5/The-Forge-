var rotate = 1;
var Weapon = function(width,height,type,img,weilder,follow){
  this.width = width;
  this.height = height;
  this.type = type;
  this.img = img;
  this.weilder = weilder;
  this.follow = follow;
  this.update = function() {
    //draw weapon
    ctx.save(); //Save transformations.

    //Translate, rotate.
  ctx.translate((this.weilder.size/2)+this.weilder.x,(this.weilder.size/2)+this.weilder.y);
  ctx.rotate(rotate*Math.PI/180);
  ctx.translate(-((this.weilder.size/2)+this.weilder.x),-((this.weilder.size/2)+this.weilder.y));
    ctx.drawImage(this.img,(this.weilder.size/2)+this.weilder.x,(this.weilder.size/2)+this.weilder.y,this.width,this.height);
    ctx.restore();
  };
}


function getMousePos(canvas, evt) {
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left,
     y: evt.clientY - rect.top
   };
 }
 canvas.addEventListener('mousemove', function(evt) {
   var mouse = getMousePos(canvas, evt);
   let radian = Math.atan2(player.x - mouse.x, mouse.y - player.y);
   rotate = radian * (180 / Math.PI);
 }, false);
