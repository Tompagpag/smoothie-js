import Color from './Color.class.js';

class Smoothie {
  constructor() {
    this._color = new Color(10, 10, 10);
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


  addFruit(fruit) {
    console.log(fruit)

  }
}

export default Smoothie;
