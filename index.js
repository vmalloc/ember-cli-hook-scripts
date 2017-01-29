/* jshint node: true */
'use strict';

var syncExec = require('sync-exec');

module.exports = {
    name: 'ember-cli-hook-scripts',

    preBuild() {
        this._exec('preBuild');
    },

    postBuild() {
        this._exec('postBuild');
    },

    buildError() {
        this._exec('buildError');
    },

    postBuild() {
        this._exec('postBuild');
    },


    _exec(hookName) {
        var full_path = '~/.config/ember/hooks/' + hookName;

        syncExec(full_path);
    },

};
