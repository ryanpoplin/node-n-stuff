'use strict';

// the following lines of code will demonstrate the power of WebStorm's breakpoint system to follow control flow:
function breakpoint(data) {
    console.log(`${data} is good...`);
    require('./test.module')(data);
}
// breakpoint('data');

// RT Class?
// class User {
//     constructor() {
//         this.name = '';
//         this.enabled = false;
//     }
//     getName(user) {
//         if (user.enabled) {
//             return user.name;
//         }
//     }
//     userRT(name) {
//         if (!name) throw Error('no need for a name?');
//         let newUser = new User();
//         newUser.name = name;
//         newUser.enabled = !newUser.enabled;
//         return newUser;
//     }
// }
// let user = new User();
// let updatedUser = user.userRT('Ryan Poplin');
// setInterval(() => {
//     console.log(`${user.getName(updatedUser)}`);
//     console.log(`${updatedUser.getName(user)}`);
// }, 1000);

