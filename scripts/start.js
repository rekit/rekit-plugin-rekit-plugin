const path = require('path');
const start = require('rekit-studio/lib/startDevServer');

const root = path.join(__dirname, '..');
start({
  projectRoot: root,
  pluginDir: root,
  pluginDirNoUI: true, // UI part is defined webpack config entry in dev time.
  noDevDll: false,
  port: require('../rekit.json').devPort,
});
