import Phaser from 'phaser'

export default {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { x: 0, y: 0 }
    }
  },
}
