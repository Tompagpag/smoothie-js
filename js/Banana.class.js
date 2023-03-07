import Fruits from "./Fruits.class.js";
import Color from "./Color.class.js";

export default class Banana extends Fruits {
  constructor() {
    super();
    this._volume = 30;
    this._acidity = 10;
    this._sugar = 10;
    this._vitamins = ["B6", "Mg"];
    this.color = new Color(255, 255, 0);
  }
}
