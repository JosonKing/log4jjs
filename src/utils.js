'use strict';

var utils = module.exports;

utils.shouldLog = function(level, methodLevel) {
  var levelNumber = 0;
  if (level.toLowerCase() == 'info') {
    levelNumber = 1;
  }
  if (level.toLowerCase() == 'debug') {
    levelNumber = 2;
  }
  if (level.toLowerCase() == 'warn') {
    levelNumber = 3;
  }
  if (level.toLowerCase() == 'error') {
    levelNumber = 4;
  }
  if (methodLevel >= levelNumber) {
    return true;
  }
  return false;
};

/**
 * 将时间转换为指定格式
 * @param {string} fmt 时间格式
 * @param {Date} date 时间
 */
utils.dateFtt = function(fmt, date) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};
