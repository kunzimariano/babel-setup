// generators
 function *test() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}


for (var i of test()) {
  console.log(i);
}

var meh = test();
console.log(meh.next());
console.log(meh.next());
console.log(meh.next());
console.log(meh.next());