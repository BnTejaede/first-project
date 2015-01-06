/**
 * @module ui/hello-world-dom.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldDom
 * @extends Component
 */
exports.HelloWorldDom = Component.specialize(/** @lends HelloWorldDom# */ {
    constructor: {
        value: function HelloWorldDom() {
            this.super();
        }
    }
});
