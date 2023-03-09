function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(150);
	stroke(0);
	fill(180);

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
		rect(width/2, height * 0.5, width, 0.3*height);																		//main conveyer
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
		for(let i = 0; i < conveyerWidths.length-4 ; i++) {													//boxes
			let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1]);
			push();
			fill(255);
			stroke(189, 131, 45);
			rectMode(CENTER);
			rect(curConveyerPos - width * 0.1, height * 0.5, width * 0.1, width * 0.1);
			pop();
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		let swayPos;																																//sway thing
		if (cur_frac < 0.26) {
			swayPos = map(cur_frac, 0, 0.25, height*2/4, height*3/4 );
		}else if (cur_frac < 0.51) {
			swayPos = map(cur_frac, 0.26, 0.5, height*3/4, height*2/4);
		}else if (cur_frac < 0.76) {
			swayPos = map(cur_frac, 0.51, 0.75, height*2/4, height/4);
		}else {
			swayPos = map(cur_frac, 0.76, 1, height/4, height*2/4);
		}

		rectMode(CENTER);
		rect(width * 0.5, swayPos, width * 0.15, width * 0.15);
}
