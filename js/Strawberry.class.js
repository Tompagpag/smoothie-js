import Fruits from "./Fruits.class.js";
import Color from "./Color.class.js";

export default class Strawberry extends Fruits {
  constructor() {
    super();
    this._volume = 3;
    this._acidity = 30;
    this._sugar = 8;
    this._vitamins = ["C", "B9"];
    this.color = new Color(255, 0, 0);
  }
}
