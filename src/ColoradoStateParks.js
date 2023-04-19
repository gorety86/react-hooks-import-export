import React from "react";
import howManyParks from "./parks/howManyParks.js";
import MesaVerde from "./parks/MesaVade.js";
import { trees, wildlife } from "./RockyMountain.js";

// src/parks/RockyMountain.js
console.log(trees);
// => "Aspen and Pine"

wildlife();
// => "Elk,Bighorn Sheep, Moose"
function ColoradoStateParks() {

  howManyParks(); // => "42 parks!"
  MesaVerde(); // => "42 parks!"
  return(
    <div>
   <h1>Colorado State Parks!</h1>;
   </div>
  )
   }
   export default ColoradoStateParks;
