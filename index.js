import 'babel-polyfill';
// var FileSaver = require('file-saver');
var utils = require('./lib/utils');
var logger = module.exports;

logger.config = function (level, color, appender) {
  this.level = !!level ? level : 'ERROR';
  this.color = !!color ? color : 'black';
  this.appender = !!appender ? appender : 'console';
};

logger.log = function (...message) {
  if (utils.shouldLog(this.level, 0)) {
    if (this.appender.toLowerCase() == 'file') {
      // var blob = new Blob(["Hello, world!"], {
      //   type: "text/plain;charset=utf-8"
      // });
      // FileSaver.saveAs(blob, "helloworld.txt");
    } else {
      console.log(utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'LOG', '=>', ...message);
    }
  }
};
logger.info = function (...message) {
  if (utils.shouldLog(this.level, 1)) {
    console.info(utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'INFO', '=>', ...message);
  }
};
logger.debug = function (...message) {
  if (utils.shouldLog(this.level, 2)) {
    console.debug(utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'DEBUG', '=>', ...message);
  }
};
logger.warn = function (...message) {
  if (utils.shouldLog(this.level, 3)) {
    console.warn(utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'WARN', '=>', ...message);
  }
};
logger.error = function (...message) {
  if (utils.shouldLog(this.level, 4)) {
    console.error(utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'ERROR', '=>', ...message);
  }
};