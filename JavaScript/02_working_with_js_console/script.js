console.log(100);
console.log('Hello world', 100);
console.log('Hello', 100, true);

const x = 100;
console.log(x);
console.error('Alert');
console.warn('warning');
console.table({ name: 'mahesh', age: 31, role: 'software engineer' });

console.group('Simple');

console.log(x);
console.error('Alert');
console.warn('warning');

console.groupEnd();

const styles = 'padding:10px; background-color: black; color: green;';
console.log('%cHello World', styles);
