function setup() {
  createCanvas(800, 800);
  dx = 15;
  w = width / dx;
  r = [];
  c = [];
  console.log(w);

  for (i = 0; i <= dx; i++) {
    for (j = 0; j <= dx; j++) {
      stroke(0);
      // strokeWeight(2);
      [x, y] = [i * w, j * w];
      push();
      translate(x, y);
      // rotate(Math.PI / 4);
      rect(0, 0, w, w);
      pop();
      // e = parseFloat(random().toFixed(2));
      v = random();

      // text(v, w * j + 10, w * i);
      r.push(v);
    }
    // console.table(r);
    c.push(r);
    r = [];
  }

  //
  noStroke();
  fill("#ff0000ff");
  c.forEach((y, idx) => {
    if (idx == 0) {
      minIdx = y.findIndex((x) => x === Math.min(...y));
      markMin(minIdx, idx);
    }

    // next line
    if (idx > 0) {
      fill("#00ff00af");

      if (minIdx > 0 && minIdx < y.length) {
        nextRowMin = Math.min(y[minIdx - 1], y[minIdx], y[minIdx + 1]);
      }
      if (minIdx == 0) {
        nextRowMin = Math.min(y[minIdx], y[minIdx + 1]);
      }
      if (minIdx == y.length - 1) {
        nextRowMin = Math.min(y[minIdx - 1], y[minIdx]);
      }
      minIdx = y.findIndex((e) => e === nextRowMin);
      markMin(minIdx, idx);
    }
  });
}

function markMin(xidx, yidx, radius) {
  ellipse(xidx > 0 ? xidx * w - 15 : w - 15, yidx > 0 ? yidx * w + 15 : 15, 15);
}

function draw() {
  // background(220);
}
