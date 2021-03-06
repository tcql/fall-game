// Generated by CoffeeScript 1.6.3
var FixedObstacle,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FixedObstacle = (function(_super) {
  __extends(FixedObstacle, _super);

  function FixedObstacle(game) {
    var frame, x;
    this.game = game;
    frame = this.getRandomFrame();
    x = this.getSide();
    FixedObstacle.__super__.constructor.call(this, this.game, x, this.game.world.height + 300, this.getSheet(), frame);
    this.adjustPlacement();
    this.body.velocity.y = this.game.speed;
    this.body.immovable = true;
    this.body.rebound = false;
    this.init();
  }

  FixedObstacle.prototype.init = function() {};

  FixedObstacle.prototype.adjustPlacement = function() {
    this.anchor.setTo(0.5, 0.5);
    if (this.x < this.game.world.width / 2) {
      return this.x = this.x + this.width / 2;
    } else {
      return this.x = this.x - this.width / 2;
    }
  };

  FixedObstacle.prototype.getSheet = function() {
    return 'obstacles';
  };

  FixedObstacle.prototype.getSheetFrames = function() {
    return [];
  };

  FixedObstacle.prototype.getRandomFrame = function() {
    var frames;
    frames = this.getSheetFrames();
    return this.game.math.getRandom(frames);
  };

  FixedObstacle.prototype.getSide = function() {
    return this.game.math.getRandom([Block.block_width - 15, this.game.world.width - Block.block_width + 15]);
  };

  return FixedObstacle;

})(Phaser.Sprite);
