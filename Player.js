class Player{
    constructor(){
        this.name = null
        this.index = null
    }
    updateName(){
        var playerIndex = ('player') + this.index;
        database.ref(playerIndex).set({
            name: this.name
        })
    }
    static getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
}
