namespace SpriteKind {
    export const Pilzli = SpriteKind.create()
    export const geistli = SpriteKind.create()
    export const Fireball = SpriteKind.create()
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    music.pewPew.play()
    info.changeLifeBy(-1)
    scene.placeOnRandomTile(boy, 8)
})
function setStage () {
    scene.setTileMap(levels[currentLevel])
    scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
6 6 7 6 7 6 7 6 6 d 6 7 7 6 7 7 
d d 6 7 7 6 7 d d d 7 6 d 6 7 6 
d d d d d d 6 d d d d d d d 6 d 
d d d d d d d d d d d d d d d d 
d 1 1 d 1 d d d d d 1 d d d d d 
d 1 1 d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d b d d d d d d d 1 d 
d d d d d d d d d d d d d d d d 
d d b d d d d d d d d b b d d d 
d d d d d d d d d d d b b d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d 1 d d d d d d d d 
d d d d d d d d d d d d d d 1 d 
`, true)
    scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(4, img`
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
. . . . . . . . . . . . . . 1 . 
`, false)
    scene.setTile(3, img`
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
. . . . . . . . . . . . . . 1 . 
`, false)
    scene.setTile(8, img`
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
`, false)
    scene.setTile(10, img`
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
`, false)
    scene.placeOnRandomTile(boy, 8)
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Pilzli)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.geistli)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Fireball)) {
        value.destroy()
    }
    for (let value of scene.getTilesByType(4)) {
        coins = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        value.place(coins)
        animation.runImageAnimation(
        coins,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . f 5 5 4 5 5 5 5 4 5 5 f . . 
. . . f 5 5 4 4 4 4 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . f 5 5 4 5 5 4 5 5 f . . . 
. . . . f 5 5 4 4 5 5 f . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
        100,
        true
        )
    }
    for (let value of scene.getTilesByType(3)) {
        Pilz = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . b b b b . . . . . . 
. . . . b b 3 3 3 3 b b . . . . 
. . . c b 3 3 3 3 1 1 b c . . . 
. . c b 3 3 3 3 3 1 1 1 b c . . 
. c b 1 1 1 3 3 3 3 1 1 3 c c . 
c b d 1 1 1 3 3 3 3 3 3 3 b b c 
c b b d 1 3 3 3 3 3 1 1 1 b b c 
c b b b 3 3 1 1 3 3 1 1 d d b c 
. c b b b d d 1 1 3 b d d d c . 
. . c c b b d d b b b b c c . . 
. . . . c c c c c c c c . . . . 
. . . . . b b d 1 1 b . . . . . 
. . . . . b d d 1 1 b . . . . . 
`, SpriteKind.Pilzli)
        value.place(Pilz)
    }
    for (let value of scene.getTilesByType(10)) {
        Fireball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Fireball)
        value.place(Fireball)
        animation.runMovementAnimation(
        Fireball,
        "c 0 -160 0 80 0 0",
        2000,
        true
        )
        Fireball.startEffect(effects.fire)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pilzli, function (sprite, otherSprite) {
    otherSprite.destroy()
    geist = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.geistli)
    animation.runImageAnimation(
    geist,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    geist.setPosition(scene.screenWidth() + boy.x, 0)
    geist.follow(boy, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Player, 0, function (sprite) {
    if (boy.isHittingTile(CollisionDirection.Bottom)) {
        game.over(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (boy.vy == 0) {
        boy.vy = -190
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    currentLevel += 1
    if (currentLevel == levels.length) {
        game.over(true)
    } else {
        setStage()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.geistli, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.bottom) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
let geist: Sprite = null
let Fireball: Sprite = null
let Pilz: Sprite = null
let coins: Sprite = null
let levels: Image[] = []
let currentLevel = 0
let boy: Sprite = null
scene.setBackgroundColor(9)
boy = sprites.create(img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f f . 
f f e 4 e 1 f 4 4 f f . . 
. f f f e 4 4 4 4 f . . . 
. 4 4 4 e e e e f f . . . 
. e 4 4 e 7 7 7 7 f . . . 
. f e e f 6 6 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`, SpriteKind.Player)
info.setLife(5)
controller.moveSprite(boy, 100, 0)
boy.ay = 350
currentLevel = 0
levels = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 4 3 4 4 4 3 . . . . . . . . . . 
. . . a . . . 4 7 . . . . . . a 7 7 7 7 7 7 . . . . . . . . . 2 
. . . . . . 4 7 . . . . . . . . . . . . . . . . . . . . . a . 7 
. . . . 3 4 7 . . . . . 3 3 . . . . . . . . . 4 4 3 . . . . 3 . 
. . . 7 7 7 . . . . . 7 7 7 7 7 . . . . . . 7 7 7 7 . . . . 7 . 
8 . . . . . . . . 4 . . . . . . . . . . . . . . . . . 3 . . . . 
7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . 7 7 7 . . . 
`, img`
8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 4 3 4 4 4 3 a . . . . . . . . . 
. . . . . . . 4 7 . . . . . . . 7 7 7 7 7 7 . . . . . . . a . 2 
. . . . . . 4 7 a . . . . . . a . . . . . . a . . . . . . . . 7 
. . . . 3 4 7 a . . . . 3 3 . . . . . . . . . 4 4 3 . . . . 3 . 
. . . 7 7 7 a . . . . 7 7 7 7 7 . . . . . . 7 7 7 7 . . . a 7 . 
4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . 3 . . . . 
7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 7 7 7 . . . 
`, img`
8 4 4 3 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 . 3 . 3 . . . 3 . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 7 7 . . . 7 7 7 7 . . . . . . . . . . . . . 2 
. . . . . . . . . . . . 3 . . . . 7 . . . . . . . . . . . . . 7 
. . . . . . . . . . . . 7 . . . . 7 3 . . . . . . . . 3 . 7 . . 
4 4 4 4 4 4 4 4 4 4 . . . . . . . 7 7 3 . . . . . . . 7 . . . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 7 7 7 7 7 7 7 3 . . . . . . 
7 7 7 7 7 7 7 7 7 7 . 7 . 7 . . . . . . . . . . 7 7 . . . . . . 
`]
scene.cameraFollowSprite(boy)
setStage()
game.onUpdate(function () {
    if (boy.vy > 0) {
        boy.setImage(img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f e . . 
. . e 4 4 e 7 7 7 f 4 e . 
. . e 4 4 e 7 7 7 f 4 e . 
. . f e e f 6 6 6 f e . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`)
    } else if (boy.vy < 0) {
        boy.setImage(img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f e . 
. f e 4 e 1 f 4 4 f 4 4 e 
. f f f e 4 4 4 4 f 4 4 e 
. . f e e e e e f f e e . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`)
    } else {
        boy.setImage(img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f f . 
f f e 4 e 1 f 4 4 f f . . 
. f f f e 4 4 4 4 f . . . 
. 4 4 4 e e e e f f . . . 
. e 4 4 e 7 7 7 7 f . . . 
. f e e f 6 6 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`)
    }
    if (0 == boy.x % 2) {
        boy.setImage(img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f f . . 
. f f f e e 4 4 4 f . . . 
. . f e 4 4 e e f f . . . 
. . f e 4 4 e 7 7 f . . . 
. f f f e e f 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f f . . . f f . . . 
`)
    } else {
        boy.setImage(img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f f . 
f f e 4 e 1 f 4 4 f f . . 
. f f f e 4 4 4 4 f . . . 
. 4 4 4 e e e e f f . . . 
. e 4 4 e 7 7 7 7 f . . . 
. f e e f 6 6 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`)
    }
    if (boy.vx < 0) {
        boy.image.flipX()
    }
})
