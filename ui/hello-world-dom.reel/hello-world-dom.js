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
    },
    draw: {
        value: function() {
            
            var fragment = document.createDocumentFragment(); 
            var div = document.createElement("div");
            div.textContent = "Hello, World!";
            fragment.appendChild(div);
            fragment.appendChild(div.cloneNode(true));
            fragment.appendChild(div.cloneNode(true));
            fragment.firstChild.classList.add("HelloWorldDom-left");
            fragment.lastChild.classList.add("HelloWorldDom-right");
            this.element.appendChild(fragment);
        }
    }
});
