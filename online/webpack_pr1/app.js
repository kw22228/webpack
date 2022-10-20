const a = 1;

function foo(a1) {
  return a1;
}

foo(a);

const b = 1;

foo(b);

const bar = function bar() {};

foo(bar);

let c = 1;
c = 2;

foo(c);
