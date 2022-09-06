function openNav() {
    document.getElementById("nav_slide").style.width = "200px";
    document.getElementById("nav_slide").style.paddingRight = "30px";
    document.getElementById("shadow").style.opacity = "0.5";
    document.getElementById("shadow").style.zIndex = "2";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.body.classList.add("stop_scrolling");
    //document.getElementsByTagName("body").overflow = "hidden";
    //html, body {margin: 0; height: 100%; overflow: hidden}
}

function closeNav() {
    document.getElementById("nav_slide").style.width = "0";
    document.getElementById("nav_slide").style.paddingRight = "0";
    document.getElementById("shadow").style.opacity = "0";
    document.getElementById("shadow").style.zIndex = "-1";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.body.classList.add("scrollable_place");
}