var particle = {
  position: null,
  velocity: null,

  create: function (x, y, speed, direction) {
    var obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(speed);        // per time unit
    obj.velocity.setAngle(direction);     
    return obj;
  },

  update: function () {
    this.position.addTo(this.velocity);
  }
};