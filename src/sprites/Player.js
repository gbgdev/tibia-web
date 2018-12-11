export default class Player extends Phaser.GameObjects.Sprite {

  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.frame);

    this.scene = config.scene;

    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);
  }

  update(time, delta) {
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
    this.setFrame('sprite-212.png');
    this.move(this.x, this.y - 32);
  }

  moveDown() {
    this.setFrame('sprite-216.png');
    this.move(this.x, this.y + 32);
  }

  moveLeft() {
    this.setFrame('sprite-218.png');
    this.move(this.x - 32, this.y);
  }

  moveRight() {
    this.setFrame('sprite-214.png');
    this.move(this.x + 32, this.y);
  }

  move (x, y) {
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
      }
    });

    this.isMoving = true;
  }
}
