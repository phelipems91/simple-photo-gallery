"use strict"; // interpret document contents in JavaScript strict mode

var photoOrder = [1,2,3,4,5];

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   var img = document.getElementsByName("img");
   
   /*for(var i=0; i < 5; i++){
      if(photoOrder[i]+1 === 6) photoOrder[i] = 1;
      else photoOrder[i]++;
   }*/
      var temp = photoOrder[0];
      photoOrder[0] = photoOrder[4];
      photoOrder[4] = photoOrder[3];
      photoOrder[3] = photoOrder[2];
      photoOrder[2] = photoOrder[1];
      photoOrder[1] = temp;

   for(var j=0; j < 5; j++){
      img[j].src = "images/IMG_0"+photoOrder[j]+".jpg";
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   var img = document.getElementsByName("img");
   
   /*for(var i=0; i < 5; i++){
      if(photoOrder[i]-1 === 0) photoOrder[i] = 5;
      else photoOrder[i]--;
   }*/

   var temp = photoOrder[4];
   photoOrder[4] = photoOrder[0];
   photoOrder[0] = photoOrder[1];
   photoOrder[1] = photoOrder[2];
   photoOrder[2] = photoOrder[3];
   photoOrder[3] = temp;
  
   for(var j=0; j < 5; j++){
      img[j].src = "images/IMG_0"+photoOrder[j]+".jpg";
   }

}

function fiveButton(){
   const newFig = document.createElement("figure");
   const newFig2 = document.createElement("figure");
   const image = document.createElement("img");
   const image2 = document.createElement("img");
   const button = document.createElement("div");
   const p = document.createElement("p");
   var text = document.createTextNode("Show less images");
   
   newFig.id = "fig1";
   newFig2.id = "fig5";
   button.id = "threeButton";
   button.addEventListener("click", threeButton);
   image.width = 300;
   image.height = 150;
   image.name = "img";
   image2.width = 300;
   image2.height = 150;
   image2.name = "img";

   newFig.appendChild(image);
   newFig2.appendChild(image2);
   p.appendChild(text);
   button.appendChild(p);
   

   const fig2 = document.getElementById("fig2");
   const fig4 = document.getElementById("fig4");
   const fiveButton = document.getElementById("fiveButton");
   fig2.parentNode.insertBefore(newFig,fig2);
   fig4.parentNode.insertBefore(newFig2,fig4.nextSibling);
   fiveButton.parentNode.insertBefore(button,fiveButton.nextSibling);

   var img = document.getElementsByTagName("img");

   img[0].src = "images/IMG_0"+photoOrder[3]+".jpg";
   img[4].src = "images/IMG_0"+photoOrder[4]+".jpg";
   for(var i=0;i < 5;i++){
      photoOrder[i] = parseInt(img[i].src.substring(img[i].src.length-5,img[i].src.length-4));
   }

   fiveButton.parentNode.removeChild(fiveButton);

}

function threeButton(){
   const button = document.createElement("div");
   const p = document.createElement("p");
   const fig1 = document.getElementById("fig1");
   const fig5 = document.getElementById("fig5");
   var text = document.createTextNode("Show more images");

   button.id = "fiveButton";
   button.addEventListener("click", fiveButton);

   p.appendChild(text);
   button.appendChild(p);

   fig1.parentNode.removeChild(fig1);
   fig5.parentNode.removeChild(fig5);
   const threeButton = document.getElementById("threeButton");
   threeButton.parentNode.insertBefore(button,threeButton.nextSibling);

   var img = document.getElementsByTagName("img");
   img[0].src = "images/IMG_0"+photoOrder[1]+".jpg";
   img[1].src = "images/IMG_0"+photoOrder[2]+".jpg";
   img[2].src = "images/IMG_0"+photoOrder[3]+".jpg";

   for(var i=0;i < 3;i++){
      photoOrder[i] = parseInt(img[i].src.substring(img[i].src.length-5,img[i].src.length-4));
   }
  
   threeButton.parentNode.removeChild(threeButton);

}

/* open center figure in separate window */
function zoomFig() {
   var img = document.getElementsByName("img");

   if(img.length >= 5) window.open("zoom.htm?img="+photoOrder[2],"Full size photo","width=\"960\",height=\"540\"");
   else window.open("zoom.htm?img="+photoOrder[1],"Full size photo","width=\"960\",height=\"540\"");
   
}

function removeFavorite(button){
   var div = button.parentNode;

   div.parentNode.removeChild(div);
}

function createEventListeners(){
   var left = document.getElementById("leftarrow");
   if (left.addEventListener) {
      left.addEventListener("click", leftArrow, false);
   } else if (left.attachEvent)  {
      left.attachEvent("onclick", leftArrow);
   }

   var right = document.getElementById("rightarrow");
   if (right.addEventListener) {
      right.addEventListener("click", rightArrow, false);
   } else if (right.attachEvent)  {
      right.attachEvent("onclick", rightArrow);
   }

   var five = document.getElementById("fiveButton");
   if (five.addEventListener) {
      five.addEventListener("click", fiveButton, false);
   } else if (five.attachEvent)  {
      five.attachEvent("onclick", fiveButton);
   }

   var figure = document.getElementById("fig3");
   if (figure.addEventListener) {
      figure.addEventListener("click", zoomFig, false);
   } else if (figure.attachEvent)  {
      figure.attachEvent("onclick", zoomFig);
   }
   
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}