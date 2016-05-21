'use strict';

module.exports = (data) => {
    console.log(`${data} in test.module`);
    require('./test.module.2')(data);
};