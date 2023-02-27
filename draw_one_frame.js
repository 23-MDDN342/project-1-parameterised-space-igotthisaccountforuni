var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  background(255);
  x+=2;
  y+=2;
	a-=2;
	b-=2;
	strokeWeight(1);
  translate(width/2, height/2);
  for(var i=0;i<15;i++){
	  for(var k=0;k<20;k++){
		stroke(255,255,255);
    rotate(PI / 12.0);
	  fill(235);
  	line(a%100,b%100,x%300,y%300);
	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
		rect(x%width, y%height, k+10, k+10);
		fill(i*10);
		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
		rotate(PI / 24.0);
		fill(255-(i+k)*5);
		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
		rect(a%width, b%height, k+5, k+5);
		drawflower(k,x);
	  }
  }

}

function drawtriangle(x,y,r){
	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
}

function drawflower(i,k){
		if(i%2==1){
			fill((k*0.4)%255);
			stroke(k%255);
			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
		}
		else{
			fill(k%255);
			stroke((k*0.4)%255);
			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		}
}
