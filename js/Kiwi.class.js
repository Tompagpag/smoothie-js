import Fruits from "./Fruits.class.js";
import Color from "./Color.class.js";

export default class Kiwi extends Fruits {
  constructor() {
    super();
    this._volume = 20;
    this._acidity = 10;
    this._sugar = 10;
    this._vitamins = ["C"];
    this.color = new Color(0, 255, 0);
  }
}
