class Color {

  //appelé à l'instanciation => new Color()
  constructor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
    this._nbColor = 1;
  }

  //appelé quand color.red
  get red() {
    return this._red / this._nbColor;
  }
  get green() {
    return this._green / this._nbColor;
  }
  get blue() {
    return this._blue / this._nbColor;
  }

  //appelé quand color.red=valeur
  set red(red) {
    this._red = red;
  }
  set blue(blue) {
    this._blue = blue;
  }
  set green(green) {
    this._green = green;
  }


  colorMix(color) {
    // console.log("this",this)
    // console.log("color",color)
    this.red += color.red
    this.green += color.green
    this.blue += color.blue
    this._nbColor++

  }

  getRgb() { //renvoie la moyenne de tous les RGB qui ont influencés la couleur
    return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
  }


}


export default Color;
