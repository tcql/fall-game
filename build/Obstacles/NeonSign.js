// Generated by CoffeeScript 1.6.3
var NeonSign, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NeonSign = (function(_super) {
  __extends(NeonSign, _super);

  function NeonSign() {
    _ref = NeonSign.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  NeonSign.prototype.init = function() {
    var offset;
    NeonSign.__super__.init.call(this);
    offset = 30 * this.scale.x;
    this.body.setRectangle(this.width - offset, this.height - offset, offset / 2, offset / 2);
    return this.body.immovable = true;
  };

  NeonSign.prototype.update = function() {
    var dist;
    dist = this.game.physics.distanceBetween(this, this.game.player);
    if (dist < 150) {
      return this.game.player.getPower(5 * this.game.time.elapsed);
    }
  };

  NeonSign.prototype.getSheetFrames = function() {
    return [0, 1, 2];
  };

  return NeonSign;

})(FixedObstacle);
