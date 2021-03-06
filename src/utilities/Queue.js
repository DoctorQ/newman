var jsface = require("jsface"),
    _und = require('underscore');

/**
 * @name Queue
 * @classdesc Queue meant to be used as mixin
 * @namespace
 */
var Queue = jsface.Class({
    _queue: [],
    addToQueue: function (obj) {
        this._queue.push(obj);
    },
    getFromQueue: function () {
        return this._queue.shift();
    },
    getFromQueueWithoutRemoving: function() {
        return _und.clone(this._queue[0]);
    },
    purgeAllItemsInQueue: function () {
        this._queue.splice(0, this._queue.length);
    },
    isEmptyQueue: function () {
        return !this._queue.length;
    },
    getAllItems: function () {
        return this._queue;
    },
    getItemWithIndex: function (index) {
        return this._queue.splice(index, 1);
    },
    getItemWithIndexWithoutRemoval: function (index) {
        return _und.clone(this._queue[index]);
    }
});

module.exports = Queue;
