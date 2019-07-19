const colores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
const paleta = document.getElementById('paleta');
const grilla = document.getElementById('grilla');
const colorSeleccionado = document.getElementById('seleccionado');
let clickActivo = false;
const borrarBoton = document.getElementById('borrar-todo');
const pintarFondo = document.getElementById('pintar-fondo');


const crearPaleta = function () {
  for (let i = 0; i < colores.length; i++) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.style.backgroundColor = colores[i];
    color.onclick = function () {
      colorSeleccionado.style.backgroundColor = colores[i];
    }
    paleta.appendChild(color);
  }
}

const crearGrilla = function (filas, columnas) {
  for (let i = 0; i < filas; i++) {
    const fila = document.createElement('div');
    fila.classList.add('fila');
    grilla.appendChild(fila);

    for (let j = 0; j < columnas; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.onclick = function () {
        pixel.style.backgroundColor = colorSeleccionado.style.backgroundColor;
      }
      pixel.onmousedown = function () {
        clickActivo = true;
      }
      pixel.onmouseup = function () {
        clickActivo = false;
      }
      pixel.onmousemove = function () {
        if (clickActivo) {
          pixel.style.backgroundColor = colorSeleccionado.style.backgroundColor;
        }
      }
      fila.appendChild(pixel);
    }
  }
}


pintarFondo.onclick = function () {
  const colorFondo = document.getElementsByClassName('pixel');
  for (let i = 0; i < colorFondo.length; i++) {
    colorFondo[i].style.backgroundColor = colorSeleccionado.style.backgroundColor;
  }
}


borrarBoton.onclick = function () {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
  }
}


crearPaleta();
crearGrilla(50, 50);
