class CarGame {
    constructor() {
      this.move = 10;
      this.car = document.getElementById("carplayer");
      this.car.style.position = "absolute";
      this.car.style.top = "0";
      this.car.style.left = "0";
      window.onkeydown = this.handleKeyDown.bind(this);
    }
  
    handleKeyDown(e) {
     
        if (e.key === 'ArrowLeft') {
         this.car.style.left = parseInt(this.car.style.left) - this.move + "px";
          } 
         else if (e.key === 'ArrowRight') {
         this.car.style.left = parseInt(this.car.style.left) + this.move + "px";
         }
        }
  }
  
  window.onload = () => {
    const carGame = new CarGame();
  };



  class obstacle{
 
  }
  