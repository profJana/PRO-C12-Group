# PRO-C12-Group

- adicionar frameRate(50) e ir mudando o valor para parar de tremer
- criar a variável chaoImg
- chaoImg = loadImage('ground2.png')
- chao.addImage("chao", chaoImg);
- ajustar o y do chao
- criar a variável chaoInvisivel
- chaoInvisivel = createSprite(300,195,600,20)
- chaoInvisivel.visible = false;
- alterar os collide de chao para chaoInvisivel
- chao.velocityX = -4; (esperar correr tudo e ver que chega uma hora que acaba)
- if (chao.x < 0){
    chao.x = chao.width/2; 
    console.log("x do chao" + chao.x)
  }
- criar a variável velocidadeChao e trocar no local adequado para melhor manutenção de código
- garantir que só de pra pular uma vez:
- var noChao = trex.collide(chaoInvisivel);
- if (noChao && keyDown("space")) {
    trex.velocityY = forcaPulo;
    console.log(trex.y)
  }
- if (!noChao) {
    trex.velocityY += gravidade;
    console.log(trex.y)
  }
- colocar consoles logs no código para testar
