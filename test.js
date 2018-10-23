var logger = require('./index');

// logger.config();
logger.config('log', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.error('hello log');
logger.warn('hello log');
logger.debug('hello log');