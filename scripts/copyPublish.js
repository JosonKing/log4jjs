var ncp = require('ncp').ncp;

ncp.limit = 16;

ncp('./lib/', './publish/log4jkjs/lib/', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});

// ncp('./lib/', './publish/log4jkjs/lib/');
// ncp('./index.js', './publish/log4jkjs/index.js');
// ncp('./LICENSE', './publish/log4jkjs/LICENSE');
// ncp('./package.json', './publish/log4jkjs/package.json');
// ncp('./README.md', './publish/log4jkjs/README.md');