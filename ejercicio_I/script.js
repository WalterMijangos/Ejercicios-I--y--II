function alternarcolor(){
    const color = ["blue", "red", "yellow", "green", "lightblue", "pink", "brown", "purple","DarkRed","Magenta","DarkGreen","LightSeaGreen","SteelBlue","DarkGoldenrod","black"];
    const alt = Math.floor(Math.random() * color.length);
    return color[alt];
}

document.getElementById("boton").onclick = function(){
    const parrafo = document.getElementById("parrado");
    parrafo.style.color = alternarcolor();
}

document.getElementById("titulo").onmouseover = function() {
    this.style.color = alternarcolor();
}

document.getElementById("titulo").onmouseout = function() {
    this.style.color = alternarcolor();
}