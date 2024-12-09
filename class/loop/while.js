/*
        while(){}       এটা দ্বারা লুপ করা হয় মানে এক লেখা একাধিক বার প্রদসন করা হয় 

        num = num + 1
        num += 1
        num++ 

        একই কাজ করে

*/

let num = 0;

while (num < 2) {
  console.log("hello while loop", num);
  num += 1;
}

// ========= ---- ====================

let love = 0;
while (love < 10) {
  console.log("i love you", (love += 1), "times");
}

// ===========================================

let hate = 0;

while (hate < 10) {
  console.log("i hate you", hate++);
}

// =============== useing i ============
//        i just a variable name it will be any letters

let i = 0;

while (i < 5) {
  console.log("hello", i++);
}

let m = 0;

while (m++ < 5) {
  console.log("hello m", m);
}
