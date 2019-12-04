for (let codePoint of 'foo') {
    console.log(codePoint)
}

let text = String.fromCodePoint(0x20BB7);
console.log(text);
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}

let s = 'Hello world ffff!';

console.log(1,s.startsWith('Hello')) // true
console.log(2,s.endsWith('!')) // true
console.log(3,s.includes('fffdf')) // true
console.log(4,s.indexOf('ffff')>=0);

// document.getElementById('#result').innerHTML=`There are <b>${basket.count}</b> items
//    in your basket, <em>${basket.onSale}</em>
//   are on sale!
// `;
