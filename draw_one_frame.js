function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(220)
	stroke(0);
	fill(180);
	text('I have changed my idea', 10, 30)

	// console.log(width);

	let conveyerPoints = [
	  0.0 * width,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width
	]


	// if (debugView) {
	//   strokeWeight(1);
	//   stroke(255, 0, 0);
	//   for(let i=0; i<conveyerPoints.length; i++) {
	// 	line(0, conveyerPoints[i], width, conveyerPoints[i]);
	//   }
	// }

		for (var i = 0; i < conveyerPoints.length; i++) {
			fill(180);
			rect(width* 0.45, 0, width * 0.1, height*4/9);
			for(let i=0; i<conveyerPoints.length-2; i++) { 																//ginger conveyer
				let curConveyerPos2 = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
				stroke(0);
				line(width * 0.45, curConveyerPos2/4, width * 0.55 , curConveyerPos2/4);
			}
		}


		rect(0, height * 0.4, width, 0.3*height )
		for(let i=0; i<conveyerPoints.length-1; i++) { 																//conveyer belt + plates
		  let curConveyerPos = map(cur_frac, 0, 1, conveyerPoints[i], conveyerPoints[i+1])
			strokeWeight(0.5);
			stroke(0);
			line(curConveyerPos, 0.4 * height , curConveyerPos, 0.7 * height);
		}
		// let swayPos
		// if (cur_frac < 0.51) {
		// 	swayPos = map(cur_frac, 0, 0.5, height/5, height*4/5 );
		// }else{
		// 	swayPos = map(cur_frac, 0.51, 1, height*4/5, height/5);
		// }
		// rectMode(CENTER);
		// rect(width * 0.7, swayPos, 50, 50);
}
