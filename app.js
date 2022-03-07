// Quick Question #1
// What does the following code return?
 new Set([1,2,2,3,4]);
 // should return { 1,2,3,4}

 //Quick Question #2
 //What does the following code return?
 [...new Set("referee")].join("")
  // return  "referee"

  //Quick Question #3
  // Whatdoes the Map m look like after running the following code?
   let m = new Map();
   m.set([1,2,3], true);
   m.set([1,2,3], false)
   // should return 0:{array(3)=>false}, 1:{Array(3)=>true}

   //hasDuplicate

   function hasDuplicate(arr){
      let n = new Set(arr);
      return arr.filter(val => n.has(val))
   }

   function vowelCount(str){
       let strArr = str.split("");
       let vowels = "aeiou"
       strArr.

   }