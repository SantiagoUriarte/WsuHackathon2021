const path = require('path')

function getAbsolutePathOfCaller() {
    return path.dirname(require.main.filename);
}


exports.getAbsolutePathOfCaller = getAbsolutePathOfCaller;