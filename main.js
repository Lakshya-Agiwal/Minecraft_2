var canvas=new fabric.Canvas("myCanvas");
 var player_x=0;
var player_y=0;
var block_width=50;
var block_height=50;
var player_object="";
var block_object="";
 function player_update()
 {
     fabric.Image.fromURL("player.png",function (Img){
         player_object=Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(150);
         player_object.set({
             top:player_y,
             left:player_x

         })
         canvas.add(player_object);

     });

 }
 function block_update(get_image)
 {
     fabric.Image.fromURL(get_image,function (Img){
         block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
         block_object.set({
             top:player_y,
             left:player_x

         })
         canvas.add(block_object);

     });

 }
 window.addEventListener("keydown" , mykeyPressed);
 function mykeyPressed(e)
 {
   keypressed=e.keyCode;
   console.log(keypressed);
   if (keypressed=="84")
   {
     block_update("trunk.jpg");

   }
   if (keypressed=="68")
   {
       block_update("dark_green.png");
   }
   if (keypressed=="76")
   {
       block_update("light_green.png");
   }
   if (keypressed=="71")
   {
       block_update("ground.png");
   }
   if (keypressed=="87")
   {
       block_update("wall.jpg");
   }
   if (keypressed=="89")
   {
       block_update("yellow_wall.png");
   }
   if (keypressed=="85")
   {
       block_update("unique.png");
   }
   if (keypressed=="82")
   {
       block_update("roof.jpg");
   }
   if (keypressed=="67")
   {
       block_update("cloud.jpg");
   }
   if (e.shiftKey==true && keypressed=="80")
   {
      block_width=block_width+5;
      block_height=block_height+5;
      document.getElementById("width").innerHTML=block_width;
      document.getElementById("height").innerHTML=block_height;
      
   }
   if (e.shiftKey==true && keypressed=="77")
   {
      block_width=block_width-5;
      block_height=block_height-5;
      document.getElementById("width").innerHTML=block_width;
      document.getElementById("height").innerHTML=block_height;
      
   }
   if (keypressed=="38")
   {
       up();
   }
   if (keypressed=="40")
   {
       down();
   }
   if (keypressed=="37")
   {
       left();
   }
   if (keypressed=="39")
   {
       right();
   }
     }
function show_info()
{
    window.alert("T-Trunk | D-Dark_Green | L-Light_Green | G-Ground | W-Wall | Y-Yellow | U-Unique | R-Roof | C-Cloud | SHIFT+P-Make block bigger | SHIFT+M-Make blocks smaller")
}
