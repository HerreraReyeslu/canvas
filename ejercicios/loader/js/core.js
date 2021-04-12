let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')

    //console.log( Math.PI)

context.arc( 200, 200, 150, Math.PI*0, Math.PI*2, false )
context.fillStyle = 'White'
context.fill()
context.lineWidth = 5
context.strokeStyle = 'BLUE'
context.stroke()

context.font ='35px BOLF'
context.fillStyle = '#001a57';
context.textAlign = 'center'
context.fillText("                                         Intente darle movimiento con JS,creo es posible pero no como rotacion.", 710, 175,)

context.font ='35px BOLF'
context.fillStyle = '#001a57';
context.textAlign = 'center'
context.fillText("           Lo añadi como Gif sin CSS, jeje.", 810, 275,)

context.font ='35px BOLF'
context.fillStyle = '#001a57';
context.textAlign = 'center'
context.fillText("Con CSS.", 910, 375,)

