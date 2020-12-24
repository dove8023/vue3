console.log('m_1.js is loading.')

import { two } from "./m_2.js";

console.log(two)


setTimeout(async () => {
    let { three } = await import('./m_3.js');
    console.log(three)
}, 3000);