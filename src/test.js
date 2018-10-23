var { config, log, info, error, warn, debug } = require('./index');

// config();
config('log', 'red', 'file');
log('hello log', 'log2', 'log3');
info('hello log');
error('hello log');
warn('hello log');
debug('hello log');