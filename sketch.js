function setup() {
  createCanvas(800, 800);
  dx = 55;
  w = width / dx;
  r = [];
  c = [];
  console.log(w);

  frameRate(12);
  // for (i = 0; i <= dx; i++) {
  //   for (j = 0; j <= dx; j++) {
  //     stroke("#00111111");
  //     [x, y] = [i * w, j * w];
  //     push();
  //     translate(x, y);
  //     rect(0, 0, w, w);
  //     pop();
  //     v = random();
  //     r.push(v);
  //   }
  //   c.push(r);
  //   r = [];
  // }

  // //
  // noStroke();
  // fill("#ff0000ff");
  // c.forEach((y, idx) => {
  //   if (idx == 0) {
  //     minIdx = y.findIndex((x) => x === Math.min(...y));
  //     markMin(minIdx, idx);
  //   }

  //   // next line
  //   if (idx > 0) {
  //     fill("#00ff00af");

  //     if (minIdx > 0 && minIdx < y.length) {
  //       nextRowMin = Math.min(y[minIdx - 1], y[minIdx], y[minIdx + 1]);
  //     }
  //     if (minIdx == 0) {
  //       nextRowMin = Math.min(y[minIdx], y[minIdx + 1]);
  //     }
  //     if (minIdx == y.length - 1) {
  //       nextRowMin = Math.min(y[minIdx - 1], y[minIdx]);
  //     }
  //     minIdx = y.findIndex((e) => e === nextRowMin);
  //     markMin(minIdx, idx);
  //   }
  // });
}

function markMin(xidx, yidx, radius) {
  ellipse(xidx > 0 ? xidx * w - 15 : w - 15, yidx > 0 ? yidx * w + 15 : 15, 10);
}

function draw() {
  c = [];
  // background(220);
  // fill(0);
  strokeWeight(1);

  for (i = 0; i <= dx; i++) {
    for (j = 0; j <= dx; j++) {
      stroke("#00111111");
      [x, y] = [i * w, j * w];
      push();
      translate(x, y);
      rect(0, 0, w, w);
      pop();
      v = random();
      r.push(v);
      // i > 5 && i < 30 && j > 5 && j < 30 ? r.push(2) : r.push(v);
    }
    c.push(r);
    r = [];
  }

  //
  noStroke();

  c.forEach((y, idx) => {
    if (idx == 0) {
      minIdx = y.findIndex((x) => x === Math.min(...y));
      push();
      fill("#ff0000ff");
      markMin(minIdx, idx);
      pop();
    }

    // next line
    if (idx > 0) {
      push();
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
      pop();
    }
  });
}
