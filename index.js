// import slugify from 'slugify';

/*var slugify = require('slugify') the using shows above is the ES6 correctness using. In package,
the "type": "modeule" is added and then in js file, import slugify from 'slugify'; is written instead of
require format. ES6 keyword.
*/
// const inputTitle = slugify('Hello World! My name is Mert', '/')

// console.log(inputTitle);

import introduction, {addition, subtraction, text, user, users} from "./my-moudle.js";
// The defaul export is imported like above and the other export is also like that. {a, b, c, ..}
introduction("Mert")
console.log(addition(534, 23));
console.log(subtraction(100, 25));
console.log(text);
console.log(user);
console.log(users);