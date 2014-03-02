// Generated by CoffeeScript 1.6.3
var ObstacleManager,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

ObstacleManager = (function(_super) {
  __extends(ObstacleManager, _super);

  ObstacleManager.prototype.timers = false;

  ObstacleManager.prototype.min_time = 700;

  ObstacleManager.prototype.max_time = 3000;

  function ObstacleManager() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.destroyObstacle = __bind(this.destroyObstacle, this);
    this.spawnObstacle = __bind(this.spawnObstacle, this);
    ObstacleManager.__super__.constructor.apply(this, args);
    this.init();
    this.type = Phaser.GROUP;
    return this;
  }

  ObstacleManager.prototype.init = function() {};

  ObstacleManager.prototype.update = function() {
    if (this.timers) {
      if (this.game.time.now - this.prev_spawn > this.interval) {
        return this.spawnObstacle();
      }
    }
  };

  ObstacleManager.prototype.initializeTimers = function() {
    this.generateTime();
    return this.game.time.events.add(this.interval, this.spawnObstacle);
  };

  ObstacleManager.prototype.generateTime = function() {
    var diff;
    diff = Math.random() * (this.max_time - this.min_time);
    this.interval = this.min_time + diff;
    return this.prev_spawn = this.game.time.now;
  };

  ObstacleManager.prototype.spawnObstacle = function() {
    var ob;
    this.initializeTimers();
    if (Math.random() > 0.5) {
      ob = new NeonSign(this.game);
    } else {
      ob = new NeonArrow(this.game);
    }
    this.add(ob);
    return ob.events.onOutOfBounds.addOnce(this.destroyObstacle, ob);
  };

  ObstacleManager.prototype.destroyObstacle = function(ob) {
    var _this = this;
    if (ob.y < 0) {
      return setTimeout(function() {
        return ob.destroy();
      }, 50);
    }
  };

  return ObstacleManager;

})(Phaser.Group);
