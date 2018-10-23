this.level = 'ERROR';
this.color = 'red';

module.exports.log = function (message) {
  console.log(new Date().toLocaleString(), ': ', this.level, ':', this.color, ':', message);
};

module.exports.config = function (level, color) {
  this.level = level;
  this.color = color;
}