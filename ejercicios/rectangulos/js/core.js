let canvas = document.getElementById('canvas'),
context = canvas.getContext('2d')

/*
    Canvas API provee 3 metodos para 
    - Limpiar -> clearRect(double x, double y, double w, double h)
    - Dibujar -> strokeRect(double x, double y, double w, double h)
    - Rellenar -> fillRect(double x, double y, double w, double h)
*/
context.lineWidth = 15
context.strokeStyle = '#00FF00'
context.strokeRect(25, 100, 80, 80)


context.fillStyle = '#FF0000'
context.fillRect(115,100, 80, 80)
//TIPOGRAFIA 
context.fillStyle = '#000000';
context.font = '24px Helvetica'
context.fillText("Presiona para limpiar", 150, 150)

//context.clearRect(0, 0, 500, 150)
//console.log(`Ancho : ${canvas.width} Alto: ${canvas.height}	`)
//console.log('Texto concatenado ->Ancho: '+ canvas.width +' Alto: '+ canvas.height)
 
//context.canvas.onmousedown = function () {
//    console.clearRect(0, 0, canvas.width, canvas.height)
//}

canvas.addEventListener( 'click', function () {
    console.log(' Limpiando canvas ')
    context.clearRect(0, 0, canvas.width, canvas.height)
} )