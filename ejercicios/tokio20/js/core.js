let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')

//Tipografia
//Inserto texto y establezco tamaño y fuente
//left, alineado a la izquierda.
//right, alineado a la derecha.
//center, texto centrado.
//Color azul duke
//Texto
context.font ='215px BOLF'
context.fillStyle = '#001a57';
context.textAlign = 'center'
context.fillText("TOKYO 2020", 710, 175,)
//ARRI_ABA

//Circulo Azul
context.beginPath();
context.arc(300,375,180,0,Math.PI*2,true);
context.strokeStyle = '#0392D2';
context.lineWidth="18";
context.stroke();
//Circulo Negro
context.beginPath();
context.arc(720,375,180,0,Math.PI*2,true);
context.strokeStyle = '#0B0A0A';
context.lineWidth="18";
context.stroke();
//Circulo Rojo
context.beginPath();
context.arc(1140,375,180,0,Math.PI*2,true);
context.strokeStyle = '#FF0000';
context.lineWidth="18";
context.stroke();
//Circulo Amarillo
context.beginPath();
context.arc(510,600,180,0,Math.PI*2,true);
context.strokeStyle = '#E7C700';
context.lineWidth="18";
context.stroke();
//Circulo Verde
context.beginPath();
context.arc(930,600,180,0,Math.PI*2,true);
context.strokeStyle = '#1ABC35';
context.lineWidth="18";
context.stroke();

/*
context.arc( 200, 200, 150, Math.PI*, Math.PI*2, )
context.fillStyle = '#F3FBB0'
context.fill()
context.lineWidth = 5
context.strokeStyle = '#705E78'
context.stroke()

Canvas API provee 3 metodos para 
- Limpiar -> clearRect(double x, double y, double w, double h)
- Dibujar -> strokeRect(double x, double y, double w, double h)
- Rellenar -> fillRect(double x, double y, double w, double h)
*/
