"use strict"; // interpret document contents in JavaScript strict mode

function zoomImg(){
   var img = document.getElementsByTagName('img');

   img[0].src = "images/IMG_0"+location.search.substring(location.search.length - 1)+".jpg";

}

function closeWindow(){
   self.close();
}

function addFavorites(){

   var favImages = window.opener.document.getElementsByName("favImg");

   if(favImages.length < 5){
      var div = window.opener.document.getElementsByClassName("favorites");
      var button = window.opener.document.getElementsByTagName("button");
      var html = "<div id = \"images\"><img src = \"images/IMG_0"+location.search.substring(location.search.length - 1)+".jpg\" id=\"favImg\" name=\"favImg\"/><figcaption><button onClick=\"removeFavorite(this.parentNode)\">Remove</button></figcaption></div>";
   
      div[div.length-1].insertAdjacentHTML("beforeend", html);
   }else{
      window.alert("A maximum of 5 pictures was reached. Remove at least one.")
   }

}

function createEventListeners(){
   var close = document.getElementsByTagName("p")[0];
   if (close.addEventListener) {
      close.addEventListener("click", closeWindow, false);
   } else if (close.attachEvent)  {
      close.attachEvent("onclick", closeWindow);
   }

   var fav = document.getElementsByTagName("p")[1];
   if (fav.addEventListener) {
      fav.addEventListener("click", addFavorites, false);
   } else if (fav.attachEvent)  {
      fav.attachEvent("onclick", addFavorites);
   }
}

function setUpPage() {
   zoomImg();
   createEventListeners();
}

if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false); 
 } else if (window.attachEvent)  {
   window.attachEvent("onload", setUpPage);
 }