function draw_one_frame(cur_frac) {
	background(150);
	let conveyerWidths = [
	  0,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
		1.20 * width
	]

	let conveyerHeights = [
	  0,
	  0.20 * height,
	  0.40 * height,
		0.60 * height,
	  0.80 * height,
	  1.00 * height,
		1.20 * height
	]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		stroke(0);
		fill(180);
		for(let i = 0 ; i < conveyerWidths.length-1 ; i++) { 												//conveyers
			rect(conveyerWidths[i], 0, width * 0.1, height);
		}
		for (var i = 0 ; i < conveyerWidths.length-1 ; i++) {
			let curConveyerPos = map(cur_frac, 0, 1, 0, 0.2*height);
			for (var j = 0 ; j < conveyerWidths.length ; j++) {
				line(conveyerWidths[i], curConveyerPos + conveyerHeights[j], conveyerWidths[i] + width * 0.1 , curConveyerPos + conveyerHeights[j]);
			}
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		for(let i = 0 ; i<conveyerWidths.length-1 ; i++) { 													//inverse conveyers
			rect(conveyerWidths[i] + width * 0.1, 0, width * 0.1, height);
		}
		for (var i = 0 ; i < conveyerWidths.length-1 ; i++) {
			let curConveyerPos = map(cur_frac, 1, 0, 0, 0.2*height);
			for (var j = 0 ; j < conveyerWidths.length ; j++) {
				line(conveyerWidths[i] + width * 0.1, curConveyerPos + conveyerHeights[j], conveyerWidths[i] + width * 0.2 , curConveyerPos + conveyerHeights[j]);
			}
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		push();
		rectMode(CENTER);
		rect(width/2, height * 0.5, width, 0.3*height);															//main conveyer
		pop();
		for(let i = 0; i < conveyerWidths.length-1 ; i++) {
		  let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1]);
			stroke(0);
			line(curConveyerPos, 0.35 * height , curConveyerPos, 0.65 * height);
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		for(let i = 0; i < conveyerWidths.length-1 ; i++) {													//boxes
			let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1]);
			push();
			fill(242, 182, 92);
			stroke(189, 131, 45);
			rectMode(CENTER);
			rect(curConveyerPos - width * 0.1, height * 0.5, width * 0.1, width * 0.1);
			pop();
		}
		for(let i = 3; i < conveyerWidths.length-1 ; i++) {													//tape
			let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1]);
			push();
			fill(255);
			stroke(189, 131, 45);
			rectMode(CENTER);
			rect(curConveyerPos - width * 0.1, height * 0.5, width * 0.02, width * 0.1);
			fill(200, 30, 0);
			rect(curConveyerPos - width * 0.1, height * 0.46, width * 0.02, width * 0.02);
			rect(curConveyerPos - width * 0.1, height * 0.54, width * 0.02, width * 0.02);
			pop();
		}
		for(let i = 0; i < conveyerWidths.length-4 ; i++) {													//folds
			let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1]);
			push();
			fill(242, 182, 92);
			stroke(189, 131, 45);
			rectMode(CENTER);
			rect(curConveyerPos - width * 0.165, height * 0.5, width * 0.04, width * 0.1);
			rect(curConveyerPos - width * 0.035, height * 0.5, width * 0.04, width * 0.1);
			pop();
		}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		let swayPos;																																//sway thing
		stroke(0);
		if (cur_frac < 0.26) {
			swayPos = map(cur_frac, 0, 0.25, height / 2, height * 7/8 );
		}else if (cur_frac < 0.51) {
			swayPos = map(cur_frac, 0.26, 0.5, height * 7/8, height / 2);
		}else if (cur_frac < 0.76) {
			swayPos = map(cur_frac, 0.51, 0.75, height / 2, height / 8);
		}else {
			swayPos = map(cur_frac, 0.76, 1, height / 8, height / 2);
		}
		rectMode(CENTER);
		rect(width * 0.5, swayPos, width * 0.15, width * 0.15);
		rect(width/2, height/2, width * 0.05, height);
}
