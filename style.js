function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);

  // Skin color
  fill(255, 224, 189);

  // Head
  ellipse(200, 200, 150, 200);

  // Eyes
  fill(255);
  ellipse(170, 180, 30, 20); // Left eye
  ellipse(230, 180, 30, 20); // Right eye

  fill(0);
  ellipse(170, 180, 10, 10); // Left pupil
  ellipse(230, 180, 10, 10); // Right pupil

  // Eyebrows
  stroke(0);
  strokeWeight(4);
  line(155, 165, 185, 165); // Left
  line(215, 165, 245, 165); // Right

  // Nose
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(200, 180);
  vertex(200, 210);
  vertex(190, 220);
  endShape();

  // Mouth
  noFill();
  strokeWeight(2);
  arc(200, 240, 50, 20, 0, PI);

  // Hair
  fill(50, 25, 0); // dark brown
  noStroke();
  arc(200, 150, 160, 140, PI, TWO_PI);
}
