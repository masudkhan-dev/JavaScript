const collage = {
  name: "SRC",
  class: ["11", "12", "13", "14", "15", "16"],
  event: ["bijoy dibos", "21 feb", "holiday"],
  unique: {
    color: "sky",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(collage.unique.color);

console.log(collage.unique.result.gpa);

console.log(collage.event[2]);

// চাইলে যেকোনো আইটেম acces করা যায় change করা যায় আবার সেট ও করা যায় 
collage.event[1] = "16 december";
 console.log(collage.event);

 // ডিলিট ও করা যায় 

 delete collage.class;

 console.log(collage)