
console.log('m_1.js is loading.')

// setTimeout(async () => {
//     let { two } = await import('./m_2.js');
//     console.log(two)
// }, 3000);

import { two } from "./m_2.js";

console.log(two)