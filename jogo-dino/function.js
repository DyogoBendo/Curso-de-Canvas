var canvas, ALTURA, LARGURA, ctx;
var cactus={
    vet:[],
    tempo:0,
    x:0,
    insere: function(){
        this.vet.push({
            nome:"./assets/cactus_fundo.png",
            x:window.innerWidth
        });
        this.tempo = 150;
    },
    atualiza: function(){
        if(this.tempo == 0){
            this.insere();
        }
        else{
            this.tempo--;
        }
        for(i=0; i<this.vet.length; i++){
            v = this.vet[i]
            v.x-=3;

        }
    },
    desenha: function(){
         for(i=0; i < this.vet.length; i++){
             v = this.vet[i];
             c1 = new Image();
             c1.src = v.nome;
             ctx.drawImage(c1, v.x, 150, 100, 150);
         }
    }
}

var cactus_fundo={
    vet:[],
    tempo:0,
    x:0,
    insere: function(){
        this.vet.push({
            nome:"./assets/cactus1.png",
            x:window.innerWidth
        });
        this.tempo = 400;
    },
    atualiza: function(){
        if(this.tempo == 0){
            this.insere();
        }
        else{
            this.tempo--;
        }
        for(i=0; i<this.vet.length; i++){
            v = this.vet[i]
            v.x--;

        }
    },
    desenha: function(){
         for(i=0; i < this.vet.length; i++){
             v = this.vet[i];
             c1 = new Image();
             c1.src = v.nome;
             ctx.drawImage(c1, v.x, 30, 100, 150);
         }
    }
}

var chao={
    a:150,
    x:0,
    y:150,
    cor:"#2A120A",
    desenha:function(){
        ctx.fillStyle=this.cor;
        ctx.fillRect(this.x, this.y, LARGURA, this.a)
    }

}

var bola={
    r:20,
    x:20,
    y:0,
    cor:"#FFFF00",
    desenha:function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    },
    cair: function(){
        if(this.y + this.r <= 250){
            this.y +=2;
        }
    }
}

function atualizar(){
    cactus_fundo.atualiza();
    cactus.atualiza();
    bola.cair();
}

function desenhar(){
    fundoCanvas();
    chao.desenha();
    cactus_fundo.desenha();
    cactus.desenha();
    bola.desenha();
}

function executar(){
    desenhar();
    atualizar();
    window.requestAnimationFrame(executar);
}

function fundoCanvas(){
    gradiente = ctx.createLinearGradient(0, 0, 0, ALTURA);
    gradiente.addColorStop(0, "#070719");
    gradiente.addColorStop(1, "#58d3f7");
    ctx.fillStyle=gradiente;
    ctx.fillRect(0, 0, LARGURA, ALTURA);
}

function main(){
    ALTURA = 300;
    LARGURA = window.innerWidth;
    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    executar();
}

main();