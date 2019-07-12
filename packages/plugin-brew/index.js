const exec = require('child_process').exec;
const async = require('async');

class Brew {
  constructor(datadir) {
    this.name = 'brew';
    this.description = 'Homebrew ...';

    this.datadir = datadir;
  }

  restore(data, cb) {
    const cmd = data.binary || 'brew';

    async.each(data.taps, (item, callback) => {
      exec(`${cmd} tap ${item.name}`, {
        cwd: this.datadir,
        encoding: 'utf8',
      }, (err, stdout, stderr) => {
        return callback(err);
      });
    }, cb);
  }
};

module.exports = Brew;
