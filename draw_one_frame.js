function draw_one_frame(cur_frac) {
	// chopping board colour fill(235, 154, 90);
	background(235, 154, 90)
	noStroke();
	fill(180);
	rect(0, height * 0.4, width, 0.3*height )

	let grid_points = [
	  0.0 * width,
	  0.20 * width,
	  0.40 * width,
		0.60 * width,
	  0.80 * width,
	  1.00 * width,
		1.20 * width
	]

	if (debugView) {
	  strokeWeight(1);
	  stroke(255, 0, 0);
	  for(let i=0; i<grid_points.length; i++) {
		line(0, grid_points[i], width, grid_points[i]);
	  }
	}

	for(let i=0; i<grid_points.length-1; i++) { 																//conveyer belt + plates
	  let curGridPos = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
		strokeWeight(0.2);
		stroke(0);
		line(curGridPos, 0.4 * height , curGridPos, 0.7 * height);
		fill(240);
		noStroke();
		ellipse(curGridPos - 95 , 0.55 * height, 150, 150);
		fill(235);
		ellipse(curGridPos - 95 , 0.55 * height, 130, 130);
	}
}
