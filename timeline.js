let slidescontainer = document.querySelector("#slidescontainer");
let scrollPos = 0;
let timeline = document.querySelector("#timelinecontainer");

function init() {
  console.log("init");
  slidescontainer.addEventListener("scroll", changeBG);
  //document.querySelector("#svg1").addEventListener("mouseover", displayPopup);
  slidescontainer.addEventListener("click", displayModal);
}

function changeBG(event) {
  if (
    document.querySelector("#goldenage").getBoundingClientRect().top < scrollPos
  ) {
    //console.log("down");
    document.querySelector("#goldenage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#silverage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#bronzeage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#darkage").style.backgroundColor = "#1b1c2b";
    document.querySelector("#agelessage").style.backgroundColor = "#1b1c2b";

    showGoldenBG();
    showSilverBG();
    showBronzeBG();
    showDarkBG();
    showAgelessBG();
  } else {
    // console.log("up");

    document.querySelector("#goldenage").style.backgroundColor = "#f9e959";
    document.querySelector("#silverage").style.backgroundColor = "#a8e0fc";
    document.querySelector("#bronzeage").style.backgroundColor = "#c9882f";
    document.querySelector("#darkage").style.backgroundColor = "black";
    document.querySelector("#agelessage").style.backgroundColor = "#c1c1c1";
    rmvGoldenBG();
    rmvSilverBG();
    rmvBronzeBG();
    rmvDarkBG();
    rmvAgelessBG();
  }
}

function showGoldenBG() {
  document.querySelector("#goldenage h1").style.display = "none";
  document.querySelector("#goldenage p").style.display = "none";
  document.querySelector("#img1").style.display = "none";
  document.querySelector("#img2").style.display = "none";
  document.querySelector("#planet1-1").style.display = "block";
  document.querySelector("#planet1-2").style.display = "block";
  document.querySelector("#planet1-3").style.display = "block";
  document.querySelector("#miniplanet1-1").style.display = "block";
  document.querySelector("#miniplanet1-2").style.display = "block";
  document.querySelector("#miniplanet1-3").style.display = "block";
  document.querySelector("#planet1-1").classList.add("fadeinPlanet");
  document.querySelector("#planet1-2").classList.add("fadeinPlanet");
  document.querySelector("#planet1-3").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet1-1").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet1-2").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet1-3").classList.add("fadeinPlanet");
  document.querySelector("#planet1-1 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet1-2 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet1-3 #Pattern").classList.add("movePlanet");
  document
    .querySelector("#miniplanet1-1 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet1-2 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet1-3 #Pattern")
    .classList.add("moveMiniplanet");
}

function rmvGoldenBG() {
  document.querySelector("#goldenage h1").style.display = "block";
  document.querySelector("#goldenage p").style.display = "block";
  document.querySelector("#img1").style.display = "block";
  document.querySelector("#img2").style.display = "block";
  document.querySelector("#planet1-1").style.display = "none";
  document.querySelector("#planet1-2").style.display = "none";
  document.querySelector("#planet1-3").style.display = "none";
  document.querySelector("#miniplanet1-1").style.display = "none";
  document.querySelector("#miniplanet1-2").style.display = "none";
  document.querySelector("#miniplanet1-3").style.display = "none";
  document.querySelector("#planet1-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet1-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet1-3").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet1-1").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet1-2").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet1-3").classList.remove("fadeinPlanet");
  document.querySelector("#planet1-1 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet1-2 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet1-3 #Pattern").classList.remove("movePlanet");
}

function showSilverBG() {
  document.querySelector("#silverage h1").style.display = "none";
  document.querySelector("#silverage p").style.display = "none";
  document.querySelector("#img3").style.display = "none";
  document.querySelector("#img4").style.display = "none";
  document.querySelector("#planet2-1").style.display = "block";
  document.querySelector("#planet2-2").style.display = "block";
  document.querySelector("#planet2-3").style.display = "block";
  document.querySelector("#miniplanet2-1").style.display = "block";
  document.querySelector("#miniplanet2-2").style.display = "block";
  document.querySelector("#miniplanet2-3").style.display = "block";
  document.querySelector("#planet2-1").classList.add("fadeinPlanet");
  document.querySelector("#planet2-2").classList.add("fadeinPlanet");
  document.querySelector("#planet2-3").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet2-1").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet2-2").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet2-3").classList.add("fadeinPlanet");
  document.querySelector("#planet2-1 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet2-2 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet2-3 #Pattern").classList.add("movePlanet");
  document
    .querySelector("#miniplanet1-1 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet1-2 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet1-3 #Pattern")
    .classList.add("moveMiniplanet");
}

function rmvSilverBG() {
  document.querySelector("#silverage h1").style.display = "block";
  document.querySelector("#silverage p").style.display = "block";
  document.querySelector("#img3").style.display = "block";
  document.querySelector("#img4").style.display = "block";
  document.querySelector("#planet2-1").style.display = "none";
  document.querySelector("#planet2-2").style.display = "none";
  document.querySelector("#planet2-3").style.display = "none";
  document.querySelector("#miniplanet2-1").style.display = "none";
  document.querySelector("#miniplanet2-2").style.display = "none";
  document.querySelector("#miniplanet2-3").style.display = "none";
  document.querySelector("#planet2-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet2-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet2-3").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet2-1").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet2-2").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet2-3").classList.remove("fadeinPlanet");
  document.querySelector("#planet2-1 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet2-2 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet2-3 #Pattern").classList.remove("movePlanet");
}

function showBronzeBG() {
  document.querySelector("#bronzeage h1").style.display = "none";
  document.querySelector("#bronzeage p").style.display = "none";
  document.querySelector("#img5").style.display = "none";
  document.querySelector("#img6").style.display = "none";
  document.querySelector("#planet3-1").style.display = "block";
  document.querySelector("#planet3-2").style.display = "block";
  document.querySelector("#planet3-3").style.display = "block";
  document.querySelector("#planet3-4").style.display = "block";
  document.querySelector("#planet3-5").style.display = "block";
  document.querySelector("#miniplanet3-1").style.display = "block";

  document.querySelector("#planet3-1").classList.add("fadeinPlanet");
  document.querySelector("#planet3-2").classList.add("fadeinPlanet");
  document.querySelector("#planet3-3").classList.add("fadeinPlanet");
  document.querySelector("#planet3-4").classList.add("fadeinPlanet");
  document.querySelector("#planet3-5").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet3-1").classList.add("fadeinPlanet");

  document.querySelector("#planet3-1 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet3-2 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet3-3 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet3-4 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet3-5 #Pattern").classList.add("movePlanet");
  document
    .querySelector("#miniplanet3-1 #Pattern")
    .classList.add("moveMiniplanet");
}

function rmvBronzeBG() {
  document.querySelector("#bronzeage h1").style.display = "block";
  document.querySelector("#bronzeage p").style.display = "bloc";
  document.querySelector("#img5").style.display = "block";
  document.querySelector("#img6").style.display = "block";
  document.querySelector("#planet3-1").style.display = "none";
  document.querySelector("#planet3-2").style.display = "none";
  document.querySelector("#planet3-3").style.display = "none";
  document.querySelector("#planet4-3").style.display = "none";
  document.querySelector("#planet5-3").style.display = "none";
  document.querySelector("#miniplanet3-1").style.display = "none";
  document.querySelector("#planet3-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet3-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet3-3").classList.remove("fadeinPlanet");
  document.querySelector("#planet3-4").classList.remove("fadeinPlanet");
  document.querySelector("#planet3-5").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet3-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet3-1 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet3-2 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet3-3 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet3-4 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet3-5 #Pattern").classList.remove("movePlanet");
}

function showDarkBG() {
  document.querySelector("#darkage h1").style.display = "none";
  document.querySelector("#darkage p").style.display = "none";
  document.querySelector("#img7").style.display = "none";
  document.querySelector("#img8").style.display = "none";
  document.querySelector("#planet4-1").style.display = "block";
  document.querySelector("#planet4-2").style.display = "block";
  document.querySelector("#planet4-3").style.display = "block";
  document.querySelector("#planet4-4").style.display = "block";
  document.querySelector("#miniplanet4-1").style.display = "block";
  document.querySelector("#miniplanet4-2").style.display = "block";
  document.querySelector("#planet4-1").classList.add("fadeinPlanet");
  document.querySelector("#planet4-2").classList.add("fadeinPlanet");
  document.querySelector("#planet4-3").classList.add("fadeinPlanet");
  document.querySelector("#planet4-4").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet4-1").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet4-2").classList.add("fadeinPlanet");
  document.querySelector("#planet4-1 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet4-2 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet4-3 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet4-4 #Pattern").classList.add("movePlanet");
  document
    .querySelector("#miniplanet4-1 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet4-2 #Pattern")
    .classList.add("moveMiniplanet");
}

function rmvDarkBG() {
  document.querySelector("#darkage h1").style.display = "block";
  document.querySelector("#darkage p").style.display = "block";
  document.querySelector("#img7").style.display = "block";
  document.querySelector("#img8").style.display = "block";
  document.querySelector("#planet4-1").style.display = "none";
  document.querySelector("#planet4-2").style.display = "none";
  document.querySelector("#planet4-3").style.display = "none";
  document.querySelector("#planet4-4").style.display = "none";
  document.querySelector("#miniplanet4-1").style.display = "none";
  document.querySelector("#miniplanet4-2").style.display = "none";
  document.querySelector("#planet4-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet4-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet4-3").classList.remove("fadeinPlanet");
  document.querySelector("#planet4-4").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet4-1").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet4-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet4-1 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet4-2 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet4-3 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet4-4 #Pattern").classList.remove("movePlanet");
}

function showAgelessBG() {
  document.querySelector("#agelessage h1").style.display = "none";
  document.querySelector("#agelessage p").style.display = "none";
  document.querySelector("#img9").style.display = "none";
  document.querySelector("#img10").style.display = "none";
  document.querySelector("#planet5-1").style.display = "block";
  document.querySelector("#planet5-2").style.display = "block";
  document.querySelector("#planet5-3").style.display = "block";
  document.querySelector("#planet5-4").style.display = "block";
  document.querySelector("#miniplanet5-1").style.display = "block";
  document.querySelector("#miniplanet5-2").style.display = "block";
  document.querySelector("#planet5-1").classList.add("fadeinPlanet");
  document.querySelector("#planet5-2").classList.add("fadeinPlanet");
  document.querySelector("#planet5-3").classList.add("fadeinPlanet");
  document.querySelector("#planet5-4").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet5-1").classList.add("fadeinPlanet");
  document.querySelector("#miniplanet5-2").classList.add("fadeinPlanet");
  document.querySelector("#planet5-1 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet5-2 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet5-3 #Pattern").classList.add("movePlanet");
  document.querySelector("#planet5-4 #Pattern").classList.add("movePlanet");
  document
    .querySelector("#miniplanet5-1 #Pattern")
    .classList.add("moveMiniplanet");
  document
    .querySelector("#miniplanet5-2 #Pattern")
    .classList.add("moveMiniplanet");
}

function rmvAgelessBG() {
  document.querySelector("#agelessage h1").style.display = "block";
  document.querySelector("#agelessage p").style.display = "block";
  document.querySelector("#img9").style.display = "block";
  document.querySelector("#img10").style.display = "block";
  document.querySelector("#planet5-1").style.display = "none";
  document.querySelector("#planet5-2").style.display = "none";
  document.querySelector("#planet5-3").style.display = "none";
  document.querySelector("#planet5-4").style.display = "none";
  document.querySelector("#miniplanet5-1").style.display = "none";
  document.querySelector("#miniplanet5-2").style.display = "none";
  document.querySelector("#planet5-1").classList.remove("fadeinPlanet");
  document.querySelector("#planet5-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet5-3").classList.remove("fadeinPlanet");
  document.querySelector("#planet5-4").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet5-1").classList.remove("fadeinPlanet");
  document.querySelector("#miniplanet5-2").classList.remove("fadeinPlanet");
  document.querySelector("#planet5-1 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet5-2 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet5-3 #Pattern").classList.remove("movePlanet");
  document.querySelector("#planet5-4 #Pattern").classList.remove("movePlanet");
}

function displayPopup() {
  console.log("popup");
  document.querySelector(".popup").style.visibility = "visible";
}

function displayModal(event) {
  console.log(event.target.id);
  if (event.target.id == "hallo") {
    console.log("jap");
  }
  document.querySelector("#dust").style.display = "block";
  document.querySelector("#dust").classList.add("blendin");
  document.querySelector("#infobox").style.visibility = "visible";
  document.querySelector("#infobox").classList.add("show");
}

init();
