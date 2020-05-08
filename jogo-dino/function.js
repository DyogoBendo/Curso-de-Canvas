var canvas, ALTURA, LARGURA, ctx;
var cactus={
    vet:[],
    tempo:0,
    x:0,
    insere: function(){
        this.vet.push({
            nome:"./assets/cactus.png",
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

function atualizar(){
    cactus.atualiza();

}

function desenhar(){
    fundoCanvas();
    cactus.desenha();
}

function executar(){
    desenhar();
    atualizar();
    window.requestAnimationFrame(executar);
}

function fundoCanvas(){
    gradiente = ctx.createLinearGradient(0, 0, LARGURA, ALTURA);
    gradiente.addColorStop(0, "#070719");
    gradiente.addColorStop(1, "#58d3f7");
    ctx.fillStyle=gradiente;
    ctx.fillRect(0, 0, LARGURA, ALTURA);
}

function main(){
    ALTURA = 200;
    LARGURA = window.innerWidth;
    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    executar();
}

main();