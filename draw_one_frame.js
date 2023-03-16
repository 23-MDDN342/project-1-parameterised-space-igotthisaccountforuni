function draw_one_frame(cur_frac) {
  background(150);

  let conveyerWidths = [ //conveyer points
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

  let mainColour = color('#fcecd4'); //color('#ffb84d');												//colours and noise
  let backColour = color('#ffb84d'); //color('#fad59d');
  let noiseColour;
  let noise;

  let swayPos; //sway thing
  if (cur_frac < 0.26) {
    swayPos = map(cur_frac, 0, 0.25, height / 2, height * 7 / 8);
  } else if (cur_frac < 0.51) {
    swayPos = map(cur_frac, 0.26, 0.5, height * 7 / 8, height / 2);
  } else if (cur_frac < 0.76) {
    swayPos = map(cur_frac, 0.51, 0.75, height / 2, height / 8);
  } else {
    swayPos = map(cur_frac, 0.76, 1, height / 8, height / 2);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  stroke(0);
  fill(170);

  for (let i = 0; i < conveyerWidths.length - 1; i++) { 												//conveyers
    rect(conveyerWidths[i], 0, width * 0.1, height);
  }
  for (var i = 0; i < conveyerWidths.length - 1; i++) {
    let curConveyerPos = map(cur_frac, 0, 1, 0, 0.2 * height);
    noise = getNoiseValue(i, height, 1, "noise", 0, 1, 1);
    noiseColour = lerpColor(mainColour, backColour, noise);
    for (var j = 0; j < conveyerWidths.length; j++) {
      line(conveyerWidths[i], curConveyerPos + conveyerHeights[j], conveyerWidths[i] + width * 0.1, curConveyerPos + conveyerHeights[j]);
      push();
      rectMode(CENTER);
			fill(0, 0, 0, 100);
			noStroke();
			rect(conveyerWidths[i] + width * 0.055, curConveyerPos + conveyerHeights[j] - height * 0.29, width * 0.05, width * 0.05);

      fill(noiseColour);
      stroke(189, 131, 45);
      rect(conveyerWidths[i] + width * 0.05, curConveyerPos + conveyerHeights[j] - height * 0.3, width * 0.05, width * 0.05);

      fill(255); //taping
      stroke(189, 131, 45);
      rect(conveyerWidths[i] + width * 0.05, curConveyerPos + conveyerHeights[j] - height * 0.3, width * 0.05, width * 0.01);
      fill(200, 30, 0);
      rect(conveyerWidths[i] + width * 0.04, curConveyerPos + conveyerHeights[j] - height * 0.3, width * 0.01, width * 0.01);
      rect(conveyerWidths[i] + width * 0.06, curConveyerPos + conveyerHeights[j] - height * 0.3, width * 0.01, width * 0.01);
      pop();
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < conveyerWidths.length - 1; i++) { //inverse conveyers
    rect(conveyerWidths[i] + width * 0.1, 0, width * 0.1, height);
  }
  for (var i = 0; i < conveyerWidths.length - 1; i++) {
    let curConveyerPos = map(cur_frac, 1, 0, 0, 0.2 * height);
    noise = getNoiseValue(i, height, 1, "noise2", 0, 1, 1);
    noiseColour = lerpColor(mainColour, backColour, noise);
    for (var j = 0; j < conveyerWidths.length; j++) {
      line(conveyerWidths[i] + width * 0.1, curConveyerPos + conveyerHeights[j], conveyerWidths[i] + width * 0.2, curConveyerPos + conveyerHeights[j]);
      push();
      rectMode(CENTER);
			noStroke();
			fill(0, 0, 0, 100);
			rect(conveyerWidths[i] + width * 0.155, curConveyerPos + conveyerHeights[j] - height * 0.295, width * 0.05, width * 0.08);

      fill(noiseColour);
      stroke(189, 131, 45);
      rect(conveyerWidths[i] + width * 0.15, curConveyerPos + conveyerHeights[j] - height * 0.3, width * 0.05, width * 0.05);

      //open sides
      rect(conveyerWidths[i] + width * 0.15, curConveyerPos + conveyerHeights[j] - height * 0.35, width * 0.05, width * 0.02);
      rect(conveyerWidths[i] + width * 0.15, curConveyerPos + conveyerHeights[j] - height * 0.25, width * 0.05, width * 0.02);
      pop();
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rectMode(CENTER); 																														//shades
  push();
  noStroke();
  fill(0, 0, 0, 100);
  rect(width / 2, height * 0.55, width, 0.3 * height);
  rect(width * 0.52, height / 2, width * 0.05, height);

  rect(width * 0.52, swayPos + height * 0.05, width * 0.15, width * 0.15);

  pop();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rect(width / 2, height / 2, width, 0.3 * height); //main conveyer
  for (let i = 0; i < conveyerWidths.length - 1; i++) {
    let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i + 1]);
    stroke(0);
    line(curConveyerPos, 0.35 * height, curConveyerPos, 0.65 * height);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < conveyerWidths.length - 1; i++) { //boxes
    let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i + 1]);
    push();
    fill(242, 182, 92);
    stroke(189, 131, 45);
    rect(curConveyerPos - width * 0.1, height * 0.5, width * 0.1, width * 0.1);
    pop();
  }
  for (let i = 3; i < conveyerWidths.length - 1; i++) { //tape
    let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i + 1]);
    push();
    fill(255);
    stroke(189, 131, 45);
    rect(curConveyerPos - width * 0.1, height * 0.5, width * 0.02, width * 0.1);
    fill(200, 30, 0);
    rect(curConveyerPos - width * 0.1, height * 0.46, width * 0.02, width * 0.02);
    rect(curConveyerPos - width * 0.1, height * 0.54, width * 0.02, width * 0.02);
    pop();
  }
  for (let i = 0; i < conveyerWidths.length - 4; i++) { //folds
    let curConveyerPos = map(cur_frac, 0, 1, conveyerWidths[i], conveyerWidths[i + 1]);
    push();
    fill(242, 182, 92);
    stroke(189, 131, 45);
    rect(curConveyerPos - width * 0.165, height * 0.5, width * 0.04, width * 0.1);
    rect(curConveyerPos - width * 0.035, height * 0.5, width * 0.04, width * 0.1);
    pop();
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rect(width * 0.5, swayPos, width * 0.15, width * 0.15); //final sway

  fill(150);
  rect(width / 2, height / 2, width * 0.05, height);
}
