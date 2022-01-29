import randomNum from "./randomNum.js";
import getColorCode from "./getColorCode.js";
export default function backgroundColorChange(){
   const color = randomNum();
   document.body.style.background = `#${color}`;
   getColorCode(color);
}