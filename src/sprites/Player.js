export default class Player extends Phaser.GameObjects.Sprite {

  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.frame);

    this.scene = config.scene;

    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);
  }

  update(time, delta, global) {
    if (this.isMoving === true) return;

    const cursors = this.scene.input.keyboard.createCursorKeys();

    if (cursors.up.isDown) {
      this.moveUp();
    }
    else if (cursors.down.isDown) {
      this.moveDown();
    }
    if (cursors.left.isDown) {
      this.moveLeft();
    }
    else if (cursors.right.isDown) {
      this.moveRight();
    }
  }

  moveUp() {
    this.anims.play("playerMoveUp");
    this.move(this.x, this.y - 32, function(instance) {
      instance.anims.stop('playerMoveUp');
      instance.setFrame('up.png');
    });
  }

  moveDown() {
    this.anims.play("playerMoveDown");
    this.move(this.x, this.y + 32, function(instance) {
      instance.anims.stop('playerMoveDown');
      instance.setFrame('down.png');
    });
  }

  moveLeft() {
    this.anims.play("playerMoveLeft");
    this.move(this.x - 32, this.y, function(instance) {
      instance.anims.stop('playerMoveLeft');
      instance.setFrame('left.png');
    });
  }

  moveRight() {
    this.anims.play('playerMoveRight');
    this.move(this.x + 32, this.y, function(instance) {
      instance.anims.stop('playerMoveRight');
      instance.setFrame('right.png');
    });
  }

  move (x, y, callback) {
    this.scene.add.tween({
      targets: [this],
      ease: 'Sine.easeInOut',
      duration: 800,
      delay: 0,
      x: {
        getStart: () => this.x,
        getEnd: () => x,
      },
      y: {
        getStart: () => this.y,
        getEnd: () => y,
      },
      onComplete: () => {
        this.isMoving = false;
        callback(this);
      }
    });

    this.isMoving = true;
  }
}
