var numImagen = 0;
var imagenes = [
  '/img/packaging.png',
  '/img/packaging2.jpg',
  '/img/packaging3.jpg'
]

var imagenes2 = [
  '/galery/fondo2.jpeg',
  '/galery/fondo3.jpeg',
  '/galery/fondo4.jpeg',
  '/galery/fondo5.jpeg',
  '/galery/fondo6.jpeg'
]
setInterval(function(){
  var imgActual = imagenes[numImagen];
  var dir = imgActual;
  $("#pag-index").css("backgroundImage", "linear-gradient(rgba(249, 141, 17,0.7),rgba(249, 141, 17,0.7)), url(" + dir + ")");

  if(numImagen + 1 == imagenes.length){
    numImagen = 0;
  } else {
    numImagen++;
  }

} ,1500);

setInterval(function(){
  var imgActual = imagenes2[numImagen];
  var dir = imgActual;
  $("#Galle").css("backgroundImage", "linear-gradient(rgba(0, 0, 0,0.5),rgba(0, 0, 0,0.5)), url(" + dir + ")");

  if(numImagen + 1 == imagenes.length){
    numImagen = 0;
  } else {
    numImagen++;
  }

} ,2000);

var navbar = document.getElementById("navbar");
  var menu = document.getElementById("menu")

  window.onscroll = function(){
    if(window.pageYOffset > menu.offsetTop){
      document.getElementById("logos").setAttribute("src","/img/PNG .png");
      document.getElementById("Menu").style.background = "#F98D11"
      for(i=1;i<6;i++){
         $("#A"+i).css('color','#303030');
         document.getElementById("A"+i).style.textShadow = "none"
      }
        navbar.classList.add("sticky")
        
    }else{
        navbar.classList.remove("sticky")
        document.getElementById("logos").setAttribute("src","/img/POSITIVO.png");
        document.getElementById("Menu").style.background = "#000B47"
        for(i=1;i<6;i++){
          $("#A"+i).css('color','#fff');
          document.getElementById("A"+i).style.textShadow = '2px 1px 2px rgba(0, 0, 0, 0.9)';
        }
        
    }
  }

  document.getElementById("Menu").addEventListener('click', function(){
    document.getElementById("Center").classList.add("menu");
  })

  document.getElementById("cerrar2").addEventListener('click', function(){
    document.getElementById("Center").classList.remove("menu");
  })

  function desvanecer(){
    document.getElementById("Center").classList.remove("menu");
  }

  window.addEventListener('click', function(e){
    if(e.target ==  document.getElementById("Center")){
      document.getElementById("Center").classList.remove("menu");
    }
  })

function Store(){
    window.open("https://store.jdpropacksolutions.com/","_self");
}