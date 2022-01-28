import randomNum from "./randomNum.js";

export default function backgroundColorChange(){
   const color = randomNum();
   document.body.style.background = `#${color}`;
}