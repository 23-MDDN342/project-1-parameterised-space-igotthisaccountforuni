function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(235, 154, 90)
	noStroke();
	fill(180);
	rect(0, height * 0.4, width, 0.3*height )

	// console.log(width);

	let conveyerPoints = [
	  0.0 * width,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
		1.20 * width
	]

	// if (debugView) {
	//   strokeWeight(1);
	//   stroke(255, 0, 0);
	//   for(let i=0; i<conveyerPoints.length; i++) {
	// 	line(0, conveyerPoints[i], width, conveyerPoints[i]);
	//   }
	// }

	for(let i=0; i<conveyerPoints.length-1; i++) { 																//conveyer belt + plates
	  let curConveyerPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
		strokeWeight(0.2);
		stroke(0);
		line(curConveyerPos, 0.4 * height , curConveyerPos, 0.7 * height);
		fill(240);
		noStroke();
		ellipse(curConveyerPos - width / 10.1 , 0.55 * height, width / 6.4, width / 6.4);
		fill(235);
		ellipse(curConveyerPos - width / 10.1 , 0.55 * height, width / 7.4, width / 7.4);
	}

	for(let i=3; i<conveyerPoints.length-1; i++) { 																		//sushi
	  let curFoodPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
		strokeWeight(height/120);
		stroke(9, 82, 9);
		fill(240);
		ellipse(curFoodPos - width / 10.1, 0.55 * height, width / 19.2, width /19.2);
	}

	for(let i=2; i<conveyerPoints.length-1; i++) { 																		//wasabi
	  let curFoodPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
		strokeWeight(5);
		noStroke();
		fill(105, 166, 7);
		ellipse(curFoodPos - width/8, 0.625 * height, width / 38.4, width / 38.4);
	}

	for(let i=1; i<conveyerPoints.length-1; i++) { 																		//ginger
	  let curFoodPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
		strokeWeight(5);
		noStroke();
		fill(232, 158, 118);
		push();
		rectMode(CENTER);
		rect(curFoodPos - width/7.9, 0.475 * height, width / 38.4, width/48);
		pop();
	}

		fill(200);
		rect(width/18, 0, width / 20, 240);
		for(let i=0; i<conveyerPoints.length-2; i++) { 																//conveyer belt + plates
		  let curConveyerPos2 = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
			strokeWeight(0.2);
			stroke(0);
			line(width/17.5, curConveyerPos2/4, width/9.5, curConveyerPos2/4);
			noStroke();
			fill(232, 158, 118);
			rect(width/15, curConveyerPos2/4, width / 38.4, width/48);
		}
}
