'use strict';

let elements = {
    root: {
        name: 'root',
        indexOf: (el) => {
            return (el.name === 'root') ? 1 : -1;
        }
    },
    parent: {
        name: 'parent',
        indexOf: (el) => {
            return (el.name === 'parent') ? 1 : -1;
        }
    },
    child: {
        name: 'child',
        indexOf: (el) => {
            return (el.name === 'child') ? 1 : -1;
        }
    },
    sibling: {
        name: 'sibling',
        indexOf: (el) => {
            return (el.name === 'sibling') ? 1 : -1;
        }
    }
};

elements.root.parentNode = null;
elements.parent.parentNode = elements.root;
elements.child.parentNode = elements.parent;
elements.sibling.parentNode = elements.parent;

let fixtures = {

    elements: elements,

    e: {
        target: null
    },

    trigger: (eventType) => {
        if (fixtures[`_${eventType}`]) {
            fixtures[`_${eventType}`](fixtures.e);
        }
    },

    document: {

        addEventListener: (eventType, eventHandler) => {
            fixtures[`_${eventType}`] = eventHandler;
        },

        removeEventListener: (eventType) => {
            fixtures[`_${eventType}`] = null;
        }

    }

};

module.exports = fixtures;
