var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

/*
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
*/

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!"); 
       } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}

console.log('Here are the topics we learned through prework:');
listTopics();
console.log('What topic should we study first?');
selectTopic();