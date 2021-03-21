let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d');
    //P1
    context.beginPath();//Comenzar a dibujar
    context.strokeStyle = '#0191919';//ColorHex
    context.moveTo(305, 100);
    context.lineTo(330, 50);//posic_Ini_Fin
    context.lineTo(350, 100)
    context.lineWidth = 3;
    context.stroke();
    context.closePath();//Terminar de dibujar
    //P2
    context.beginPath();
    context.strokeStyle = '#001a57';
    context.moveTo(350, 100);
    context.lineTo(400, 100);
    context.lineTo(364, 140)
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    //p3
    context.beginPath();
    context.strokeStyle = '#AEA10E';
    context.moveTo(364, 140);
    context.lineTo(380, 190);
    context.lineTo(330, 150)
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    //P4
    context.beginPath();
    context.strokeStyle = '#9A360E';
    context.moveTo(330, 150);
    context.lineTo(270, 190);
    context.lineTo(290, 140)
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
   
    //P5
    context.beginPath();
    context.strokeStyle = '#FF0000';
    context.moveTo(290, 140);
    context.lineTo(260, 100);
    context.lineTo(310, 100)
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
