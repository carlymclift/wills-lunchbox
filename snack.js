class Snack {
  constructor(type) {
    this.deliciousLevel = "extra";
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = this.type.includes("Fruit") || false;
    this.healthySnacks = []
      // if (this.type.includes("Fruit")) {
      //   this.healthy = true;
      // }
  }
  getEaten() {
    this.amount -= 10;
    if (this.amount === 20) {
      this.cuttingItClose = true;
    }
  }
}


module.exports = Snack;
