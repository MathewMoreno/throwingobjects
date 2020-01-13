namespace SpriteKind {
    export const Ammo = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
}
sprites.onOverlap(SpriteKind.Ammo, SpriteKind.Projectile, function (sprite, otherSprite) {
    Raindrops.destroy()
    info.changeScoreBy(1)
})
function Raindrop () {
    Raindrops = sprites.createProjectileFromSprite(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 9 8 8 9 8 8 9 8 8 8 
8 8 8 9 8 9 9 8 8 8 8 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 
8 8 9 8 8 8 8 8 9 8 8 9 8 8 8 9 
8 8 8 8 9 8 8 8 8 8 8 8 9 8 8 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 
8 8 8 8 8 8 8 8 9 9 8 8 8 9 8 9 
8 8 9 8 8 9 8 8 9 8 8 8 8 8 9 8 
8 8 8 8 8 9 8 8 8 9 8 8 8 8 8 8 
8 8 9 8 9 8 8 8 9 9 8 8 8 8 9 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 8 9 8 
8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 8 9 8 
`, Cloudy, 0, 50)
}
function Score () {
    info.changeScoreBy(1)
}
function Hero () {
    mySprite = sprites.create(img`
. a a a . . . . . . . . . . . . 
a a a a a e e e e e . . . . . . 
a a a a a e f e f e . . . . . . 
. . f . . e e e e e . . . . . . 
. . f . . e f f f e . . . . . . 
f . 9 9 . 9 9 9 9 9 . . . . . . 
f f f 9 9 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(80, 105)
    controller.moveSprite(mySprite, 100, 0)
}
function Cloud () {
    Cloudy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f . . . . . 
. . . . . f f f f f 1 f . . . . 
. . . f f 1 1 1 1 1 1 f f . . . 
. f f f 1 1 1 1 1 1 1 1 f f . . 
. f 1 1 1 d 1 1 1 1 1 1 1 f f . 
. f 1 1 1 1 d d d d 1 1 1 1 f f 
. f 1 1 1 1 1 1 1 1 d d d 1 1 f 
. f d d d d d d d d d 1 1 1 1 f 
. f 1 1 1 1 1 1 1 1 1 d d 1 1 f 
. f f 1 1 1 1 1 1 1 1 1 1 1 f f 
. . f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Cloudy.setPosition(80, 15)
    Cloudy.setKind(SpriteKind.Enemy)
}
function Ball () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . a c c a . . . . . . . 
. . a a c c a c c a a . . . . . 
. . a c c a a c c c a a a . . . 
. a c c a a a c a c c a a a a . 
a a c a a a a c a a c c a a a a 
a c c a a a a c a a a c c a a a 
a c a a a a a c a a a a c c c a 
. a a a a a a c a a a a a a c . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . f f . . . 
. . . . . . . f f . . f f . . . 
. . . . . . . f f f f f . . . . 
. . . . . . . . f f f . . . . . 
`, mySprite, 0, -100)
    projectile.setKind(SpriteKind.Ammo)
}
function Walls () {
    tiles.setWallAt(tiles.getTileLocation(1, 16), true)
    tiles.setWallAt(tiles.getTileLocation(2, 16), true)
    tiles.setWallAt(tiles.getTileLocation(3, 16), true)
    tiles.setWallAt(tiles.getTileLocation(4, 16), true)
    tiles.setWallAt(tiles.getTileLocation(5, 16), true)
    tiles.setWallAt(tiles.getTileLocation(6, 16), true)
    tiles.setWallAt(tiles.getTileLocation(7, 16), true)
    tiles.setWallAt(tiles.getTileLocation(8, 16), true)
}
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let Cloudy: Sprite = null
let Raindrops: Sprite = null
info.startCountdown(30)
Hero()
Cloud()
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
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
`,
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))
game.onUpdateInterval(500, function () {
    Ball()
})
forever(function () {
    pause(1500)
    Cloudy.setPosition(Math.randomRange(10, 150), 15)
    Raindrop()
})
