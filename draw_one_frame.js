function draw_one_frame(cur_frac) {
	let sun_size = canvasHeight/8;
  
	noStroke();
	fill(100, 100, 214);
	rect(0, 0, width, height);
  
	fill(0, 200, 0);
	rect(0, height/3, width, height*2/3);
  
	stroke(0);
	line(width/2, 0, width/2, height/2);
	line(0.30*width, 0, 0.10*width, height/2);
	line(0.70*width, 0, 0.90*width, height/2);
  
	strokeWeight(10);
	let grid_points = [
	  0.0 * height,
	  0.10 * height,
	  0.20 * height,
	  0.30 * height,
	  0.40 * height,
	  0.50 * height,
	]
  
	if (debugView) {
	  strokeWeight(1);
	  stroke(255, 0, 0);
	  for(let i=0; i<grid_points.length; i++) {
		line(0, grid_points[i], width, grid_points[i]);
	  }
	}
  
	strokeWeight(2);
	stroke(0);
	for(let i=0; i<grid_points.length-1; i++) {
	  let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
	  line(0, cur_grid_line, width, cur_grid_line);
	}
  }