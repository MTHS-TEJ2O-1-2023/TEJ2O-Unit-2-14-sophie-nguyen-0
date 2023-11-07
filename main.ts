/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: oct 2023
 * This program makes LED sprite move diagonally
*/

// variable
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()

// p seress "A" button
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  // loop
  while (loopCounter <= 5) {
    basic.pause(500)

    // LED moves diagonally
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter++
  }

  sprite.delete()
  basic.showIcon(IconNames.Rabbit)
})

// press "B" button
input.onButtonPressed(Button.B, function () {

  // setup
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)

  // loop
  while (loopCounter >= -1) {
    basic.pause(500)

    // LED moves diagonally
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter--
  }
  
  sprite.delete()
  basic.showIcon(IconNames.Rabbit)
})
