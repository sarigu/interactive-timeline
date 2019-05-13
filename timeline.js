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

    showGoldenBG();
    showSilverBG();
    showBronzeBG();
    showDarkBG();
    showAgelessBG();
  } else {
    // console.log("up");

    rmvGoldenBG();
    rmvSilverBG();
    rmvBronzeBG();
    rmvDarkBG();
    rmvAgelessBG();
  }
}

function showGoldenBG() {
  document.querySelector("#goldenage").style.backgroundColor = "#1b1c2b";
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
  document.querySelector("#goldenage").style.backgroundColor = "#f9e959";
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
  document.querySelector("#silverage").style.backgroundColor = "#1b1c2b";
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
  document.querySelector("#silverage").style.backgroundColor = "#a8e0fc";
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
  document.querySelector("#bronzeage").style.backgroundColor = "#1b1c2b";
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
  document.querySelector("#bronzeage").style.backgroundColor = "#c9882f";
  document.querySelector("#bronzeage h1").style.display = "block";
  document.querySelector("#bronzeage p").style.display = "block";
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
  document.querySelector("#darkage").style.backgroundColor = "#1b1c2b";
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
  document.querySelector("#darkage").style.backgroundColor = "black";
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
  document.querySelector("#agelessage").style.backgroundColor = "#1b1c2b";
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
  document.querySelector("#agelessage").style.backgroundColor = "#c1c1c1";
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
  console.log(event.target);
  if (event.target.id == "planet1-1C") {
    document.querySelector("#dust1").classList.add("blendin");
    document.querySelector("#infobox1").classList.add("show");
    document.querySelector("#grounddust1").classList.add("showdust");
  } else if (event.target.id == "planet1-2C") {
    document.querySelector("#dust2").classList.add("blendin");
    document.querySelector("#infobox2").classList.add("show");
    document.querySelector("#grounddust2").classList.add("showdust");
  } else if (event.target.id == "planet1-3C") {
    document.querySelector("#dust3").classList.add("blendin");
    document.querySelector("#infobox3").classList.add("show");
    document.querySelector("#grounddust3").classList.add("showdust");
  } else if (event.target.id == "planet2-1C") {
    document.querySelector("#dust4").classList.add("blendin");
    document.querySelector("#infobox4").classList.add("show");
    document.querySelector("#grounddust4").classList.add("showdust");
  } else if (event.target.id == "planet2-2C") {
    document.querySelector("#dust5").classList.add("blendin");
    document.querySelector("#infobox5").classList.add("show");
    document.querySelector("#grounddust5").classList.add("showdust");
  } else if (event.target.id == "planet2-3C") {
    document.querySelector("#dust6").classList.add("blendin");
    document.querySelector("#infobox6").classList.add("show");
    document.querySelector("#grounddust6").classList.add("showdust");
  }
}

init();
