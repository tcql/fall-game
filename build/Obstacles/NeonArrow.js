// Generated by CoffeeScript 1.6.3
var NeonArrow, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NeonArrow = (function(_super) {
  __extends(NeonArrow, _super);

  function NeonArrow() {
    _ref = NeonArrow.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  NeonArrow.prototype.init = function() {
    NeonArrow.__super__.init.call(this);
    this.animations.add('glow', [0, 1, 1, 2, 2, 2, 2]);
    return this.animations.play('glow', 10, true);
  };

  NeonArrow.prototype.getSheet = function() {
    return "glow-arrow";
  };

  NeonArrow.prototype.update = function() {
    var dist;
    dist = this.game.physics.distanceBetween(this, this.game.player);
    if (dist < 150) {
      return this.game.player.getPower(5 * this.game.time.elapsed);
    }
  };

  NeonArrow.prototype.getSheetFrames = function() {
    return [0];
  };

  return NeonArrow;

})(NeonSign);
