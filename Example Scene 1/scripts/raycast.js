localStorage.intersecting = "";
function raycast(x1,y1,x2,y2) {
  localStorage.intersecting = "";

  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();

  return localStorage.intersecting;

  ctx.beginPath();
  ctx.moveTo(-100,-100);
  ctx.lineTo(-100,-100);
  ctx.stroke();
}
