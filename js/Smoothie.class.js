import Color from './Color.class.js';

class Smoothie {
  constructor() {
    this._color = new Color(255, 255, 255);
    this._gobelet = document.querySelector("#gobelet");
    this._acidityLevel = document.querySelector("#acidity-level span");
    this._sugarLevel = document.querySelector("#sugar-level span");
    this._volumeLevel = document.querySelector("#volume-level span");
    this._vitaminLevel = document.querySelector("#vitamin-level span");

    this._juice = document.querySelector("#juice");
    this._fruits = [];
    this._volume = 0;
    this._acidity = 0;
    this._sugar = 0;
    this._vitamins = [];

  }

  getAcidityPercent() {
    //.toFixed(2);
    return Math.round((this._acidity / this._volume * 10) * 100) / 100
  }

  setVitamins(fruitVitamins) {
    fruitVitamins.forEach(element => {
      if (!this._vitamins.includes(element)) {
        this._vitamins.push(element);
      }
    });
  }

  refreshData() {
    const acidityPercent = this.getAcidityPercent();
    this._acidityLevel.innerText = `${acidityPercent}%`;
    this._sugarLevel.innerText = `${this._sugar}g`;
    this._volumeLevel.innerText = `${this._volume}ml`;
    this._vitaminLevel.innerText = `${this._vitamins.join(', ')}`

    this._juice.style.height = `${this._volume}px`;
    this._juice.style.backgroundColor = this._color.getRgb();

  }

  addFruit(fruit) {
    if ((this._volume + fruit._volume) <= 155) {
      this._fruits.push(fruit);
      this._volume += fruit._volume;
      this._acidity += fruit._acidity;
      this._sugar += fruit._sugar;

      // this._color.red = fruit.color.red
      // this._color.blue = fruit.color.blue
      // this._color.green = fruit.color.green
      this._color.colorMix(fruit.color);

      this.setVitamins(fruit._vitamins);
      this.refreshData();
    } else {
      alert('Le volume maximum du Smoothie est de 155 mL !');
    }
  }
}

export default Smoothie;
