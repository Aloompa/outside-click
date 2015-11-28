'use strict';

const outsideClick = require('../index');
const assert = require('assert');
const dom = require('./mocks/dom');

describe('The Outside Click Testing Suite', () => {
    describe('When we click on an element outside the passed in element', () => {
        it('Should trigger the callback for a sibling', (done) => {
            global.document = dom.document;

            outsideClick(dom.elements.child, () => {
                assert.ok(1);
                done();
            });

            dom.e.target = dom.elements.sibling;

            dom.trigger('mousedown');
        });

        it('Should trigger the callback for a parent', (done) => {
            global.document = dom.document;

            outsideClick(dom.elements.child, () => {
                assert.ok(1);
                done();
            });

            dom.e.target = dom.elements.parent;

            dom.trigger('touchstart');
        });

        it('Should trigger the callback for a grandparent', (done) => {
            global.document = dom.document;

            outsideClick(dom.elements.child, () => {
                assert.ok(1);
                done();
            });

            dom.e.target = dom.elements.root;

            dom.trigger('mousedown');
        });
    });

    describe('When we click on the passed in element', () => {
        it('Should not trigger the callback', (done) => {
            global.document = dom.document;

            outsideClick(dom.elements.child, () => {
                throw new Error('This should not have been triggererd');
            });

            dom.e.target = dom.elements.child;

            dom.trigger('mousedown');

            setTimeout(() => {
                assert.ok(1);
                done();
            }, 50);
        });
    });

    describe('When we unsubscribe an outside click', () => {
        it('Should not trigger the callback after it is taken off', (done) => {
            global.document = dom.document;

            const outsideClickHandler = outsideClick(dom.elements.child, () => {
                throw new Error('This should not have been triggererd');
            });

            dom.e.target = dom.elements.sibling;

            outsideClickHandler.off();

            dom.trigger('mousedown');

            setTimeout(() => {
                assert.ok(1);
                done();
            }, 50);
        });
    });
});
