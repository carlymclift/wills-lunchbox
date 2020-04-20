class LunchBox {
 constructor(boxInfo) {
   this.owner = boxInfo.owner;
   this.material = boxInfo.madeOf;
   this.shape = boxInfo.shape;
   this.color = boxInfo.color;
   this.handle = true;
   this.snacks = [];
   this.healthySnacks = [];
 }
 acquireSnack(fruitSnack) {
   this.snacks.push(fruitSnack);
   fruitSnack.isInLunchBox = true;
 }
 findHealthySnacks() {
   for (var i = 0; i < this.snacks.length; i++) {
     if (this.snacks[i].healthy){
       this.healthySnacks.push(this.snacks[i])
     }
   }
   return this.healthySnacks
 }
}

module.exports = LunchBox;
