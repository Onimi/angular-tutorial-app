const path = require('path');

const clientAppName = require('../../package.json').name;
const relativeOutputPath = require('../../angular.json').projects[clientAppName].architect.build.options.outputPath;

const outputPath = path.join(__dirname, '../../', relativeOutputPath);
const indexPath = path.join(outputPath, 'index.html');

module.exports.getPath = function () {
    return outputPath;
}
module.exports.getIndexPath = function () {
    return indexPath;
}