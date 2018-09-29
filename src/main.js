import Phaser from 'phaser'

import GameScene from './scenes/Game'
import config from './config'

const gameConfig = Object.assign(config, {
  scene: [GameScene]
})

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig)
  }
}

window.game = new Game()
