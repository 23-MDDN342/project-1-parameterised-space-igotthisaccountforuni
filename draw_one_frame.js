function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(235, 154, 90)
	noStroke();
	fill(180);
	rect(0, height * 0.4, width, 0.3*height )

	let conveyerPoints = [
	  0.0 * width,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
		1.20 * width
	]
	let foodPoints = [
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
		1.20 * width
	]

	if (debugView) {
	  strokeWeight(1);
	  stroke(255, 0, 0);
	  for(let i=0; i<conveyerPoints.length; i++) {
		line(0, conveyerPoints[i], width, conveyerPoints[i]);
	  }
	}

	for(let i=0; i<conveyerPoints.length-1; i++) { 																//conveyer belt + plates
	  let curConveyerPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
		strokeWeight(0.2);
		stroke(0);
		line(curConveyerPos, 0.4 * height , curConveyerPos, 0.7 * height);
		fill(240);
		noStroke();
		ellipse(curConveyerPos - 95 , 0.55 * height, 150, 150);
		fill(235);
		ellipse(curConveyerPos - 95 , 0.55 * height, 130, 130);
	}

	for(let i=0; i<foodPoints.length-1; i++) { 																		//sushi
	  let curFoodPos = map(cur_frac, 0, 1, foodPoints[i], foodPoints[i+1])
		strokeWeight(5);
		stroke(9, 82, 9);
		fill(240);
		ellipse(curFoodPos - 95, 0.55 * height, 50, 50);
	}
}
