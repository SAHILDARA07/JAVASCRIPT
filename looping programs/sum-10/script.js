// fibonacci sequence
  let a = 0, b = 1, temp;
  for (let i = 0; i < 10; i++) {
    console.log(a); 
    temp = a;
    a = b;
    b = temp + b;
  }
  let c = 0, d = 1;
while (c < 100) {
  console.log(c);
  temp = c;
  c = d;
  d = temp + d;
}
let e = 0, f = 1;
do{
    console.log(e);
    temp = e;
    e = f;
    f = temp + f;
}while (e < 100);