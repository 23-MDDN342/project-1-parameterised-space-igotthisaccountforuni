function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(150);
	stroke(0);
	fill(180);
	// console.log(width);

	// if (debugView) {
		//   strokeWeight(1);
		//   stroke(255, 0, 0);
		//   for(let i=0; i<conveyerWidths.length; i++) {
			// 	line(0, conveyerWidths[i], width, conveyerWidths[i]);
			//   }
			// }

	let conveyerWidths = [
	  0,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
	]

	let conveyerHeights = [
	  0,
	  0.20 * height,
	  0.40 * height,
		0.60 * height,
	  0.80 * height,
	  1.00 * height
	]

		stroke(0);
		fill(180);
		for(let i=0; i<conveyerWidths.length-1; i++) { 																//conveyers
			rect(conveyerWidths[i], 0, width * 0.1, height);
		}

		for (var i = 0; i < conveyerWidths.length-1; i++) {
			let curConveyerPos2 = map(cur_frac, 0, 1, 0, 0.2*height);
			for (var j = 0; j < conveyerWidths.length; j++) {
				line(conveyerWidths[i], curConveyerPos2 + conveyerHeights[j], conveyerWidths[i] + width * 0.1 , curConveyerPos2 + conveyerHeights[j]);
			}
		}

		for(let i=0; i<conveyerWidths.length-1; i++) { 																//inverse conveyers
			rect(conveyerWidths[i] + width * 0.1, 0, width * 0.1, height);
		}

		for (var i = 0; i < conveyerWidths.length-1; i++) {
			let curConveyerPos2 = map(cur_frac, 1, 0, 0, 0.2*height);
			for (var j = 0; j < conveyerWidths.length; j++) {
				line(conveyerWidths[i] + width * 0.1, curConveyerPos2 + conveyerHeights[j], conveyerWidths[i] + width * 0.2 , curConveyerPos2 + conveyerHeights[j]);
			}
		}


		rect(0, height * 0.4, width, 0.3*height )																//main conveyer
		for(let i=0; i<conveyerWidths.length-1; i++) {
		  let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i+1])
			stroke(0);
			line(curConveyerPos, 0.4 * height , curConveyerPos, 0.7 * height);
		}

		// let swayPos																															//sway thing
		// if (cur_frac < 0.51) {
		// 	swayPos = map(cur_frac, 0, 0.5, height/5, height*4/5 );
		// }else{
		// 	swayPos = map(cur_frac, 0.51, 1, height*4/5, height/5);
		// }
		// rectMode(CENTER);
		// rect(width * 0.7, swayPos, 50, 50);
}
