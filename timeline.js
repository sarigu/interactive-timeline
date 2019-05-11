let slidescontainer = document.querySelector("#slidescontainer");
let scrollPos = 0;
let timeline = document.querySelector("#timelinecontainer");

function init() {
  console.log("init");
  slidescontainer.addEventListener("scroll", changeBG);
  document.querySelector("#svg1").addEventListener("mouseover", displayPopup);
  //timeline.addEventListener("scroll", changeBG2);
}

function changeBG(event) {
  if (
    document.querySelector("#goldenage").getBoundingClientRect().top > scrollPos
  ) {
    console.log("up");
    document.querySelector("#goldenage").style.backgroundColor = "#f9e959";
    document.querySelector("#silverage").style.backgroundColor = "#a8e0fc";
    document.querySelector("#bronzeage").style.backgroundColor = "#c9882f";
    document.querySelector("#darkage").style.backgroundColor = "black";
    document.querySelector("#agelessage").style.backgroundColor = "#c1c1c1";
  } else {
    console.log("down");
    document.querySelector("#goldenage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#silverage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#bronzeage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#darkage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#agelessage").style.backgroundColor = "#1b1c2b";
  }
}

//function changeBG2() {
//if (timeline.getBoundingClientRect().top > scrollPos) {
//document.querySelector("#timelinecontainer div ").style.backgroundColor =
//"#1b1c2b";
//console.log("test");
//} else {
// console.log("test2");
//}
//}

function displayPopup() {
  console.log("popup");
  document.querySelector(".popup").style.visibility = "visible";
}

init();
