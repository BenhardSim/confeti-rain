class snow {
    constructor() {
        this.pos = createVector(random(width), random(-10, -20));
        this.speed = 0;
        this.radius = floor(random(2, 8))
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
    }

    show() {
        noStroke()
        fill(this.r, this.g, this.b)
        circle(this.pos.x, this.pos.y, this.radius)
    }

    settings() {
        if (this.radius == 2) {
            this.speed = 1.5
        } else if (this.radius == 3) {
            this.speed = 1.9
        } else if (this.radius == 4) {
            this.speed = 2.2
        } else if (this.radius == 5) {
            this.speed = 2.6
        } else if (this.radius == 6) {
            this.speed = 2.9
        } else if (this.radius == 7) {
            this.speed = 3
        } else if (this.radius == 8) {
            this.speed = 3.2
        }
    }

    update() {
        this.pos.y = this.pos.y + this.speed;
    }

}