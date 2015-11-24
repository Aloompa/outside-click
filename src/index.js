/**
 * If the click happened outside our element, pass it along, otherwise stop!
 *
 * @param  {Function} handleEvent Click handler.
 * @param  {Object}   e           Click/touch Event.
 * @return {void}
 */
const handleClick = (handleEvent, e) => {
    let level = 0;

    for (let target = e.target; target; target = target.parentNode) {
        let found = this.elements.indexOf(target) > -1;

        if (found) {
            return;
        }

        level++;
    }

    handleEvent(e);
}

/**
 * @class     OutsideClick
 * @classdesc Utility class for handling clicks and touches outside of a specific element.
 *
 * @param {Array} elements DOM Nodes.
 */
class OutsideClick {

    constructor (...elements) {
        this.elements = elements;
        this.handlers = [];
    }

    /**
     * Add an event handler.
     *
     * @param  {Function} eventHandler Click handler.
     * @return {void}
     */
    addHandler (eventHandler) {
        let fn = handleClick.call(this, eventHandler);
        this.handlers.push(fn);

        document.addEventListener('mousedown', fn);
        document.addEventListener('touchstart', fn);

        return fn;
    }

    /**
     * Remove an event handler.
     *
     * @param  {Function} eventHandler Click handler.
     * @return {Boolean} true on success
     */
    removeHandler (eventHandler) {
        let index = this.handlers.indexOf(eventHandler);

        if (index < 0) {
            return false;
        }

        this.handlers.splice(index, 1);

        document.removeEventListener('mousedown', eventHandler);
        document.removeEventListener('touchstart', eventHandler);
    }

    /**
     * Convenience method for remove all outside event handlers on the relevant element.
     *
     * @return {void}
     */
    removeAllHandlers () {
        this.handlers.forEach((elem) => {
            this.removeHandler(elem);
        });
    }

}

module.exports = OutsideClick;
