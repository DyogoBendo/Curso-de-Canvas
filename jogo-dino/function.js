<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>   
</head>    
<body>
    <header>
        Conservação da Energia Mecânica
    </header>
    <main>        
        <input type="range" min="0" max="10" step="1" list="steplist" id="vi" name="vi">
        <label for="vi">Velocidade Inicial</label>
        
        <input type="range" min="0" max="10" step="1" list="steplist" id="hi" name="hi">
        <label for="hi">Altura Inicial</label>

        <input type="range" min="0" max="10" step="1" list="steplist" id="hr" name="hr">
        <label for="hr">Altura de Referência</label>
        
        <canvas id="canvas">

        </canvas>
    </main>
</body>

<script>
    function fundoCanvas(){
        ctx.fillStyle='green';
        ctx.fillRect(0, 0, 1000, 1000);
    }
    var bola={
    r:20,
    x:20,
    y:0,
    cor:"#FFFF00",
    nochao: false,
    desenha:function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    },
    cair: function(){
        if(this.y + this.r <= 1000){
            this.y +=20; 
        } else{
            if (!this.nochao){
                var date2 = Date.now();
                var diff = date2 - date1;
                console.log(diff);
            } 
            this.nochao = true;
        }
        
    }    
}
function atualizar(){
    bola.cair();
}

function desenhar(){
    fundoCanvas();
    bola.desenha();
}
function executar(){
    desenhar();
    atualizar();
    setTimeout(executar, 20);
}

    var date1 = Date.now();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
    executar()


</script>
</html>
