class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
        }
    start(){
        console.log("start");
        form.hide();
        background(128)
        if(keyIsDown(UP_ARROW)){
            fighter1.velocity.y = -10
        }
        if(keyIsDown(DOWN_ARROW)){
            fighter1.velocity.y = 10
        }
        drawSprites();
    }
    }
