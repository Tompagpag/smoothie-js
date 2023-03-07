import Banana from "./Banana.class.js"
import Kiwi from "./Kiwi.class.js";
import Strawberry from "./Strawberry.class.js";

import Smoothie from "./Smoothie.class.js"

let smoothie = new Smoothie()

//ECOUTEURS DE CLICK SUR NOS BOUTONS BANANE FRAISE KIWI
const banane = document.querySelector("#banana");
banane.addEventListener('click', () => {smoothie.addFruit(new Banana())})

const fraise = document.querySelector("#strawberry");
fraise.addEventListener('click', () => {smoothie.addFruit(new Strawberry());})

const kiwi = document.querySelector("#kiwi");
kiwi.addEventListener('click', () => {smoothie.addFruit(new Kiwi());})

//smoothie.addFruit(new Banana())
