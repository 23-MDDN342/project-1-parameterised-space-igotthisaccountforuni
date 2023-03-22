// const ease = new p5.Ease();
function draw_one_frame(cur_frac) {
  background(150);

  let conveyorWidths = [ //conveyor points
    0,
    0.20 * width,
    0.40 * width,
    0.60 * width,
    0.80 * width,
    1.00 * width,
    1.20 * width
  ]

  let conveyorHeights = [
    0,
    0.20 * height,
    0.40 * height,
    0.60 * height,
    0.80 * height,
    1.00 * height,
    1.20 * height
  ]

  let mainColour = color('#fcecd4'); //color('#ffb84d');
  let backColour = color('#ffb84d'); //color('#fad59d');
  let noiseColour;
  let noise;

  //const easeScale = ease.circularInOut();

  let swayPos; //sway variable
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
  stroke(30);
  fill(170);

  for (let i = 0; i < conveyorWidths.length - 1; i++) { //conveyors
    rect(conveyorWidths[i], 0, width * 0.1, height);
  }
  for (var i = 0; i < conveyorWidths.length - 1; i++) {
    let curconveyorPos = map(cur_frac, 0, 1, 0, 0.2 * height); //determining position of the conveyor
    noise = getNoiseValue(i, height, 1, "noise", 0, 1, 1); //generating noise
    noiseColour = lerpColor(mainColour, backColour, noise); //noise colour for this column
    for (var j = 0; j < conveyorWidths.length; j++) {
      line(conveyorWidths[i], curconveyorPos + conveyorHeights[j], conveyorWidths[i] + width * 0.1, curconveyorPos + conveyorHeights[j]); //moving lines
      push();
      rectMode(CENTER);

      fill(0, 0, 0, 100); //shade
      noStroke();
      rect(conveyorWidths[i] + width * 0.055, curconveyorPos + conveyorHeights[j] - height * 0.29, width * 0.05, width * 0.05);

      fill(noiseColour); //box
      stroke(189, 131, 45);
      rect(conveyorWidths[i] + width * 0.05, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.05, width * 0.05);

      fill(255); //taping
      stroke(189, 131, 45);
      rect(conveyorWidths[i] + width * 0.05, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.05, width * 0.01);
      fill(200, 30, 0);
      rect(conveyorWidths[i] + width * 0.04, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.01, width * 0.01);
      rect(conveyorWidths[i] + width * 0.06, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.01, width * 0.01);
      pop();
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < conveyorWidths.length - 1; i++) { //inverse conveyors
    rect(conveyorWidths[i] + width * 0.1, 0, width * 0.1, height);
  }
  for (var i = 0; i < conveyorWidths.length - 1; i++) {
    let curconveyorPos = map(cur_frac, 1, 0, 0, 0.2 * height); //determining position of the conveyor
    noise = getNoiseValue(i, height, 1, "noise2", 0, 1, 1); //generating noise
    noiseColour = lerpColor(mainColour, backColour, noise); //noise colour for this column
    for (var j = 0; j < conveyorWidths.length; j++) {
      line(conveyorWidths[i] + width * 0.1, curconveyorPos + conveyorHeights[j], conveyorWidths[i] + width * 0.2, curconveyorPos + conveyorHeights[j]); //moving lines
      push();
      rectMode(CENTER);
      noStroke();

      fill(0, 0, 0, 100); //shade
      rect(conveyorWidths[i] + width * 0.155, curconveyorPos + conveyorHeights[j] - height * 0.295, width * 0.05, width * 0.08);

      fill(noiseColour); //box
      stroke(189, 131, 45);
      rect(conveyorWidths[i] + width * 0.15, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.05, width * 0.05);

      fill(255, 245, 225); //content
      stroke(50);
      rect(conveyorWidths[i] + width * 0.15, curconveyorPos + conveyorHeights[j] - height * 0.3, width * 0.025, height * 0.03);
      triangle(
        conveyorWidths[i] + width * 0.1625, curconveyorPos + conveyorHeights[j] - height * 0.315,
        conveyorWidths[i] + width * 0.1375, curconveyorPos + conveyorHeights[j] - height * 0.315,
        conveyorWidths[i] + width * 0.15, curconveyorPos + conveyorHeights[j] - height * 0.3);

      fill(noiseColour); //folds
      stroke(189, 131, 45);
      rect(conveyorWidths[i] + width * 0.15, curconveyorPos + conveyorHeights[j] - height * 0.35, width * 0.05, width * 0.02);
      rect(conveyorWidths[i] + width * 0.15, curconveyorPos + conveyorHeights[j] - height * 0.25, width * 0.05, width * 0.02);
      pop();
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rectMode(CENTER); //shades
  push();
  noStroke();
  fill(0, 0, 0, 100);
  rect(width / 2, height * 0.55, width, 0.3 * height);
  rect(width * 0.52, height / 2, width * 0.05, height);

  rect(width * 0.52, swayPos + height * 0.05, width * 0.15, width * 0.15); //sway machine shade

  pop();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rect(width / 2, height / 2, width, 0.3 * height); //main conveyor
  for (let i = 0; i < conveyorWidths.length - 1; i++) {
    let curconveyorPos = map(cur_frac, 0, 1, conveyorWidths[i], conveyorWidths[i + 1]);
    stroke(30);
    line(curconveyorPos, 0.35 * height, curconveyorPos, 0.65 * height);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  for (let i = 3; i < conveyorWidths.length - 1; i++) {
    let curconveyorPos = map(cur_frac, 0, 1, conveyorWidths[i], conveyorWidths[i + 1]);
    push();
    fill(0, 0, 0, 100); //shade
    noStroke();
    rect(curconveyorPos - width * 0.095, height * 0.51, width * 0.1, width * 0.1);

    fill(242, 182, 92); //box
    stroke(189, 131, 45);
    rect(curconveyorPos - width * 0.1, height * 0.5, width * 0.1, width * 0.1);

    fill(255); //tape
    stroke(189, 131, 45);
    rect(curconveyorPos - width * 0.1, height * 0.5, width * 0.02, width * 0.1);
    fill(200, 30, 0);
    rect(curconveyorPos - width * 0.1, height * 0.46, width * 0.02, width * 0.02);
    rect(curconveyorPos - width * 0.1, height * 0.54, width * 0.02, width * 0.02);
    pop();
  }

  for (let i = 0; i < conveyorWidths.length - 4; i++) {
    let curconveyorPos = map(cur_frac, 0, 1, conveyorWidths[i], conveyorWidths[i + 1]);
    push();
    fill(0, 0, 0, 100); //shade
    noStroke();
    rect(curconveyorPos - width * 0.095, height * 0.51, width * 0.16, width * 0.1);

    fill(242, 182, 92); //box
    stroke(189, 131, 45);
    rect(curconveyorPos - width * 0.1, height * 0.5, width * 0.1, width * 0.1);

    fill(255, 245, 225); //content
    stroke(50);
    rect(curconveyorPos - width * 0.1, height * 0.5, width * 0.04, height * 0.1);
    triangle(
      curconveyorPos - width * 0.12, height * 0.55,
      curconveyorPos - width * 0.12, height * 0.45,
      curconveyorPos - width * 0.1, height * 0.5);

    fill(242, 182, 92); //folds
    stroke(189, 131, 45);
    rect(curconveyorPos - width * 0.16, height * 0.5, width * 0.04, width * 0.1);
    rect(curconveyorPos - width * 0.04, height * 0.5, width * 0.04, width * 0.1);
    pop();
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  rect(width * 0.5, swayPos, width * 0.15, width * 0.15); //sway machine IT CLOSES THE BOXES AND TAPES THEM

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  fill(150);
  rect(width / 2, height / 2, width * 0.05, height); //central beam
}
