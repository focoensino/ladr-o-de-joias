var ladrão,diamante,laser1,laser2,paredes
var estadoJogo

function setup() {
  createCanvas(400, 400);
montarjogo()
  estadoJogo ="parado"
}

function draw() {
  background(0);
  
drawSprites()
  
  
 if(estadoJogo=="parado"){
   textSize(20)
   fill('white')
   text("pressione ESPAÇO para iniciar",60,188)
   
   if(keyDown('SPACE')){
     laser1.velocityY =5
     laser2.velocityY  = -5
     estadoJogo ="play"   
     
   }
   
 } 
  
  if(estadoJogo =="play"){ 
    
    laser1.bounceOff(paredes)
     laser2.bounceOff(paredes)
    
    if(keyDown("left")){
      
      ladrao.x = ladrao.x - 4
     
    }else if(keyDown("right")){
       ladrao.x = ladrao.x + 4
      
    }else if(keyDown("up")){
    
      
      
       ladrao.y = ladrao.y -4
    
        
      }else if(keyDown("down")){
        
        ladrao.y = ladrao.y + 4
      }
    
  
    
  ladrao.collide(paredes)

if(

 ladrao.isTouching(laser1)||
   ladrao.isTouching(laser2)
  
  
){
  
    estadoJogo = "gameOver"
  
}
  if(ladrao.isTouching(diamante)){
    
    estadoJogo = 'winner'
    
  }
  
   
    
  }
  

  
  if(estadoJogo =="gameOver"){
    
    fimDeJogo()
    fill("red")
     textSize(40)
     text("o ladrao foi capiturado",7,200)
    textSize(15)
    text("pressione R para iniciar",100,250)
    
    if(keyDown('r')){
      estadoJogo = 'parado'
      montarjogo()
      
    }
    

                                
      
    }
    
  
  
  
  if(estadoJogo =="winner"){
    
    fimDeJogo()
    textSize(30)
     fill('red')
    text('o diamante foi roubado',50,200)
    
      textSize(15)
    text("pressione R para iniciar",100,250)
   if(keyDown('r')){
      estadoJogo = 'parado'
      montarjogo()
    
    
    
  }

}
  
  
  
  
  
  }
  
  
function montarjogo(){
  
   ladrao = createSprite(200,390,20,20)  
  diamante = createSprite(360,20,20,20)
  laser1 = createSprite(100,200,200,10)
  laser1.shapeColor = "blue"
 laser2 = createSprite(300,200,200,10)
 diamante.shapeColor = "#00D8F0"
  ladrao.shapeColor="#F0DC18"
  
  paredes = createEdgeSprites()
 
} 
  
  function fimDeJogo(){
    ladrao.remove()
    diamante.remove()
    laser1.remove()
    laser2.remove()
  }