/**
 * @description canvas，饼图-扇形图
 * @autor POST-AND-GET
 * @date 2014-12-08
 * @version 1.0
 */

    CanvasRenderingContext2D.prototype.sector = function sector(x, y, radius, sDeg, eDeg,color) {
    Angle = Math.PI/180;
    this.beginPath();
    this.moveTo(0, 0);
    this.arc(0, 0, radius, sDeg*Angle, eDeg*Angle);
    this.closePath();
    this.fillStyle = color;
    this.fill();
    return this;
};

function pie(id,x,y,R,P){
    var cvs = document.getElementById(id);
    var ctx = cvs.getContext('2d');
    ctx.translate(x, y);
    for (var i = 0; i < P.length; i++) {
        ctx.sector(x,y,R,P[i].s,P[i].e,P[i].c);
    }
}
