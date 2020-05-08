var canvas; // Eh a tela
var ALTURA, LARGURA;
var ctx; // Eh a que recebe o que eh incluido dentro do canvas
var circulo, quadrado, triangulo;
var desenharCirculo={
    raio:80,
    x:300,
    y:300,
    dir: 0,
    cor: "#002776",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor;
        ctx.arc(this.x, this.y, this.raio, 0, Math.PI*2);
        ctx.fill();
    },
    mover: function(){
        if(this.x>=350) this.dir = 1;
        if(this.x <= 250) this.dir = 0;
        if(this.dir == 0)
            this.x++;
        else
            this.x--;
    }
}

var desenharQuadrado={
    l:500,
    a:300,
    x:50,
    y:150,
    dir: 0,
    cor: "#009b3a",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.l, this.a);
    },
    mover: function(){
        if(this.x>=100) this.dir = 1;
        if(this.x <=0) this.dir = 0;
        if(this.dir == 0)
            this.x++;
        else
            this.x--;
    }
}

var desenhaLosangulo={
    cor:"#fedf00",
    dir: 0,
    x1: 300, x2: 80, x3: 300, x4: 520,
    y1: 180, y2: 300, y3: 420, y4: 300,
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.lineTo(this.x4, this.y4);
        ctx.fill();
    },
    mover: function(){
        if(this.x1>=350) this.dir = 1;
        if(this.x1 <=250) this.dir = 0;
        if(this.dir == 0){
            this.x1++;
            this.x2++;
            this.x3++;
            this.x4++;
        }else{
            this.x1--;
            this.x2--;
            this.x3--;
            this.x4--;
        }
    }
}

var desenhaFaixa={
    dir: 0,
    cor:"#FFFFFF",
    lado: 160,
    altura: 30,
    x: 220,
    y: 285,
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.lado, this.altura);
    },
    mover: function(){
        if(this.x>=270) this.dir = 1;
        if(this.x <=170) this.dir = 0;
        if(this.dir == 0)
        this.x+= 1;
        else{
            this.x--;
        }
    }
}

function desenha(){
    fundoCanvas();
    desenharQuadrado.desenha();
    desenhaLosangulo.desenha();
    desenharCirculo.desenha();
    desenhaFaixa.desenha();

}

function atualizar(){
    desenharCirculo.mover();
    desenhaFaixa.mover();
    desenhaLosangulo.mover();
    desenharQuadrado.mover();
}

function executar(){
    desenha();
    atualizar();
    window.requestAnimationFrame(executar);
}

function fundoCanvas(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, LARGURA, ALTURA)
}

function main(){
    ALTURA=window.innerHeight;
    LARGURA=window.innerWidth;
    if(LARGURA >=500){
        LARGURA = 600;
        ALTURA = 600;
    }
    canvas = window.document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    executar();
}