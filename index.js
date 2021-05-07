const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (array) => {
  array.map(words=>{
    
    const letters = words.split(" ")

    const mapped = letters.map(cap=> cap[0].toUpperCase() + cap.splice(1))
  })
// // let size = array.length
//  let wordArray = array.split(" ")
//   {
//   // wordArray[i]
//   wordArray.map(words=>words[0].toUpperCase())
    
  
  
// }
// return tutorials
}