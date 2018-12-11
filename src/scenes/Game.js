import Phaser from 'phaser';
import Player from '../sprites/Player';

const tilemapJSON = require('../map/map.json');

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {}
  preload () {
    this.load.image('sprite_01', '/assets/images/sprite_01.png');
    this.load.tilemapTiledJSON('map', tilemapJSON);
    this.load.atlas('sprites', '/assets/images/sprites.png', '/assets/images/sprites.json');
  }

  create () {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('sprite_01', 'sprite_01');
    const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);

    this.worldLayer = map.createStaticLayer('World', tileset, 0, 0);

    this.worldLayer.setCollisionByProperty({ collides: true });

    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

    this.player = new Player({
      scene: this,
      x: spawnPoint.x,
      y: spawnPoint.y,
      frame: 'sprite-212.png',
      key: 'sprites'
    });

    this.cameras.main.startFollow(this.player);
  }

  update (time, delta) {
    this.player.update(time, delta);
  }
}
