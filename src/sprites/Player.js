export default class Player extends Phaser.GameObjects.Sprite {

  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.frame);

    this.scene = config.scene;

    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);
  }

  update(time, delta) {
    const cursors = this.scene.input.keyboard.createCursorKeys();

    this.body.setVelocity(0);

    if (cursors.left.isDown) {
      this.body.setVelocityX(-200);
    }
    else if (cursors.right.isDown) {
      this.body.setVelocityX(200);
    }
    if (cursors.up.isDown) {
      this.body.setVelocityY(-200);
    }
    else if (cursors.down.isDown) {
      this.body.setVelocityY(200);
    }

    this.body.velocity.normalize().scale(200);
  }
}
