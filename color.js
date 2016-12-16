//The Color Library object that can manipulate rgb value.
//rgb is an array holds 3 numbers which corresponds to a pixel.
var color = new object();

.
 Color.isValid = function(rgb){
   var redworks = rgb[0]>=0 && rgb[0]<=255;
   var greenworks = rgb[1]>=0 && rgb[1]<=255;
   var blueworks = rgb[2]>=0 && rgb[2]<=255;
   if(redworks && greenworks && blueworks){
    return true;
   }
   else{
     return false;
   }
 };

 //percent intensity of each color.
 Color.redintensity = function(rgb){
   var red = rgb[0]*100/255;
   return red;
 };
 Color.greenintensity = function(rgb){
   var green = rgb[1]*100/255;
   return green;
 };
 Color.brightness = function(rgb){
   var blue = rgb[2]*100/255;
   return blue;
 };

 //brightness
 Color.brightness = function(rgb){
   return (Color.redintensity(rgb)+Color.greenintensity(rgb)+color.blueintensity(rgb))/3;
 }

 //complement
 Color.complement = function(rgb){
   var comp = [];
   comp[0] = 255 - rgb[0];
   comp[1] = 255 - rgb[1];
   comp[2] = 255 - rgb[2];
   return comp;
 }
