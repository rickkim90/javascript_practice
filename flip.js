const flip = fn => (...args) => fn(args.pop(), ...args);

let a = { name: 'Dohyun Kim' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
