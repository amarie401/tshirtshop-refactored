function myfunc(div) {
  var className = div.getAttribute("class");
  if(className=="heart-on") {
    div.className = "heart-off";
  }
  else{
    div.className = "heart-on";
  }
};
