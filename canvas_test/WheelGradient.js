function WheelGradient(ctx,center){
	this.ctx = ctx;
	this.center = center;
	this.start = 0;
	this.angle = 0;
	this.end = Math.PI;
	this.init();
}

WheelGradient.prototype = {
	init:function(){
		this.offset = Math.PI *(360/WheelGradient.options.num)/180;
		this.rotateAngle = this.offset / WheelGradient.options.part;
		this.drawCircle();
	},
	render:function(){
		this.drawGreen();
		this.drawCircle();
	},
	drawGreen:function(){
		for (var i = 0; i < WheelGradient.options.num; i++) {
			ctx.beginPath();
			var wheelGradient = ctx.createRadialGradient(this.center.x , this.center.y,100, this.center.x , this.center.y, 0);
			wheelGradient.addColorStop(0,WheelGradient.options.color[i]);
			wheelGradient.addColorStop(1, "#000");
			ctx.fillStyle = wheelGradient;
			var point = {x: this.center.x + Math.cos(this.offset * i + this.angle) * WheelGradient.options.radius, y: this.center.y +
              Math.sin(this.offset * i + this.angle) * WheelGradient.options.radius};
              var startAngle = this.start + this.offset * i;
              var endAngle = this.end + this.offset * i;
              ctx.arc(point.x, point.y, WheelGradient.options.wheelRadius, startAngle, endAngle, false);
              ctx.fill();
              ctx.closePath();
			}
	},
	drawCircle:function(){
		ctx.beginPath();
		 var dotGradient = ctx.createRadialGradient(this.center.x, this.center.y, 0, this.center.x, this.center.y, 40);
		 dotGradient.addColorStop(0, "#fff");
		 dotGradient.addColorStop(1, "#666");
		 ctx.fillStyle = dotGradient;
		 ctx.arc(this.center.x, this.center.y, 25, 0, 2 * Math.PI, false);
		 ctx.fill();
		 ctx.closePath();
		 this.angle += this.rotateAngle;
   		 this.start = this.angle;
   		 this.end = Math.PI + this.angle;
	}
}

WheelGradient.options = {
	num:4,
	color:['red','yellow','blue','green'],
	radius:50,
	wheelRadius:50,
	part: 50
}