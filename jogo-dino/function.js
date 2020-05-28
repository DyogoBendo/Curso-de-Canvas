var canvas, ALTURA, LARGURA, ctx;
var cactus={
    vet:[],
    tempo:0,
    x:0,
    insere: function(){
        this.vet.push({
            nome:"./assets/cactus_fundo.png",
            x:window.innerWidth,
            l:100
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
            if(this.vet[i].x <= -this.vet[i].l){
                this.vet.splice(i, 1);
            }
        }
    },
    desenha: function(){
         for(i=0; i < this.vet.length; i++){
             v = this.vet[i];
             c1 = new Image();
             c1.src = v.nome;
             ctx.drawImage(c1, v.x, 150, v.l, 150);
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
            x:window.innerWidth,
            l: 100
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
            if(this.vet[i].x <= -this.vet[i].l){
                this.vet.splice(i, 1);
            }
        }

    },
    desenha: function(){
         for(i=0; i < this.vet.length; i++){
             v = this.vet[i];
             c1 = new Image();
             c1.src = v.nome;
             ctx.drawImage(c1, v.x, 30, v.l, 150);
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
    nochao: false,
    desenha:function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    },
    cair: function(){
        if(this.y + this.r <= 270){
            this.y +=5;
        }
        else{
            this.nochao=true;
        }
    },
    pulo: function(){
        this.y -= 150;
        this.nochao=false;
    }
}

var obstaculos={
    vet:[],
    cores:["#00F", "#F00", "#0F0", "#FF0", "#0FF"],
    tempo: 0,
    insere: function(){
        this.vet.push({
            x:window.innerWidth,
            cor: this.cores[Math.floor(5*Math.random())],
            a:50 + Math.floor(30*Math.random()),
            l:40 + Math.floor(20*Math.random()),
        });
        this.tempo=100+Math.floor(50*Math.random());
    },
    atualiza: function(){
        if(this.tempo == 0) this.insere();
        else this.tempo--;

        for(i=0; i< this.vet.length; i++){
            this.vet[i].x -= 6;
            if(this.vet[i].x <= -this.vet[i].l){
                this.vet.splice(i, 1);
            }
        }
    },
    desenha: function(){
        for(i = 0; i < this.vet.length; i++){
            v = this.vet[i];
            ctx.fillStyle = v.cor;
            ctx.fillRect(v.x, (ALTURA -v.a), v.l, v.a);
        }
    }
}

function atualizar(){
    cactus_fundo.atualiza();
    cactus.atualiza();
    obstaculos.atualiza();
    bola.cair();
}

function desenhar(){
    fundoCanvas();
    chao.desenha();
    cactus_fundo.desenha();
    cactus.desenha();
    obstaculos.desenha();
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
function clique(){
    if(bola.nochao){
        bola.pulo();
    }
}
function KeyDown(evt){
    console.log(evt.keyCode);
    switch(evt.keyCode){
        case 65: /** Set para a esquerda */
            bola.x -= 10;
            break;

        case 68: //Seta para a direita
            bola.x += 10;
            break;

    }
}

function main(){
    ALTURA = 300;
    LARGURA = window.innerWidth;
    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    window.addEventListener('keydown', KeyDown, true);
    document.addEventListener("mousedown", clique);
    executar();
}

main();