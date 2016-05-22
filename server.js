'use strict';

// the following lines of code will demonstrate the power of WebStorm's breakpoint system to follow control flow:
function breakpoint(data) {
    console.log(`${data} is good...`);
    require('./test.module')(data);
}
breakpoint('data');

