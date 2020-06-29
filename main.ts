controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.x += -5
    Phil.setImage(img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. f f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f f 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e 4 4 4 . 
. . . f 7 7 7 7 e 4 4 e . 
. . f f 6 6 6 6 f e e f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.y += 5
    Phil.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.setImage(img`
. . . . . . . . . . . . . 
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f c f f f f f f . . 
c f f f c c f f f f f f f 
c f f f f f f f c f f f f 
c c f f e e f f f c c c . 
f c c f f e e f f f f f . 
f f f b f e e f b f f f . 
f f 4 1 f 4 4 f 1 4 f f . 
e f e e 4 4 4 4 4 e f . . 
e 4 4 4 e 7 7 7 b f e f . 
. e 4 4 e 7 7 7 7 f 4 e . 
. . e e 6 6 6 6 6 f . . . 
. . . f f f f f f f . . . 
. . . . . . . f f f . . . 
`)
    pause(500)
    Phil.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . f f 2 f . . . . . . . . 
. . . f f 2 2 f . . . . . . . . 
. f f f f 2 2 f f f f f f f f . 
f f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f f f f 2 2 2 f f f f f f f f . 
. . f f 2 2 2 f . . . . . . . . 
. . . f f f 2 f . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Phil, -50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Phil.say("Hello, can I help you?", 200)
    pause(500)
    music.pewPew.play()
    info.changeLifeBy(-1)
    for (let index = 0; index < 4; index++) {
        Visitor.say("Is this where the next show is?", 1000)
        pause(1000)
        Visitor.say("Where are the toilets?", 1000)
        pause(1000)
        Visitor.say("Can my kids eat here?", 1000)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Props.setPosition(Math.randomRange(10, 90), Math.randomRange(10, 110))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Visitor.x += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.setImage(img`
. . . . . . . . . . . . . 
. . . . . f f f f . . . . 
. . . f f c c c c f f . . 
. . f f c c c c c c f f . 
. f f f c c c c c c c f f 
f f f c c c c c c c c c f 
f f c c c f c c c c c c f 
. f f f f f c c c f c f f 
. f f f f c c f f c f f f 
. . f f f f f f f f f f f 
. . f f f f f f f f f f . 
. . f f f f f f f f f e . 
. f e f f f f f f f f e . 
. e 4 4 e 7 7 7 7 7 c 4 . 
. . e e f f f f f f f e . 
. . . . . . . . f f f . . 
`)
    pause(500)
    Phil.setImage(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.x += 5
    Phil.setImage(img`
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
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Phil.y += -5
    Phil.setImage(img`
. . . . f f f f . . . . . 
. . f f c c c c f f . . . 
. f f c c c c c c f f . . 
f f c c c c c c c c f f . 
f f c c f c c c c c c f . 
f f f f f c c c f c c f . 
f f f f c c c f c c f f . 
f f f f f f f f f f f f . 
f f f f f f f f f f f f . 
. f f f f f f f f f f . . 
. f f f f f f f f f f . . 
f e f f f f f f f f e f . 
e 4 f 7 7 7 7 7 7 c 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`)
})
let projectile: Sprite = null
let Props: Sprite = null
let Visitor: Sprite = null
let Phil: Sprite = null
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f f f f f f f f f f f f f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f f f f f f f f f f f f f f f f f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e e e e e e e e e e e e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 2 f d d d d d d f e e e e e e e e e e e e e e e f d d d d d d d d f 1 1 1 1 1 1 1 1 f d d d d d d d d d f e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d f f f f f f f f f f d d d d d d f f f f f f f f f f f f f f f f f d d d d d d d d f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f f f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d e e e e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f f f f f f f f f f f f f f f f f f f f f d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f f f f f f f f f f f f f f f f d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f f f f f f d d d d f 1 1 1 1 f d d e e e e e e e e e e e e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f e e e e e e e e f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d f f f f f f f f f f f f f f f f f f f f f d d d d f f f f f f f f f f d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d f 1 1 1 1 f d d d d f 1 1 1 1 f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d f f f f f f f f f f f f f f f d d d d f f f f f f d d d d f f f f f f d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d e e e e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f f f f f f f f f f f f f f f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f f f f f f f f f f f f f f f f f f f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e e e e e e e e e e e e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 f d d d d d d d f e e e e e e e e e e e e e f d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f f f f f f d d d d d d d e d d d d d d d d d d e e e e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e d d d d e e e e e e d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d 
d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d d d d d d d d d d d d d d d d d f e e e e e e f d d d d d d d d d f f f f f f f f f f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d e e e e e e e d d d d d d d f d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f f f f f f f f f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e e e e e e e e d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d 
d d f 2 2 2 2 2 2 2 f d d d d d d d f 1 1 1 1 1 1 1 f d d d d d d d f e e e e e e f d d d d d d d d d f e e e e e e e e f d d d d d d d d f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f d f e e e e e e f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
d d f f f f f f f f f d d d d d d d f f f f f f f f f d d d d d d d f f f f f f f f d d d d d d d d d f f f f f f f f f f d d d d d d d d f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d d d d e d d d d d d d d d d d d d e d d d d d d d f d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b f e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b f e e e e e e e e f f f f e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b f e e e e e e e f e e f e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b f e e e e e 1 1 f 1 1 f 1 1 e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b f e e e e e 1 f 1 1 f 1 1 1 e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b f e e e e e 1 f 1 1 f 1 1 1 e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f e e e e e f f f f 1 1 f f f f e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f e e e e e 1 1 1 1 1 1 f 1 e f e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b f e e e e e 1 1 1 1 1 f 1 1 f e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b f e e e e 1 1 1 1 1 f 1 1 f e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b f e e e e e 1 1 1 1 f 1 1 f e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e 1 1 1 1 f f f f e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e 1 1 1 1 1 1 1 e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f e e e e e e e e e e e e e e e e e e e f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f d 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
Phil = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
info.setLife(3)
info.startCountdown(60)
Phil.setPosition(100, 80)
Phil.setFlag(SpriteFlag.StayInScreen, true)
Visitor = sprites.create(img`
. . . . . f f f f . . . . . 
. . . f f 5 5 5 5 f f . . . 
. . f 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 d b b d 5 5 5 f . 
f 5 5 5 b 4 4 4 4 b 5 5 5 f 
f 5 5 c c 4 4 4 4 c c 5 5 f 
f b b f b f 4 4 f b f b b f 
f b b 4 1 f d d f 1 4 b b f 
. f b f d d d d d d f b f . 
. f e f e 4 4 4 4 e f e f . 
. e 4 f 6 9 9 9 9 6 f 4 e . 
. 4 d c 9 9 9 9 9 9 c d 4 . 
. 4 f b 3 b 3 b 3 b b f 4 . 
. . f f 3 b 3 b 3 3 f f . . 
. . . . f f b b f f . . . . 
`, SpriteKind.Enemy)
Visitor.setPosition(10, 102)
Visitor.follow(Phil, 5)
Props = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Food)
game.onUpdateInterval(3000, function () {
    Props.setPosition(Math.randomRange(10, 90), Math.randomRange(10, 110))
})
