/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    RangeController = require("montage/core/range-controller").RangeController;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            var arrayForRangeController = [
                {index:0,name:"Cell 1"},
                {index:1,name:"Cell 2"},
                {index:2,name:"Cell 3"},
                {index:3,name:"Cell 4"},
                {index:4,name:"Cell 5"},
                ];
            this.rangeController = new RangeController().initWithContent(arrayForRangeController);
        }
    },
    handleIncrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.value.element.textContent);
            this.templateObjects.value.element.textContent = value + 1;
        }
    },

    handleDecrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.value.element.textContent);
            this.templateObjects.value.element.textContent = value - 1;
        }
    }

});
