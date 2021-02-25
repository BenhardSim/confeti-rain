let snows = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  snows.push(new snow())
  for (let i = 0; i < snows.length; i++) {
    snows[i].show()
    snows[i].settings()
    snows[i].update()
    if (snows[i].pos.y > height || (snows[i].r == 0 && snows[i].g == 0 && snows[i].b == 0)) {
      snows.splice(i,1)
    }
    // console.log(snows.length)
  }
}