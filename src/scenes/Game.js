import Phaser from 'phaser';

const tilemapJSON = require('../map/map.json');

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {}
  preload () {
    this.load.image('sprite_01', '/assets/images/sprite_01.png');
    this.load.tilemapTiledJSON('map', tilemapJSON);
  }

  create () {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('sprite_01', 'sprite_01');

    const belowPlayer = map.createStaticLayer('Below Player', tileset, 0, 0);
    const abovePlayer = map.createStaticLayer('Above Player', tileset, 0, 0);
  }
}
