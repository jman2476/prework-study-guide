var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for(var i = 0; i < topics.length; i++){
    console.log(topics[i]);
    if (topics[i] === 'HTML') {
        console.log("Let's study HTML!");
      } else if (topics[i] === 'CSS') {
        console.log("Let's study CSS!");
      } else if (topics[i] === 'Git') {
        console.log("Let's study Git!");
      } else if (topics[i] === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}

/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/

var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes.length);

for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x])
   }