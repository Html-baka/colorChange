export default function randomNum(){
   const min = 0;
   const max = 16777215;
   const random10 = Math.floor(Math.random() * (max - min + 1)) + min;
   const random16 = random10.toString(16);
   return random16;
};
