'use strict';

const outsideClick = require('./outsideClick');
const moduleExporter = require('module-exporter');

module.exports = moduleExporter('outsideClick', outsideClick);
