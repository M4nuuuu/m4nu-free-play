scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.showLongText("ma guarda un albero!", DialogLayout.Bottom)
    game.showLongText("non siamo su fortnite ma facciamo materiale!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.showLongText("*CESPUGLIO*", DialogLayout.Bottom)
    game.showLongText("BANANA ARRABIATA!", DialogLayout.Bottom)
    music.playMelody("F G F F G F F F ", 120)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    game.showLongText("chissà perchè quest'erba è scura....", DialogLayout.Bottom)
    game.showLongText("*da lontano* MA MANNAGGIA AL WALL MARIA!!!", DialogLayout.Bottom)
    game.showLongText("ma che....", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.showLongText("BOOM", DialogLayout.Bottom)
    tiles.setTilemap(tiles.createTilemap(hex`1000100004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404070405050504070404040404040404040605070707050604040409090904040406040707070506040409080808090404060406060604060404080808080804040406060606060404040505020505040404040606060404040402020502020404040406060604040404040202020404040404050505040404040404040404040101010505050101010101010101010101010105050501010101010101010101010102030303020101010101010101010101010202020101010101010101010101010101010101010101010101010101`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13], TileScale.Sixteen))
    game.showLongText("CHE FIGATA!!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles28, function (sprite, location) {
    game.showLongText("Manuel sei così fantasioso che per mettere altro nella mappa hai messo delle stupide rocce", DialogLayout.Bottom)
    game.showLongText("M4nu:STEVO vengo lì e ti faccio fare splosh", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles22, function (sprite, location) {
    game.showLongText("PIKACHU SELVATICO TI ATTACCA!!", DialogLayout.Bottom)
    tiles.setTilemap(tiles.createTilemap(hex`1000100005050505050505050505050505050505050505050505050505050505050505050505050505040404050505050505040405050505050409040405050504040409050505050504030304040504040303040505060606060403030404040303040405060808080604040303030303040404050508080805050403040304030404090805070707050804030303030304040305070707070705040803030308040304050507070705050403030803040304040505060606050504030303030304040401050606060101010101010101010101010106060601010101010101010101010102040404020101010101010101010101010202020101010101010101010101`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile6], TileScale.Sixteen))
    game.showLongText("COLPIAMOLO ALLA CODA O ALLE ANTENNE PRESTO!!", DialogLayout.Bottom)
    tiles.placeOnRandomTile(STEVO, myTiles.tile9)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.showLongText("qui a terra c'e un orologio", DialogLayout.Bottom)
    game.showLongText("DAJE LO PRENDO", DialogLayout.Bottom)
    game.showLongText("( hai preso l'orologio come un buon napoletano)", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`100010000a020202020909090909090202020205040101010109070909090901010101060401010101090909090909010909090604010909090101010101010109090906040109080901010101010109080909060401090809010101010101090709010604010101010109090901010909090106040909090101090809010109010101060409080901010909080909090101010604090909010101010808080901010e06040101010101010101090809010101060401010101010101090908010101010604010108080801010908080101010106040101080b08010109080901010101060d010108080801010101010101010c0c0d0d0303030303030303030303030c0c`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles28,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles22], TileScale.Sixteen))
})
let STEVO: Sprite = null
info.setScore(2317)
STEVO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e 3 3 3 3 3 e . . . . . 
    . . . . e 1 8 3 8 1 . . . . . . 
    . . . . . 3 3 2 3 3 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 3 6 6 6 3 . 9 9 . . . 
    . . . . . 3 6 6 6 3 . . 9 9 . . 
    . . . . . 3 6 6 6 3 e e e 9 9 . 
    . . . . . . e e e . . . 9 9 . . 
    . . . . . . e e e . . 9 9 . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(STEVO, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`100010000a020202020909090909090202020205040101010109070909090901010101060401010101090909090909010909090604010909090101010101010109090906040109080901010101010109080909060401090809010101010101090709010604010101010109090901010909090106040909090101090809010109010101060409080901010909080909090101010604090909010101010808080901010e06040101010101010101090809010101060401010101010101090908010101010604010108080801010908080101010106040101080b08010109080901010101060d010108080801010101010101010c0c0d0d0303030303030303030303030c0c`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles28,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles22], TileScale.Sixteen))
tiles.placeOnRandomTile(STEVO, sprites.castle.tilePath5)
scene.cameraFollowSprite(STEVO)
game.showLongText("CIAOOO GIOCHIAMO UN PO' INSIEME ESPLORANDO IL POSTO", DialogLayout.Bottom)
game.showLongText("questo è un gioco \"free play\" quindi cazzeggia quanto ti pare :)", DialogLayout.Bottom)
info.startCountdown(6000)
